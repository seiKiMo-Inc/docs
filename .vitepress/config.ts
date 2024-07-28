import { defineConfig } from "vitepress";

// https://vitepress.dev/reference/site-config
export default defineConfig({
    title: "seiKiMo! Docs",
    description: "Documentation for seiKiMo products.",
    srcDir: "docs",
    themeConfig: {
        // https://vitepress.dev/reference/default-theme-config
        nav: [
            { text: "Home", link: "/" },
            { text: "Laudiolin", link: "/services/laudiolin" },
            { text: "Contact Us", link: "/contact" }
        ],

        sidebar: [
            { text: "Contact Us", link: "/contact" },
            {
                text: "Services",
                items: [
                    { text: "Laudiolin", link: "/services/laudiolin" }
                ]
            },
            {
                text: "Laudiolin",
                items: [
                    { text: "Frequently Asked Questions", link: "/laudiolin/faq" },
                ]
            }
        ],

        socialLinks: [
            { icon: "github", link: "https://github.com/seiKiMo-Inc" }
        ],

        footer: {
            message: `"Stupid Dumbasses Make Based Software"`,
            copyright: "Copyright © 2021-Present <a href='https://seikimo.moe'>seiKiMo-Inc</a>"
        },

        search: {
            provider: "local"
        }
    }
});
