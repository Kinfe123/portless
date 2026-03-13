import { defineDocs } from "@farming-labs/docs";
// import { pixelBorder } from "@farming-labs/theme/pixel-border";
import { colorful } from "@farming-labs/theme/colorful";
import { docsIcons } from "@/lib/docs-icons";
export default defineDocs({
  entry: "docs",
  ordering: "numeric",
  icons: docsIcons,
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
  nav: {
    title: (
      <div
        style={{ display: "flex", alignItems: "center", gap: 2, justifyContent: "space-between" }}
      >
        <div className="flex items-center gap-2 text-xs font-medium text-white/80 dark:text-white/80">
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="lucide w-4 h-4 lucide-book-icon lucide-book"><path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20" /><path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5V4.5A2.5 2.5 0 0 1 6.5 2Z" /></svg>
          <p className="font-mono uppercase text-black dark:text-white/50">PORTLESS docs</p>
        </div>
      </div>
    ),
    url: "/",
  },
  metadata: {
    titleTemplate: "%s – @portless/docs",
    description: "Documentation for @portless/docs",
  },
  themeToggle: { enabled: false, default: "dark" },
});
