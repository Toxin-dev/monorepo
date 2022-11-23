import { AiOutlineMenu, AiOutlineArrowDown } from "react-icons/ai";
import { Price } from "../Price";
export function Aside() {
  return (
    <aside className="aside">
      <div className="aside__department">
        <header className="aside__department__header">
          <AiOutlineMenu />
          All departments
          <AiOutlineArrowDown />
        </header>
        <ul className="aside__department__ul">
          <li className="aside__department__li">
            <a href="#fresh-meat">Fresh Meat</a>
          </li>
          <li className="aside__department__li">
            <a href="#vegitables">Vegetables</a>
          </li>
          <li className="aside__department__li">
            <a href="#fruits-and-gifts">Fruit & Nut Gifts</a>
          </li>
          <li className="aside__department__li">
            <a href="#fresh-berries">Fresh Barries</a>
          </li>
          <li className="aside__department__li">
            <a href="#ocean-foods">Ocean Foods</a>
          </li>
          <li className="aside__department__li">
            <a href="#butter-and-eggs">butter & Eggs</a>
          </li>
          <li className="aside__department__li">
            <a href="#fast-food">Fast Food</a>
          </li>
          <li className="aside__department__li">
            <a href="#fresh-onion">Fresh Onion</a>
          </li>
          <li className="aside__department__li">
            <a href="#papaya-and-crisps">Papayaya & Crips</a>
          </li>
          <li className="aside__department__li">
            <a href="#oatmeal">Oatmeal</a>
          </li>
          <li className="aside__department__li">
            <a href="#fresh-bananas">Fresh Bananas</a>
          </li>
        </ul>
      </div>
      <div className="aside__price">
        <Price />
      </div>
    </aside>
  );
}
