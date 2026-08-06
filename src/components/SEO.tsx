import { Helmet } from "react-helmet-async";
import { useLocation } from "react-router-dom";

interface SEOProps {
  title: string;
  description: string;
  keywords?: string;
}

export default function SEO({
  title,
  description,
  keywords,
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

      <meta
        property="og:description"
        content={description}
      />

      <meta
        property="og:type"
        content="website"
      />

      <meta
        property="og:url"
        content={window.location.href}
      />

      <link
        rel="canonical"
        href={`https://mrrenovate.ae${location.pathname}`}
      />
    </Helmet>
  );
}