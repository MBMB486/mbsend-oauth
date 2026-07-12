import type { NextConfig } from "next";

const nextConfig = {
  turbopack: {
    root: __dirname,   // garante que a raiz é a pasta do projeto
  },
};
export default nextConfig;
