import propTypes from "prop-types";
import { IoIosArrowForward } from "react-icons/io";
export function Card({ title, children, style }) {
  return (
    <div className="card" style={style}>
      <h2 className="card__title">{title}</h2>
      <div className="card__body">{children}</div>
    </div>
  );
}

export function CardItem({ title, description }) {
  return (
    <div className="card__item">
      <div>
        <div className="card__item-title">{title}</div>
        <div className="card__item-description">{description}</div>
      </div>
      <IoIosArrowForward className="card__item-icon" />
    </div>
  );
}

CardItem.proTotypes = {
  link: propTypes.string,
};

Card.propTypes = {
  cardItem: propTypes.instanceOf(Card),
};
