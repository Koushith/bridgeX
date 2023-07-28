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

export const apiSlice = createApi({
  baseQuery: baseQuery,
  tagTypes: ["Product", "Order", "User"],
  endpoints: (builder) => ({
    //inject all endpoints through injectedendpoint hook
  }),
});
