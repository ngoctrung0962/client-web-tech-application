import CategoriesShop from "./CategoriesShop.component";
import FilterByPrice from "./FilterByPrice.component";
import FileList from "./FilterList.component";
import Products from "./Products.component";

function Shop() {
  return (
    <section class="shop spad">
      <div class="container">
        <div class="row">
          <div class="col-lg-3 col-md-3">
            <div class="shop__sidebar">
              <CategoriesShop />
              <FilterByPrice />
              <FileList />
            </div>
          </div>
          <Products />
        </div>
      </div>
    </section>
  );
}
export default Shop;
