"use client";

import { useQuery } from "@tanstack/react-query";

import type { CatalogData } from "@/types/catalog";

export const catalogQueryKey = ["catalog"] as const;

export function useCatalogQuery() {
  return useQuery({
    queryKey: catalogQueryKey,
    queryFn: fetchCatalogFromApiRoute,
  });
}

async function fetchCatalogFromApiRoute(): Promise<CatalogData> {
  const response = await fetch("/api/catalog");

  if (!response.ok) {
    throw new Error("Failed to fetch catalog data");
  }

  return (await response.json()) as CatalogData;
}
