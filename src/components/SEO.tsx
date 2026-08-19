import { Helmet } from "react-helmet-async";
import { useLocation } from "react-router-dom";

interface SEOProps {
  title: string;
  description: string;
  keywords?: string;
  schema?: object[];
}

export default function SEO({
  title,
  description,
  keywords,
  schema,
}: SEOProps) {
  const location = useLocation();

  const canonicalUrl = `https://mrrenovate.ae${location.pathname}`;

  return (
    <Helmet>
      <title>{title}</title>

      <meta name="description" content={description} />

      {keywords && (
        <meta
          name="keywords"
          content={keywords}
        />
      )}

      <meta name="robots" content="index,follow" />

      <meta property="og:title" content={title} />

      <meta property="og:description" content={description} />

      <meta property="og:type" content="website" />

      <meta property="og:url" content={canonicalUrl} />

      <meta
        property="og:image"
        content="https://mrrenovate.ae/og-image.jpg"
      />

    <meta
        name="twitter:card"
        content="summary_large_image"
      />
      <meta name="twitter:title" content={title} />
      <meta
        name="twitter:description"
        content={description}
      />
      <meta
        name="twitter:image"
        content="https://mrrenovate.ae/og-image.jpg"
      />
      
      <link
        rel="canonical"
        href={canonicalUrl}
      />

      {schema?.map((item, index) => (
        <script
          key={index}
          type="application/ld+json"
        >
          {JSON.stringify(item)}
        </script>
      ))}
    </Helmet>
  );
}