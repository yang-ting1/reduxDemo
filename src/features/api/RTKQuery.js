import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const apiSlice = createApi({
  reducerPath: 'api',
  baseQuery: fetchBaseQuery({ baseUrl: '/' }),
  endpoints: builder => ({
    getPosts: builder.query({
      query: () => '/api.json'
    }),
    update: builder.mutation({
      query: ({ id, ...patch }) => {
        console.log('xxx')
        return {
          url: '/api.json',
          method: 'PATCH',
          body: patch,
        }
      },
    }),
    getAsyncCount: builder.query({
      async queryFn(_arg, _queryApi, _extraOptions, fetchWithBQ) {
        // get a random user
        // const result = await fetchWithBQ(`user/${_arg.id}/posts`)
        const result = await fetchCount(_arg.count)
        return result.data
          ? { data: result.data }
          : { error: result.error }
      },
    }),
  })
})

export const { useGetPostsQuery, useUpdateMutation, useGetAsyncCountQuery } = apiSlice

export default apiSlice

export function fetchCount(amount = 1) {
  return new Promise((resolve) =>
    setTimeout(() => resolve({ data: amount }), 500)
  );
}
