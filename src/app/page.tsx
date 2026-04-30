import { CatalogView } from "@/components/catalog-view";
import { fetchCatalogData } from "@/lib/catalog-api";

export default async function Home() {
  const catalog = await fetchCatalogData();

  return <CatalogView catalog={catalog} />;
}
