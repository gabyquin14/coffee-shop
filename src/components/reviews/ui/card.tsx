import { FC } from "react";
import { AiFillStar, AiOutlineStar } from "react-icons/ai";

interface Props {
  review: {
    name: string;
    profesion: string;
    image: string;
    review: string;
    region: string;
    rate: Array<number>;
  };
}

export const ReviewCard: FC<Props> = ({ review }) => {
  return (
    <div className="reviewCard">
      <img className="reviewCard-image" src={review.image} alt={review.image} />
      <div className="reviewCard-info">
        <h3>
          {review.name} / {review.profesion}
        </h3>
        <p>{review.review}</p>
        <div className="reviewCard-stars-container">
          <span className="reviewCard-region">{review.region}</span>
          <div className="reviewCard-stars">
            {review.rate.map((star, id) => {
              return (
                <span key={id}>
                  {star === 1 ? <AiFillStar /> : <AiOutlineStar />}
                </span>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ReviewCard;
