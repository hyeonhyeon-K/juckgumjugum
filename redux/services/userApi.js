import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
export const userApi = createApi({
    reducerPath: "userApi",
    refetchOnFocus: true,
    baseQuery: fetchBaseQuery({
        baseUrl: "https://finlife.fss.or.kr/finlifeapi/depositProductsSearch.json?auth=855905c0fb40765d5f0ee1cf2746ce6c&topFinGrpNo=020000&pageNo=1",
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