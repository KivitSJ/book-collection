import axios from 'axios';
import { ref, computed } from 'vue';
interface Book {
    id: number;
    title: string;
    summary: string;
}

const books = ref([]);

export const getAllBooks = computed<Book[]>(() => books.value);

export const fetchBooks = async () => {
    const {data} = await axios.get('/api/books');
    if(!data) return
    books.value = data.data;
};