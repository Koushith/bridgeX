import { USER_ENDPOINT } from "@/utils";
import { apiSlice } from "../apiSlice";


type RegisterUserRequest = {
  name: string;
  email: string;
  walletAddress: string[];
  jwtToken: string;
};

type GetUserResponse = {
  id: string;
  name: string;
  email: string;
  walletAddress: string;
};

export const userSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    registerUser: builder.mutation({

      query: (name: string, email: string, walletAddress: string, jwtToken: string) => ({
        url: `${USER_ENDPOINT}/auth`,
        method: "POST",
        headers: {
          authorization: `Bearer ${jwtToken}`,
        },
        body: {
          name,
          email,
          walletAddress,
        },
      }),
    }),
    getAllUsers: builder.query({
      query: () => USER_ENDPOINT,
      keepUnusedDataFor: 5,
    }),
    getUserById: builder.query({
      query: (userId: string) => `${USER_ENDPOINT}/${userId}`,
      keepUnusedDataFor: 5,
    }),
  }),
});

export const { useGetAllUsersQuery, useGetUserByIdQuery, useRegisterUserMutation } = userSlice;
