/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  //*--------------------------------------------------*
  // 리다이렉팅
  async redirects() {
    return [
      {
        source: "/yeshtml5",
        destination:
          "https://yeshtml5.notion.site/Yeshtml5-6d2a119356b347cab654a5ca86667d73",
        permanent: false,
      },
    ];
  },
  // 리다이렉팅

  async rewrites() {
    return [];
  },
};

module.exports = nextConfig;
/***********************************************
API키를 감추고싶을때 rewrites사용
source "api/movies" 
destination "https://api.themoviedb.org/3/movie/popular?api_key=API_KEY&language=en-US&page=1" 
************************************************/
