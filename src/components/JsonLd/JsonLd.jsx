// Structured data as a script tag. `<` is escaped so text from the CMS (blog
// titles, descriptions) can't close the tag early.
export default function JsonLd({ data }) {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data).replace(/</g, '\\u003c') }}
    />
  );
}
