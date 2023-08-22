import { createClient } from "next-sanity";

import { apiVersion, dataset, projectId, useCdn } from "../env";

export const client = createClient({
  apiVersion,
  dataset,
  projectId,
  useCdn,
<<<<<<< HEAD
  token: process.env.SANITY_SECRET_TOKENS,
=======
  token: process.env.SANITY_SECRET_TOKEN,
>>>>>>> c25f7bf0d432cfe815fec878be5bce6cb0f07709
});