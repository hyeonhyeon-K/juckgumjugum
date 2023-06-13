import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
export const userApi = createApi({
    reducerPath: "userApi",
    refetchOnFocus: true,
    baseQuery: fetchBaseQuery({
        baseUrl: 'mongodb+srv://jklgus08:kim123@jaeheyon.oyquwtr.mongodb.net/',
    }),
    endpoints: (builder) => ({
        getUsers: builder.query({
            query: () => "users",
        }),
        getUserById: builder.query({
            query: ({ id }) => `users/${id}`,
        }),
    }),
});
export const { useGetUsersQuery, useGetUserByIdQuery } = userApi;