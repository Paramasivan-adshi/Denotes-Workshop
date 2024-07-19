/** @type {import('next-sitemap').IConfig} */
const config = {
  siteUrl: 'http://localhost:3000', // Local URL for testing
  generateRobotsTxt: true, // (optional)
  // optional
  robotsTxtOptions: {
    policies: [
      { userAgent: '*', allow: '/' },
    ],
  },
}

module.exports = config;
