import { USER_ENDPOINT } from "@/utils";
import { apiSlice } from "./apiSlice";

export const userSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getAllUsers: builder.query({
      query: () => USER_ENDPOINT,
      keepUnusedDataFor: 5,
    }),
    getUserById: builder.query({
      query: (userId) => `${USER_ENDPOINT}/${userId}`,
      keepUnusedDataFor: 5,
    }),
  }),
});

export const { useGetAllUsersQuery, useGetUserByIdQuery } = userSlice;
