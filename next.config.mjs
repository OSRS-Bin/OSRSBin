/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  experimental: {
    serverActions: {
      // TODO: We bump this up high to allow for image uploads in the form data,
      // but this is probably not ideal. Maybe try this approach instead (make a
      // new API endpoint, upload image outside of form):
      // https://github.com/vercel/next.js/discussions/53989#discussioncomment-10275737
      bodySizeLimit: '6mb',
    }
  },
};

export default nextConfig;
