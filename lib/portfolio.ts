import manifest from "@/generated/portfolio-gallery-manifest.json";
import toolingGalleryManifest from "@/generated/tooling-gallery-manifest.json";

export type PortfolioCategory = "Injection Molds" | "Plastic Parts";

export type PortfolioItem = {
  id: string;
  batchId: string;
  category: PortfolioCategory;
  originalFileName: string;
  suggestedWebFileName: string;
  webFileName: string;
  imageTitle: string;
  altText: string;
  caption: string;
  shortDescription: string;
  primaryKeyword: string;
  targetLongTailKeyword: string;
  relatedExistingPage: string;
  industry: string;
  moldTypeProcess: string;
  tags: string[];
  sortOrder: number;
  publishStatus: string;
  notes: string;
  metadataSource: "excel" | "approved-substitute";
  image: string;
  width: number;
  height: number;
  size: number;
  source: string;
};

type ToolingGalleryItem = {
  id: string;
  category: "mould" | "plastic-part";
  image: string;
  width: number;
  height: number;
  title?: string;
  alt: string;
  order: number;
  source: string;
};

const temporaryPlasticParts: PortfolioItem[] = (toolingGalleryManifest.items as ToolingGalleryItem[])
  .filter((item) => item.category === "plastic-part")
  .map((item) => ({
    id: `portfolio-${item.id}`,
    batchId: "EXISTING-TOOLING-GALLERY",
    category: "Plastic Parts",
    originalFileName: item.source.split("/").at(-1) ?? item.source,
    suggestedWebFileName: "",
    webFileName: item.image.split("/").at(-1) ?? "",
    imageTitle: item.title ?? "Injection Molded Plastic Part",
    altText: item.alt,
    caption: item.title ?? "Injection molded plastic component",
    shortDescription: "Existing Arktech molded-part project image reused as a temporary Portfolio example.",
    primaryKeyword: "injection molded plastic parts",
    targetLongTailKeyword: "custom injection molded plastic parts",
    relatedExistingPage: "/plastic-injection-molding",
    industry: "Multi-Industry",
    moldTypeProcess: "Plastic Injection Molding",
    tags: ["plastic parts", "injection molding"],
    sortOrder: item.order,
    publishStatus: "Ready",
    notes: "Temporary approved substitute reused from the existing Tooling Gallery.",
    metadataSource: "approved-substitute",
    image: item.image,
    width: item.width,
    height: item.height,
    size: 0,
    source: item.source
  }));

export const portfolioItems = [...(manifest.items as PortfolioItem[]), ...temporaryPlasticParts]
  .filter((item) => ["Ready", "Published"].includes(item.publishStatus))
  .sort((left, right) =>
    left.category.localeCompare(right.category) ||
    left.sortOrder - right.sortOrder ||
    left.originalFileName.localeCompare(right.originalFileName, "en", { numeric: true })
  );
