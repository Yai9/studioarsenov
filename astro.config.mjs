import { defineConfig } from 'astro/config';
import critters from "astro-critters"
import tailwind from "@astrojs/tailwind"
import compress from "astro-compress";
import vercel from "@astrojs/vercel/serverless"

// https://astro.build/config
export default defineConfig({
  vite: {
    ssr: {
      external: ["svgo"],
    },
  },
  output: "server",
  adapter: vercel(),
  integrations: [critters(), tailwind(), compress()],
})
