// /** @type {import('next').NextConfig} */
const nextConfig = {
    experimental: {
        appDir: true,
      },
      // async rewrites() {
      //   return [
      //     {
      //       source: '/finlifeapi/',
      //       destination: 'https://finlife.fss.or.kr/finlifeapi/depositProductsSearch.json?auth=855905c0fb40765d5f0ee1cf2746ce6c&topFinGrpNo=020000&pageNo=1', // 실제 API 엔드포인트
      //     },
      //   ];
      // }
}

module.exports = nextConfig
