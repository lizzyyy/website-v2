/**
 * @type {import('gatsby').GatsbyConfig}
 */

module.exports = {

  siteMetadata: {
    title: `Lizzy Wang`,
    siteUrl: `https://www.yourdomain.tld`,
  },
  plugins: ["gatsby-plugin-styled-components",
  {
    resolve: `gatsby-plugin-manifest`,
    options: {
      name: "Lizzy Wang's Personal Site",
      short_name: "Lizzy Wang",
      start_url: "/",
      background_color: "#6b37bf",
      theme_color: "#6b37bf",
      // Enables "Add to Homescreen" prompt and disables browser UI (including back button)
      // see https://developers.google.com/web/fundamentals/web-app-manifest/#display
      display: "standalone",
      icon: "src/images/icon.png", // This path is relative to the root of the site.
      // An optional attribute which provides support for CORS check.
      // If you do not provide a crossOrigin option, it will skip CORS for manifest.
      // Any invalid keyword or empty string defaults to `anonymous`
      crossOrigin: `use-credentials`,
    },
  }]
}
