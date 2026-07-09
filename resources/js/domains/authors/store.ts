import { Book, getBooksByAuthorId } from '../books/store';
import { storeModuleFactory } from '../../services/store';
import { computed } from 'vue';

export type Author = Record<string, unknown> & {
    id?: number;
    name: string;
    description: string;
}

const authorStore = storeModuleFactory('authors');


export const getAllAuthors = authorStore.getters.all.value;

export const fetchAuthors = async () => {
    return authorStore.actions.getAll();
};

export const createAuthor = async (newAuthor: Author) => {
    await authorStore.actions.create(newAuthor);
};

export const getAuthorById = (id: number) => authorStore.getters.getById(id);


export const updateAuthor = async (id: number, updatedAuthor: Author) => {
    await authorStore.actions.update(id, updatedAuthor)
};

export const deleteAuthor = async (id: number) => {
    try{
        const result = await authorStore.actions.delete(id);
        return result.data.message
    } catch(error){
        const books = getBooksByAuthorId(id).value.map((item: Book) => item.title);
        if ( books.length > 0 ) {
            return "Er zijn nog boeken van deze auteur in het overzicht:\n" + books.join(",\n") + ".";
        }
        return "Er is een onverwachte error: " + error;
    }
};
