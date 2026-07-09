
import { computed } from 'vue';
import { storeModuleFactory } from '../../services/store';
export type Book = Record<string, unknown> & {
    id?: number;
    title: string;
    summary: string;
    author_id: number;
}

const bookStore = storeModuleFactory('books');


export const getAllBooks = bookStore.getters.all;

export const fetchBooks = async () => {
    return bookStore.actions.getAll();
};

export const createBook = async (newBook: Book) => {
    await bookStore.actions.create(newBook);
};

export const getBookById = (id: number) => bookStore.getters.getById(id);


export const updateBook = async (id: number, updatedBook: Book) => {
    await bookStore.actions.update(id, updatedBook)
};

export const deleteBook = async (id: number) => {
        await bookStore.actions.delete(id);
};

export const getBookByAuthorId = computed(() => bookStore.getters)