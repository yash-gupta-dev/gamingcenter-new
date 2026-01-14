import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { getItemFromStorage } from "../../../utils/localstorage.utils";
import type { User } from "../../../types/user.types";

export const api = createApi({
  reducerPath: "api",
  baseQuery: fetchBaseQuery({
    baseUrl: import.meta.env.VITE_BASE_URL + 'api/',
    prepareHeaders: async (headers: Headers) => {
      const user = await getItemFromStorage<User>('user');
      const accessToken = user?.accessToken;
      if (accessToken) {
        headers.set("Authorization", `Bearer ${accessToken}`);
      }
      return headers;
    },
  }),
  tagTypes: ["Auth"],
  endpoints: (_) => ({}),
});
