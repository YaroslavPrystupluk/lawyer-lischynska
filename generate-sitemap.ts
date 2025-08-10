import { SitemapStream, streamToPromise } from 'sitemap';
import { createWriteStream } from 'fs';
import * as path from "node:path";


// Домен сайту
const siteUrl = 'https://advocate-lishchynska.rivne.ua';

// Сторінки для генерації (можна розширювати)
const pages = [
    '/',
    '/contacts',
    '/services',
    '/blog',
    '/about'
];

(async () => {
    try {
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
