import { Filter, PageTitle } from "@/components/helpers";
import { DataTable } from "@/components/shared";
import { Button } from "@/components/ui/button";
import { productTableHeaders } from "@/lib/data";
import { Plus } from "lucide-react";
import Link from "next/link";

const ProductsPage = () => {
  return (
    <section className="section">
      <div className="flex sm:items-center justify-between max-sm:flex-col w-full gap-x-5 gap-y-2">
        <PageTitle
          title="Products"
          desc="Manage all your products from this page, add new products, update existing products and delete products"
        />
      </div>
      <div className="mt-8">
        <div className="mb-2 bg-neutral-100 dark:bg-neutral-900 rounded-lg py-3 px-5 w-full flex items-center justify-end gap-x-2">
          <Link href="/products/add" aria-label="Add Product">
            <Button
              variant="outline"
              className="bg-primaryCol hover:bg-primaryCol/80 dark:bg-primaryCol dark:hover:bg-primaryCol/80 text-darkText hover:text-darkText center gap-x-2"
              size="sm"
            >
              <Plus className="size-5" />
              Add Product
            </Button>
          </Link>

          <Filter />
        </div>
        <DataTable headers={productTableHeaders} isProduct />
      </div>
    </section>
  );
};

export default ProductsPage;
