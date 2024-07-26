/** @type {import('next-sitemap').IConfig} */
const config = {
  siteUrl: 'https://workshop.trysimmer.com/',
  generateRobotsTxt: true,
  sitemapSize: 5000, // Adjust this number based on your URL count
  generateIndexSitemap: false, // Avoid generating an index sitemap
  robotsTxtOptions: {
    policies: [
      { userAgent: '*', allow: '/' },
    ],
  },
};

module.exports = config;