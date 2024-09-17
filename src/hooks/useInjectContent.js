import { createRoot } from "react-dom/client"; // For React 18

export const useInjectContent = (iframe, content) => {
  if (iframe) {
    const iframeDoc = iframe.contentDocument || iframe.contentWindow.document;

    // Clear any previous content in the iframe
    iframeDoc.open();
    iframeDoc.write("<!DOCTYPE html><html><head></head><body></body></html>");
    iframeDoc.close();

    // Get all stylesheets from the parent document
    const parentStyles = Array.from(document.styleSheets)
      .map((styleSheet) => {
        try {
          return Array.from(styleSheet.cssRules)
            .map((rule) => rule.cssText)
            .join("\n");
        } catch (e) {
          return ""; // Handle any CORS-related stylesheet errors
        }
      })
      .join("\n");

    // Inject Tailwind CSS and other styles into the iframe
    const styleTag = iframeDoc.createElement("style");
    styleTag.textContent = parentStyles;
    iframeDoc.head.appendChild(styleTag);

    // Create a container for React components
    const iframeRoot = iframeDoc.createElement("div");
    iframeRoot.style.width = "100%";
    iframeRoot.style.height = "100%";
    iframeDoc.body.appendChild(iframeRoot);

    // Render the React content into the iframe using `createRoot` (React 18)
    const root = createRoot(iframeRoot);
    root.render(content);
  }
};
