import manifest from "@/generated/portfolio-gallery-manifest.json";

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
  metadataSource: "excel";
  assetSource: "optimized-web" | "original-source";
  image: string;
  width: number;
  height: number;
  size: number;
  source: string;
};

const publishedStatuses = new Set(["active", "publish", "published", "ready", "yes"]);

export const portfolioItems = (manifest.items as PortfolioItem[])
  .filter((item) => publishedStatuses.has(item.publishStatus.trim().toLowerCase()))
  .sort((left, right) =>
    left.category.localeCompare(right.category) ||
    left.sortOrder - right.sortOrder ||
    left.originalFileName.localeCompare(right.originalFileName, "en", { numeric: true })
  );
