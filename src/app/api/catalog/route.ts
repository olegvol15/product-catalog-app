import { NextResponse } from "next/server";

import { fetchCatalogData } from "@/lib/catalog-api";

export async function GET() {
  try {
    const catalog = await fetchCatalogData();

    return NextResponse.json(catalog);
  } catch (error) {
    const message =
      error instanceof Error ? error.message : "Failed to fetch catalog data";

    return NextResponse.json({ message }, { status: 500 });
  }
}
