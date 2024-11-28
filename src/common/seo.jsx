import Head from "next/head";

const SEO = ({
  pageTitle,
  description = "Your default page description here",
  robots = "index, follow",
  imageUrl,
}) => (
  <Head>
    <title>
      {pageTitle
        ? `${pageTitle} - Technology & IT Solutions React Next.js Template`
        : "Default Title"}
    </title>

    <meta httpEquiv="x-ua-compatible" content="ie=edge" />
    <meta name="description" content={description} />
    <meta name="robots" content={robots} />
    <meta
      name="viewport"
      content="width=device-width, initial-scale=1, shrink-to-fit=no"
    />

    <meta property="og:type" content="website" />
    <meta
      property="og:title"
      content={
        pageTitle
          ? `${pageTitle} - Technology & IT Solutions React Next.js Template`
          : "Default Title"
      }
    />
    <meta property="og:description" content={description} />
    <meta
      property="og:image"
      content={imageUrl || "/assets/img/logo/footer-logo.svg"}
    />
    <meta
      property="og:url"
      content={typeof window !== "undefined" ? window.location.href : ""}
    />

    {/* Twitter Meta Tags */}
    <meta name="twitter:card" content="summary_large_image" />
    <meta
      name="twitter:title"
      content={
        pageTitle
          ? `${pageTitle} - Technology & IT Solutions React Next.js Template`
          : "Default Title"
      }
    />
    <meta name="twitter:description" content={description} />
    <meta
      name="twitter:image"
      content={imageUrl || "/assets/img/logo/footer-logo.svg"}
    />

    <link
      rel="apple-touch-icon"
      sizes="57x57"
      href="/assets/favicons/apple-icon-57x57.png"
    />
    <link
      rel="apple-touch-icon"
      sizes="60x60"
      href="/assets/favicons/apple-icon-60x60.png"
    />
    <link
      rel="apple-touch-icon"
      sizes="72x72"
      href="/assets/favicons/apple-icon-72x72.png"
    />
    <link
      rel="apple-touch-icon"
      sizes="76x76"
      href="/assets/favicons/apple-icon-76x76.png"
    />
    <link
      rel="apple-touch-icon"
      sizes="114x114"
      href="/assets/favicons/apple-icon-114x114.png"
    />
    <link
      rel="apple-touch-icon"
      sizes="120x120"
      href="/assets/favicons/apple-icon-120x120.png"
    />
    <link
      rel="apple-touch-icon"
      sizes="144x144"
      href="/assets/favicons/apple-icon-144x144.png"
    />
    <link
      rel="apple-touch-icon"
      sizes="152x152"
      href="/assets/favicons/apple-icon-152x152.png"
    />
    <link
      rel="apple-touch-icon"
      sizes="180x180"
      href="/assets/favicons/apple-icon-180x180.png"
    />
    <link
      rel="icon"
      type="image/png"
      sizes="192x192"
      href="/assets/favicons/android-icon-192x192.png"
    />
    <link
      rel="icon"
      type="image/png"
      sizes="32x32"
      href="/assets/favicons/favicon-32x32.png"
    />
    <link
      rel="icon"
      type="image/png"
      sizes="96x96"
      href="/assets/favicons/favicon-96x96.png"
    />
    <link
      rel="icon"
      type="image/png"
      sizes="16x16"
      href="/assets/favicons/favicon-16x16.png"
    />
    <link rel="manifest" href="/manifest.json" />
    <meta name="msapplication-TileColor" content="#ffffff" />
    <meta name="msapplication-TileImage" content="/ms-icon-144x144.png" />
    <meta name="theme-color" content="#ffffff" />

    <link rel="canonical" href="https://webeyecraft.com" />
  </Head>
);

export default SEO;
