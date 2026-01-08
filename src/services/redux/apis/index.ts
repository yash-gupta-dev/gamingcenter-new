import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { getItem } from "../../../utils/localstorage.utils";

export const api = createApi({
  reducerPath: "api",
  baseQuery: fetchBaseQuery({
    baseUrl: "http://localhost:8000/" + 'api/',
    prepareHeaders: async (headers: Headers) => {
      const token = await getItem('token');
      if (token) {
        headers.set("Authorization", `Bearer ${token}`);
      }
      return headers;
    },
  }),
  tagTypes: ["Auth"],
  endpoints: (_) => ({}),
});
