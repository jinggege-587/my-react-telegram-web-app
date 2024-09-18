/*
 * @Author: jhy
 * @Date: 2024-09-14 10:07:55
 * @LastEditTime: 2024-09-14 10:16:42
 * @LastEditors: jhy
 * @Description:
 * @FilePath: /geyi/my-react-telegram-web-app/vite.config.ts
 */
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
// import basicSsl from '@vitejs/plugin-basic-ssl';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    outDir: "./docs",
  },
  base: "./",
});
