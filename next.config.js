const withPWA = require("next-pwa")({
  dest: "public",
  register: true,
  skipWaiting: true,
  disable:
    process.env.NODE_ENV === "development" ||
    process.env.NODE_ENV === "preview" ||
    process.env.NODE_ENV === "production",
});

/** @type {import('next').NextConfig} */
module.exports = withPWA({
  reactStrictMode: true,
});