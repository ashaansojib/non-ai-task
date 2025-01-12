import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { Emails } from "@/global-interfaces";

export const emailApi = createApi({
  reducerPath: "emailApi",
  baseQuery: fetchBaseQuery({ baseUrl: "/" }),
  endpoints: (builder) => ({
    AllEmails: builder.query<Emails[], void>({
      query: () => "inbox.json",
    }),
  }),
});

export const { useAllEmailsQuery } = emailApi;
export default emailApi;
