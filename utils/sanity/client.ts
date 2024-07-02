// utils/sanity/client.ts
import { createClient } from "@sanity/client"

export const client = createClient({
  projectId: "0abuuqsd", 
  dataset: "production", 
  apiVersion: "2024-03-11",
  useCdn: false, 
})