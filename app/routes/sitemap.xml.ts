import type { LoaderFunction } from "react-router";

export const loader: LoaderFunction = async () => {
    const baseUrl = "https://darshmenon.github.io";
    const today = new Date().toISOString().split("T")[0]; // YYYY-MM-DD

    // Define all routes for both new and legacy sites
    const routes = [
        // New React Portfolio
        { path: "/", priority: "1.0", frequency: "weekly" },
        { path: "/about", priority: "0.9", frequency: "monthly" },
        { path: "/projects", priority: "0.8", frequency: "weekly" },
        { path: "/contact", priority: "0.7", frequency: "monthly" },
        { path: "/robocloud-hub", priority: "0.8", frequency: "weekly" },

        // Legacy Static Portfolio
        { path: "/my-portfolio-website/", priority: "0.7", frequency: "monthly" },
        { path: "/my-portfolio-website/about/", priority: "0.6", frequency: "monthly" },
        { path: "/my-portfolio-website/projects/", priority: "0.6", frequency: "monthly" },
        { path: "/my-portfolio-website/contact/", priority: "0.5", frequency: "monthly" },
        { path: "/my-portfolio-website/blog/", priority: "0.6", frequency: "monthly" },
        { path: "/my-portfolio-website/robocloud-hub/", priority: "0.6", frequency: "monthly" },
    ];

    const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${routes
            .map(
                (route) => `  <url>
    <loc>${baseUrl}${route.path}</loc>
    <lastmod>${today}</lastmod>
    <changefreq>${route.frequency}</changefreq>
    <priority>${route.priority}</priority>
  </url>`
            )
            .join("\n")}
</urlset>
`;

    return new Response(sitemap, {
        headers: {
            "Content-Type": "application/xml",
            "xml-version": "1.0",
            "encoding": "UTF-8",
        },
    });
};
