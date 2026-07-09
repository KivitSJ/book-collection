
import { computed } from 'vue';
import { storeModuleFactory } from '../../services/store';
export type Book = Record<string, unknown> & {
    id?: number;
    title: string;
    summary: string;
    author_id: number | null;
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

export const getBooksByAuthorId = (id: number) => computed(() => Object.entries(bookStore.getters.all.value).filter((book) => book[1].author_id == id).map((book) => book[1].title));