import { createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react';

const baseUrl = 'http://localhost:8000/api/v1/'

export const api = createApi({
    baseQuery: fetchBaseQuery({ baseUrl, credentials: 'include' }),
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
                body: loginData,
            })
        }),

        getUser: builder.query({
            query: () => `/user/me`
        }),

        getAllMovies: builder.query({
            query: () => '/filim'
        }),

        getSingleMovies: builder.query({
            query: (id) => `/filim/${id}`
        }),

   
    })
});

export const {useGetAllMoviesQuery, useGetSingleMoviesQuery, useRegisterUserMutation, useLoginUserMutation, useGetUserQuery} = api;
