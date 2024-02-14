import axios, { AxiosError } from "axios";

 const fetchAccessToken = async () => {
    const clientId = "SlSGfGACJ8b7AQnXRhptI5ielIFxGiJCqbqy9YCi7l7SfynMU1";
      const clientSecret = "54mZprlj29cDYzGuJqduStxRQ3SGg1vnTsPvYFul";

    try {
      const response = await axios.post('https://api.petfinder.com/v2/oauth2/token', {
        grant_type: 'client_credentials',
        client_id: clientId,
        client_secret: clientSecret,
      });

      return response.data.access_token;
    } catch (error) {
        return error
    }
  };

const petFinderInstance = axios.create({
  baseURL: 'https://api.petfinder.com/v2',
  timeout: 10000,
  headers: {
    Accept: 'application/json',
    "Content-Type": "application/json",
  },
});

const addAuthorizationHeader = async () => {
  const accessToken = await fetchAccessToken();

  petFinderInstance.defaults.headers.common['Authorization'] = `Bearer ${accessToken}`;
};

export { petFinderInstance, addAuthorizationHeader };

