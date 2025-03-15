import { defineConfig, passthroughImageService } from "astro/config";

import preact from "@astrojs/preact";

// https://astro.build/config
export default defineConfig({
    site: "https://blog.kelvinguerrero.dev",
    integrations: [preact()],
    vite: {
        css: {
            transformer: "lightningcss",
        },
    },
    image: {
        service: passthroughImageService(),
    },
});
