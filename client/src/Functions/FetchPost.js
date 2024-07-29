import axios from 'axios';

export const FetchPost = async () => {
    try {
        const response = await axios.get(`${process.env.REACT_APP_API_URL}/`);
        return response.data;
    } catch (error) {
        console.error('There was an error fetching the portfolio items!', error);
        throw error;
    }
};
