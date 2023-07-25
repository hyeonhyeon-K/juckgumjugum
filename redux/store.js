import { configureStore, createSlice } from '@reduxjs/toolkit'

let user = createSlice({
  name : 'user',
  initialState :  {name : 'kim', age : 20},
  reducers : {
    changeName(state){
      state.name = 'park'
    }
  }
})
export let {changeName} = user.actions

let mongo = createSlice({
  name : 'mongo',
  initialState : [{}],
  reducers : {
    addmongo(state, action) {
      state.mongo.push(action.payload);
    }
  }
})
export let {addmongo} = user.actions

export default configureStore({
  reducer: {
    user : user.reducer,
    mongo : mongo.reducer
  }
}) 

// import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
// import { configureStore } from "@reduxjs/toolkit";

// export const userApi = createApi({
//   reducerPath: "userApi",
//   refetchOnFocus: true,
//   baseQuery: fetchBaseQuery({
//     baseUrl: 'https://finlife.fss.or.kr/finlifeapi/depositProductsSearch.json?auth=855905c0fb40765d5f0ee1cf2746ce6c&topFinGrpNo=020000&pageNo=1',
//   }),
//   endpoints: (builder) => ({
//     getUsers: builder.query({
//       query: () => "users",
//     }),
//     getUserById: builder.query({
//       query: ({ id }) => `users/${id}`,
//     }),
//   }),
// });
// export const setDATA = dog => ({
//   type: "SET_DATA",
//   payload: dog,
// });
// const store = configureStore({
//   reducer: {
//     [userApi.reducerPath]: userApi.reducer,
//   },
//   middleware: (getDefaultMiddleware) =>
//     getDefaultMiddleware().concat(userApi.middleware),
//   devTools: process.env.NODE_ENV !== "production",
// });

// export default store;