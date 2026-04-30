import "server-only";

import { normalizeCatalogData } from "@/lib/catalog-model";
import type { CatalogData, CatalogSourceData } from "@/types/catalog";

const CATALOG_API_URL =
  "https://1jbod7rtr5.execute-api.eu-central-1.amazonaws.com/prod/exercise";

export async function fetchCatalogData(): Promise<CatalogData> {
  const apiKey = process.env.PRODUCTS_API_KEY;

  if (!apiKey) {
    throw new Error("Missing PRODUCTS_API_KEY environment variable");
  }

  const response = await fetch(CATALOG_API_URL, {
    headers: {
      "x-api-key": apiKey,
    },
  });

  if (!response.ok) {
    throw new Error(`Failed to fetch catalog data: ${response.status}`);
  }

  const data = (await response.json()) as CatalogSourceData;

  return normalizeCatalogData(data);
}


