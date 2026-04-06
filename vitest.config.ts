import { dirname, resolve } from "node:path";
import { fileURLToPath } from "node:url";
import { defineConfig } from "vitest/config";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

export default defineConfig({
  test: {
    include: ["test/**/*.spec.ts", "src/**/*.spec.ts"],
    environment: "node",
    globals: true,
  },
  resolve: {
    alias: {
      "@domain": resolve(__dirname, "./src/domain"),
      "@application": resolve(__dirname, "./src/application"),
      "@infrastructure": resolve(__dirname, "./src/infraestructure"),
      "@shared": resolve(__dirname, "./src/shared"),
    },
  },
});
