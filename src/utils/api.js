import { createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react';

const baseUrl = 'http://localhost:8000/api/v1'

export const api = createApi({
    baseQuery: fetchBaseQuery({ baseUrl }),
    endpoints: (builder) => ({
        getAllMovies: builder.query({
            query: () => '/filim'
        })
    })
});

export const {useGetAllMoviesQuery} = api;
