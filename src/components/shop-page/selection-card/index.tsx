import { FC } from "react";
import "./selection-card.css";
import { Coffee } from "../../../types/types";
import { NavLink } from "react-router-dom";
import { useAppDispatch } from "../../../redux/store";
import { addToCart } from "../../../redux/cartSlice";
import { toast } from "react-toastify";
import FilledButton from "../../button/filledButton";

interface Props {
  coffee: Coffee;
}

export const SelectionCard: FC<Props> = ({ coffee }) => {
  const dispatch = useAppDispatch();
  const dispatchCart = () => {
    dispatch(
      addToCart({
        id: coffee.id,
        name: coffee.name,
        image: coffee.image,
        price: coffee.price,
        quantity: 1,
        description: coffee.description,
      })
    );
    toast.success(`${coffee?.name} coffee is added`);
  };
  return (
    <article className="selection-card">
      <NavLink to={`/shop/details/${coffee.id}`} className="selection-card">
        <img src={coffee.image} alt="" className="selection-card-img" />
        <div className="selection-card-content">
          <div className="selection-card-title">
            <h2>{coffee.name}</h2>
            <span>${coffee.price}.00 USD</span>
          </div>
        </div>
      </NavLink>
      <FilledButton text="Add to cart" type="accent" onclick={dispatchCart} />
    </article>
  );
};

export default SelectionCard;
