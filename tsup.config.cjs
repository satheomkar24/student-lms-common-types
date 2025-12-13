const { defineConfig } = require("tsup");

export default defineConfig({
  entry: ["src/index.ts"],
  outDir: "dist",
  format: ["cjs", "esm"],
  dts: true,
  clean: true,
  splitting: false, // matches your current output style
  sourcemap: false, // optional
});
