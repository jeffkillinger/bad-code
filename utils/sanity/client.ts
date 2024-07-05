// utils/sanity/client.ts
import { createClient } from "@sanity/client";

// The console.logs below show that the variables are working. I'm pretty sure. 
console.log('NEXT_PUBLIC_SANITY_PROJECT_ID:', process.env.NEXT_PUBLIC_SANITY_PROJECT_ID);
console.log('NEXT_PUBLIC_SANITY_DATASET:', process.env.NEXT_PUBLIC_SANITY_DATASET);
console.log('NEXT_PUBLIC_SANITY_API_VERSION:', process.env.NEXT_PUBLIC_SANITY_API_VERSION);

export const client = createClient({
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID || '',
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET || 'production',
  apiVersion: process.env.NEXT_PUBLIC_SANITY_API_VERSION || '2024-07-02',
  useCdn: false,
});