import { defineDocs } from "@farming-labs/docs";
// import { pixelBorder } from "@farming-labs/theme/pixel-border";
import { colorful } from "@farming-labs/theme/colorful";
export default defineDocs({
  entry: "docs",
  theme: colorful({
    ui: {
      layout: {
        sidebarWidth: 300,
      },
      sidebar: {
        background: "red",
      },
      // colors: { primary: "#6366f1" },
    },
  }),
  metadata: {
    titleTemplate: "%s – @portless/docs",
    description: "Documentation for @portless/docs",
  },
});
