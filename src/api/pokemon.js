import { API_HOST } from '../utils/constants'

const getPokemonApi = async () => {
    try {
        const url = `${API_HOST}/pokemon?limit=20&offset=0`;
        console.log(url)
        const response = await fetch(url);
        const result = await response.json();
        return result
    } catch(error) {
        throw error;
    }
}

export { getPokemonApi };