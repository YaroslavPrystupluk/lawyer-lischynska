import { SitemapStream, streamToPromise } from 'sitemap';
import { createWriteStream } from 'fs';
import * as path from "path";
import {IPost} from "./src/types/types";


// Домен сайту
const siteUrl = 'https://advocate-lishchynska.rivne.ua';

//Отримуємо маршрути з API
async function getBlogRoutes(): Promise<string[]> {
    try {
        const res = await fetch("https://example.com/api/blog");
        const posts: unknown = await res.json();

        if (!Array.isArray(posts)) {
            throw new Error("Дані не є масивом");
        }

        return (posts as IPost[]).map((post) => `/blog/${post.id}`);
    } catch (e) {
        console.error("Не вдалося завантажити пости:", e);
        return [];
    }
}




(async () => {
    try {
        const blogRoutes = await getBlogRoutes();

// Сторінки для генерації (можна розширювати)
        const pages = [
            "/",
            "/contacts",
            "/services",
            "/blog",
            "/pricing",
            "/about",
            "/services/consultations",
            "/services/documentation",
            "/services/support",
            ...blogRoutes, // динамічно з API
            "/404",
        ];
        const sitemap = new SitemapStream({ hostname: siteUrl });

        const writeStream = createWriteStream(
            path.resolve('./public/sitemap.xml')
        );

        sitemap.pipe(writeStream);

        pages.forEach((page) => {
            sitemap.write({
                url: page,
                changefreq: 'monthly',
                priority: page === '/' ? 1.0 : 0.8,
                lastmod: new Date().toISOString()
            });
        });

        sitemap.end();

        await streamToPromise(sitemap);
        console.log('✅ Sitemap.xml згенеровано!');
    } catch (err) {
        console.error('❌ Помилка при генерації sitemap:', err);
    }
})();
