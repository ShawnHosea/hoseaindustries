import { getStyles } from '@enhance/arc-plugin-styles'

export default function Head(state) {
  const { store = {} } = state

  // pageTitle is set in /app/preflight.mjs
  const { pageTitle = '' } = store

  // Enhance Styles
  // CSS will be included as a <link> tag for local development.
  // For deployments, CSS will be included as a <style> tag in order to eliminate the blocking network request created by <link> tags.
  const styles = process.env.ARC_LOCAL
    ? getStyles.linkTag()
    : getStyles.styleTag()

  return `
    <!DOCTYPE html>
    <html class="font-sans" lang="en">
    <head>
    <!-- Google tag (gtag.js) -->
    <script async src="https://www.googletagmanager.com/gtag/js?id=G-053D7BK387"></script>
    <script>
      window.dataLayer = window.dataLayer || [];
      function gtag(){dataLayer.push(arguments);}
      gtag('js', new Date());

      gtag('config', 'G-053D7BK387');
    </script>
      <meta charset="utf-8">
      <meta name="viewport" content="width=device-width, initial-scale=1">
      <!-- Primary Meta Tags -->
      <title>${pageTitle}</title>
      <meta name="title" content="${pageTitle}" />
      <meta name="description" content="Hosea Industries" />

      <!-- Open Graph / Facebook -->
      <meta property="og:type" content="website" />
      <meta property="og:url" content="https://hoseaindustries.com/" />
      <meta property="og:title" content="${pageTitle}" />
      <meta property="og:description" content="Hosea Industries" />
      <meta property="og:image" content="https://hoseaindustries.com/_public/meta.png" />

      <!-- Twitter -->
      <meta property="twitter:card" content="summary_large_image" />
      <meta property="twitter:url" content="https://hoseaindustries.com/" />
      <meta property="twitter:title" content="${pageTitle}" />
      <meta property="twitter:description" content="Hosea Industries" />
      <meta property="twitter:image" content="https://hoseaindustries.com/_public/meta.png" />
      ${styles}
      <style>
        body {
          background-color: #ffffff;
          color: #000000;
        }

      </style>
      <link rel="icon" type="image/png" href="/_public/favicon-96x96.png" sizes="96x96" />
      <link rel="icon" type="image/svg+xml" href="/_public/favicon.svg" />
      <link rel="shortcut icon" href="/_public/favicon.ico" />
      <link rel="apple-touch-icon" sizes="180x180" href="/_public/apple-touch-icon.png" />
      <meta name="apple-mobile-web-app-title" content="Hosea Industries" />
      <link rel="manifest" href="/_public/site.webmanifest" />
      <link rel="stylesheet" href="/_public/styles.css">
      <link rel="preconnect" href="https://fonts.googleapis.com">
      <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
      <link href="https://fonts.googleapis.com/css2?family=Noto+Sans:ital,wght@0,100..900;1,100..900&display=swap" rel="stylesheet">
    </head>
`
}
