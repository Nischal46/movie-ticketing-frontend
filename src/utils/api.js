import { createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react';

const baseUrl = 'http://localhost:8000/api/v1/'

export const api = createApi({
    baseQuery: fetchBaseQuery({ baseUrl }),
    endpoints: (builder) => ({

        registerUser: builder.mutation({
            query:(registerData) => ({
                url: '/user/register',
                method: 'POST',
                body: registerData
            })
        }),

        loginUser: builder.mutation({
            query: (loginData) => ({
                url: '/user/login',
                method: "POST",
                body: loginData
            })
        }),

        getAllMovies: builder.query({
            query: () => '/filim'
        }),

        getSingleMovies: builder.query({
            query: (id) => `/filim/${id}`
        }),

   
    })
});

export const {useGetAllMoviesQuery, useGetSingleMoviesQuery, useRegisterUserMutation, useLoginUserMutation} = api;
