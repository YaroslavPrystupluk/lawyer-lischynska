import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import vitePrerender from "vite-plugin-prerender";
import * as path from "node:path";
import {IPost} from "./src/types/types.ts";



// Отримуємо маршрути з API
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

export default defineConfig(async () => {
    const blogRoutes = await getBlogRoutes();

    return {
        plugins: [
            react(),
            vitePrerender({
                staticDir: path.resolve(__dirname, "dist"),
                routes: [
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
                ],
                postProcess(renderedRoute) {
                    renderedRoute.html = renderedRoute.html
                        .replace(/>\s+</g, "><")
                        .trim();
                    return renderedRoute;
                },
            }),
        ],
        server: {
            port: 3010,
        },
        build: {
            outDir: "dist",
            emptyOutDir: true,
        },
    };
});
