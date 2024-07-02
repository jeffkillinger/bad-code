import { client } from "../utils/sanity/client"

// Fetch content with GROQ
async function getContent() {
  const CONTENT_QUERY = `*[_type == "post"] {
  ...,
  content[] {
    _type,
    ...,
    defined(string) => string
  },
  tags[]
}
`
  const content = await client.fetch(CONTENT_QUERY)
  return content
}

// Log content to console
getContent().then(content => console.log(content))

// Insert the return component calling `getContent()` below




export default function Home() {
  return (
    <main>
      <h2>How's it going in there?</h2>
    </main>
  );
} 
