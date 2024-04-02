import banner from "../../assets/images/pics/bg-pattern-card.svg";
import avatar from "../../assets/images/pics/image-victor.jpg";
import "./Card.css";

const Card = () => {
  return (
    <article className="card">
      <img src={banner} alt="Banner" />
      <div className="card-description">
        <div className="card-img">
          <img src={avatar} alt="Victor Crest" />
        </div>
        <p>
          Victor Crest <span>26</span>
        </p>
        <span>London</span>
      </div>
      <footer className="card-footer">
        <div className="card-footer-item">
          <p>80K</p>
          <span>Followers</span>
        </div>
        <div className="card-footer-item">
          <p>830K</p>
          <span>Likes</span>
        </div>
        <div className="card-footer-item">
          <p>1.4K</p>
          <span>Photos</span>
        </div>
      </footer>
    </article>
  );
};

export default Card;
