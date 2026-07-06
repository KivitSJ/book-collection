import { ref, computed } from 'vue';
import { deleteRequest, getRequest, postRequest, putRequest } from '../../services/http';
export interface Book {
    id: number;
    title: string;
    summary: string;
    author_id: number;
}

const books = ref<Book[]>([]);

export const getAllBooks = computed<Book[]>(() => books.value);

export const fetchBooks = async () => {
    const {data} = await getRequest('/books');
    if(!data) return
    books.value = data.data;
};

export const createBook = async (newBook: Book) => {
    const {data} = await postRequest('/books', newBook);
    if(!data) return
    books.value = data.data;
};

export const getBooksByAuthorId = (id: number) => computed(() => books.value.filter(book => book.author_id == id));

export const getBookById = (id: number) => computed(() => books.value.find(book => book.id == id));

export const updateBook = async (id: number, updatedBook: Book) => {
    const { data } = await putRequest(`/books/${id}`, updatedBook);
    if (!data) return;
    books.value = data.data;
};

export const deleteBook = async (id: number) => {
    await deleteRequest(`/books/${id}`);
    books.value = books.value.filter(book => book.id !== id);
};