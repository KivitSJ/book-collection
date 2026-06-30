import axios from 'axios';
import { ref, computed } from 'vue';
interface Author {
    id: number;
    name: string;
    description: string;
}

const authors = ref([]);

export const getAllAuthors = computed<Author[]>(() => authors.value);

export const fetchAuthors = async () => {
    const {data} = await axios.get('/api/authors');
    if(!data) return
    authors.value = data.data;
};