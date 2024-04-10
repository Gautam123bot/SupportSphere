import Item from "./Item";
import { PRODUCTS, RESOURCES, COMPANY, SUPPORT } from "./Menus";
import { getImageUrl } from "../../utils";
const ItemsContainer = () => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-4 gap-6 sm:px-72 px-5 py-32">
      <Item Links={PRODUCTS} title="PRODUCTS" />
      {/* <div className="p-6"><img className="size-36" src={getImageUrl("images/logo.png")} alt="" /></div> */}
      <Item Links={RESOURCES} title="RESOURCES" />
      <Item Links={COMPANY} title="COMPANY" />
      <Item Links={SUPPORT} title="SUPPORT" />
    </div>
  );
};

export default ItemsContainer;