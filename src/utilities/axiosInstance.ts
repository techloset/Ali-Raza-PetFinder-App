import axios, { AxiosError } from "axios";

const fetchAccessToken = async () => {
  const clientId = process.env.REACT_APP_CLIENT_ID;
  const clientSecret = process.env.REACT_APP_CLIENT_SECRET;

  try {
    const response = await axios.post(
      "https://api.petfinder.com/v2/oauth2/token",
      {
        grant_type: "client_credentials",
        client_id: clientId,
        client_secret: clientSecret,
      }
    );

    return response.data.access_token;
  } catch (error) {
    return error;
  }
};

const petFinderInstance = axios.create({
  baseURL: "https://api.petfinder.com/v2",
  timeout: 10000,
  headers: {
    Accept: "application/json",
    "Content-Type": "application/json",
  },
});

const addAuthorizationHeader = async () => {
  const accessToken = await fetchAccessToken();

  petFinderInstance.defaults.headers.common[
    "Authorization"
  ] = `Bearer ${accessToken}`;
};

export { petFinderInstance, addAuthorizationHeader };
