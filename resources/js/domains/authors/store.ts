import { ref, computed } from 'vue';
import { getBooksByAuthorId } from '../books/store';
import { deleteRequest, getRequest, postRequest, putRequest } from '../../services/http';
import { storeModuleFactory } from '../../services/store';
export interface Author {
    id: number;
    name: string;
    description: string;
}

const authorStore = storeModuleFactory('authors');

const authors = authorStore.getters.all;

export const getAllAuthors = authorStore.getters.all;

export const fetchAuthors = async () => {
    const {data} = await getRequest('/authors');
    if(!data) return
    authorStore.setters.setAll = data.data;
};

export const createAuthor = async (newAuthor: Author) => {
    const {data} = await postRequest('/authors', newAuthor);
    if(!data) return
    authorStore.setters.setAll = data.data;
};

export const getAuthorById = (id: number) => computed(() => authors.value.find(author => author.id == id));

export const updateAuthor = async (id: number, updatedAuthor: Author) => {
    const { data } = await putRequest(`/authors/${id}`, updatedAuthor);
    if (!data) return;
    authors.value = data.data;
};

export const deleteAuthor = async (id: number) => {
    try{
        const result = await deleteRequest(`/authors/${id}`);
        authors.value = authors.value.filter(author => author.id !== id);
        return result.data.message
    } catch(error){
        const books = getBooksByAuthorId(id).value.map((item) => item.title);
        if ( books.length > 0 ) {
            return "Er zijn nog boeken van deze auteur in het overzicht:\n" + books.join(",\n") + ".";
        }
        return "Er is een onverwachte error: " + error;
    }
};