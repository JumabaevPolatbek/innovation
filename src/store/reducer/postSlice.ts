import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { url } from "../api";
import { Posts } from "../models/posts";
import { Pages } from "../models/pages";

export const getApi = createApi({
  reducerPath: "getApi",
  baseQuery: fetchBaseQuery({ baseUrl: url }),
  tagTypes: ["posts", "pages"],
  endpoints: (build) => ({
    getPosts: build.query<Posts, void>({
      query: () => "posts",
      providesTags: ["posts"],
    }),
    getPages: build.query<Pages, void>({
      query: () => "pages",
      providesTags: ["pages"],
    }),
  }),
});

export const { useGetPagesQuery, useGetPostsQuery } = getApi;
