import { Helmet } from "react-helmet-async";

interface SEOProps {
  title: string;
  description?: string;
  type?: string;
}

export default function SEO({ title, description = "Aethera Spark - AI Neural Design Engine", type = "website" }: SEOProps) {
  return (
    <Helmet>
      <title>{title} | Aethera Spark</title>
      <meta name="description" content={description} />
      <meta property="og:type" content={type} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
    </Helmet>
  );
}
