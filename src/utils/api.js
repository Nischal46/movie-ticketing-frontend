import { createApi, fe9tchBaseQuery} from '@reduxjs/toolkit/query/react';

const baseUrl = 'http://localhost:8000/api/v1/'

export const api = createApi({
    baseQuery: fetchBaseQuery({ baseUrl }),
    endpoints: (builder) => ({
        getAllMovies: builder.query({
            query: () => '/filim'
        }),

        getSingleMovies: builder.query({
            query: (id) => `/filim/${id}`
        }),

        registerUser: builder.mutation({
            query:(registerData) => ({
                url: '/register',
                method: 'POST',
                body: registerData
            })
        })
    })
});

export const {useGetAllMoviesQuery, useGetSingleMoviesQuery} = api;
