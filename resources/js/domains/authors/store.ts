import axios from 'axios';
import { ref, computed } from 'vue';
import { getBooksByAuthorId } from '../books/store';
export interface Author {
    id: number;
    name: string;
    description: string;
}

const authors = ref<Author[]>([]);

export const getAllAuthors = computed<Author[]>(() => authors.value);

export const fetchAuthors = async () => {
    const {data} = await axios.get('/api/authors');
    if(!data) return
    authors.value = data.data;
};

export const createAuthor = async (newAuthor: Author) => {
    const {data} = await axios.post('/api/authors', newAuthor);
    if(!data) return
    authors.value = data.data;
};

export const getAuthorById = (id: number) => computed(() => authors.value.find(author => author.id == id));

export const updateAuthor = async (id: number, updatedAuthor: Author) => {
    const { data } = await axios.put(`/api/author/${id}`, updatedAuthor);
    if (!data) return;
    authors.value = data.data;
};

export const deleteAuthor = async (id: number) => {
    const result = await axios.delete(`/api/author/${id}`);
    if(result.data.code === "200"){
        authors.value = authors.value.filter(author => author.id !== id);
        return result.data.message
    }
    const books = getBooksByAuthorId(id).value.map((item) => item.title);
    return result.data.message + "\n" + books.join(",\n") + ".";
};