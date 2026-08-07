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
  return (
    <Helmet>
      <title>{title}</title>

      <meta name="description" content={description} />

      {keywords && (
        <meta
         name="keywords"
         content="home renovation dubai, home renovation company dubai, kitchen renovation dubai, bathroom renovation dubai, villa renovation dubai"
        />
      )}

      <meta name="robots" content="index,follow" />

      <meta property="og:title" content={title} />

      <meta property="og:description" content={description} />

      <meta property="og:type" content="website"/>

      <meta property="og:url" content={`https://mrrenovate.ae${location.pathname}`} />

      <meta property="og:image" content="https://mrrenovate.ae/og-image.jpg" />

      <link
        rel="canonical"
        href={`https://mrrenovate.ae${location.pathname}`}
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