/** @type {import('next').NextConfig} */
export default {
  // Removed basePath and assetPrefix for Vercel deployment
  // Vercel serves apps at the root domain, not subdirectories
  // If you need subdirectory hosting (e.g., GitHub Pages), uncomment below:
  // basePath: process.env.NODE_ENV === "production" ? "/chandra-portfolio" : "",
  // assetPrefix: process.env.NODE_ENV === "production" ? "/chandra-portfolio/" : "",
};
