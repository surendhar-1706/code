import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const cryptoApiHeaders = {
  "X-RapidAPI-Key": "c7fa8235d3msh1ddce5b747c5aa0p1da4e0jsne5df34823909",
  "X-RapidAPI-Host": "coinranking1.p.rapidapi.com",
};
const createRequest = (url: string) => ({ url, headers: cryptoApiHeaders });
export const cryptoDetailsApi = createApi({
  reducerPath: "cryptoDetailsApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://coinranking1.p.rapidapi.com",
  }),
  endpoints: (builder) => ({
    getDetails: builder.query({
      query: (id) => createRequest(`/coin/${id}`),
    }),
    getHistory: builder.query({
      query: ({ id, timeframe }) =>
        createRequest(`/coin/${id}/history/${timeframe}`),
    }),
  }),
});

export const { useGetDetailsQuery, useGetHistoryQuery } = cryptoDetailsApi;
