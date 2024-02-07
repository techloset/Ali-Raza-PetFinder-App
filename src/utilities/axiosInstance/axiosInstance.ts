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


//This is the method we can get the api data for 1 hour.
// const petFinderInstance = axios.create({
// 	// Configuration
// 	baseURL: `https://api.petfinder.com/v2`,
// 	timeout: 3600000,
// 	headers: {
// 		Accept: 'application/json',
// 		Authorization: `Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJhdWQiOiJTbFNHZkdBQ0o4YjdBUW5YUmhwdEk1aWVsSUZ4R2lKQ3FicXk5WUNpN2w3U2Z5bk1VMSIsImp0aSI6IjdkZjI2Mjc1YzJmMWVlMDY0NWFiMTg4NjBhOTEzMjk4NTIwMGFjMTA4ODNmNWYzMTYwMGYyM2RiM2M2M2I4MTcxODExMzg0MDU4NDVlOTcxIiwiaWF0IjoxNzA2MTYxMjc2LCJuYmYiOjE3MDYxNjEyNzYsImV4cCI6MTcwNjE2NDg3Niwic3ViIjoiIiwic2NvcGVzIjpbXX0.JZDAUrOcDI_Ob6CrQyGjucSUTgqvdHoz3HresvZzhfherVQaRmvpxC7FNXGCdkdFYmwWCGfRIau7T-4g-zzAjIWcMBWzn66ejGTbIWdIydBRVykpDOTZwJ5fGgZZofhWHvs1FBmTcKpEefF6O3LD4OnwSr6bFT6Wnv2gGlxM4cFIipyJzpIqQmRua5L7RolyM_zHCzrkGKd-lvun8Nq_lON1mzJC1EPcTRnYEeHidRHhrLh-9SSC_bl45GVRuWekt6_cNcop_2UL_tmCmF2vpfr6JHyFZ_Weem2QmCpP2tOFqHlEOAA8mrGILk6dqM-W8hyCnIKwR5lsflhK_GVqiQ`,
// 		"Content-Type": "application/json",
// 	},
// });
// export default petFinderInstance;