import axios from 'axios';
import { ref, computed } from 'vue';
export interface Book {
    id: number;
    title: string;
    summary: string;
    author_id: number;
}

const books = ref<Book[]>([]);

export const getAllBooks = computed<Book[]>(() => books.value);

export const fetchBooks = async () => {
    const {data} = await axios.get('/api/books');
    if(!data) return
    books.value = data.data;
};

export const createBook = async (newBook: Book) => {
    const {data} = await axios.post('/api/books', newBook);
    if(!data) return
    books.value = data;
};