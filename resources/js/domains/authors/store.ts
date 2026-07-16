import { Book, getBooksByAuthorId } from '../books/store';
import { storeModuleFactory } from '../../services/store';
import { computed } from 'vue';

export interface AuthorType extends Record<string, unknown> {
    name: string;
    description: string;
}

export interface Author extends AuthorType {
    id:number;
}

const authorStore = storeModuleFactory<Author>('authors');


export const getAllAuthors = computed(() => authorStore.getters.all.value);

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
    const deletedAuthor = await authorStore.actions.delete(id);
};
