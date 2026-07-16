
import { computed } from 'vue';
import { storeModuleFactory } from '../../services/store';
export interface BookType extends Record<string, unknown> {
    title: string;
    summary: string;
    author_id: number | null;
}
export interface Book extends BookType {
    id:number;
}

const bookStore = storeModuleFactory<Book>('books');


export const getAllBooks = computed(() => bookStore.getters.all.value );

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

export const getBooksByAuthorId = (id: number) => computed(() => getAllBooks.value.filter((item) => item.author_id == id));