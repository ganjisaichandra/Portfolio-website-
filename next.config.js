/** @type {import('next').NextConfig} */
const isProd = process.env.NODE_ENV === "production";

export default {
  // only if you are hosting at https://domain.com/chandra-portfolio
  basePath: isProd ? "/chandra-portfolio" : "",
  assetPrefix: isProd ? "/chandra-portfolio/" : "",
  // for static export (GitHub Pages):
  // output: "export",
};
