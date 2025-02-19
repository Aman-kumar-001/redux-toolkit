import { createApi ,  fetchBaseQuery } from "@reduxjs/toolkit/query/react";


export const postApi = createApi({
    reducerPath : 'postApi',
    baseQuery : fetchBaseQuery({
        baseUrl: 'https://jsonplaceholder.typicode.com/',
    }),

    endpoints : (builder) =>({
        getAllPost: builder.query({  // Corrected here
            query: () => ({
                url: 'posts',
                method: 'GET'
            })
        }),
        getPostById : builder.query({
            query : (id)=>({
                url:`posts/${id}`,
                method : 'GET'
            })
        }),
        getPostByLimit : builder.query({
            query : (num)=>({
                url:`posts?_limit=${num}`,
                method : 'GET'
            })
        })
    })
})

export const { useGetAllPostQuery , useGetPostByIdQuery , useGetPostByLimitQuery } = postApi;