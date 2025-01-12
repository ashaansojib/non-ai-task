import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { Emails } from "@/global-interfaces";

export const emailApi = createApi({
  reducerPath: "emailApi",
  baseQuery: fetchBaseQuery({ baseUrl: "/" }),
  endpoints: (builder) => ({
    AllEmails: builder.query<Emails[], void>({
      query: () => "inbox.json",
    }),
    // makeArchive: builder.mutation({
    //   query: (id) => ({
    //     method: 'PATCH',
    //     body: 
    //   })
    // })
  }),
});

export const { useAllEmailsQuery } = emailApi;
export default emailApi;
