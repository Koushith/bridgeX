//all base api endpoints

import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

// export const apiSlice = createApi({
//   tagTypes: ["users"],
//   baseQuery: fetchBaseQuery({
//     baseUrl: "xxx",
//   }),
// });

const baseQuery = fetchBaseQuery({
  baseUrl: "",
});

//this file is like an entry point, well not exactly, but all the api query related stuffs are maintained here

export const apiSlice = createApi({
  baseQuery: baseQuery,
  tagTypes: ["Invoice", "Payment", "User"],
  endpoints: (builder) => ({
    //inject all endpoints through injectedendpoint hook
  }),
});
