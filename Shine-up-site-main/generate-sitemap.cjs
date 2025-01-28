const { SitemapStream } = require("sitemap");
const { createWriteStream } = require("fs");
const path = require("path");

async function generateSitemap() {
  const sitemap = new SitemapStream({ hostname: "https://shineup.netlify.app/" });

  // Define the routes
  const pages = [
    { url: "/", changefreq: "daily", priority: 1.0 },
    { url: "/full-portfolio", changefreq: "weekly", priority: 0.8 }
  ];

  // Write each route to the sitemap
  pages.forEach((page) => sitemap.write(page));
  sitemap.end();

  const sitemapPath = path.join(__dirname, "public/sitemap.xml");
  const writeStream = createWriteStream(sitemapPath);

  // Pipe the sitemap stream to the file
  sitemap.pipe(writeStream)
    .on("finish", () => console.log("Sitemap successfully created!"))
    .on("error", (error) => console.error("Error generating sitemap:", error));
}

generateSitemap();
