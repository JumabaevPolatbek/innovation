import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { url } from "../api";
import { Post, Posts } from "../models/posts";
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
    getPost: build.query<Post, string>({
      query: (name) => `posts/${name}`,
      providesTags: ["posts"],
    }),
  }),
});

export const { useGetPagesQuery, useGetPostsQuery, useGetPostQuery } = getApi;
