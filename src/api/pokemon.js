import { API_HOST } from '../utils/constants'

const getPokemonApi = async () => {
    try {
        const url = `${API_HOST}/pokemon?limit=20&offset=0`;
        const response = await fetch(url);
        const result = await response.json();
        return result
    } catch(error) {
        throw error;
    }
}

const getPkemonDetailsByUrlApi = async (url) => {
    try {
        const response = await fetch(url);
        const result = await response.json();
        return result
    } catch(error) {
        throw error;
    }
}

export { getPokemonApi, getPkemonDetailsByUrlApi };