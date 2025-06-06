export default function TextIcon() {
  return (
    <div className="text_icon">
      <div className="left_text">
        <span className="left_text_author">Mischa Sullivan</span>
        <span className="left_text_company">
          <img src="img/bolt.png" alt="thunder icon" /> Bolt Agency
        </span>
      </div>
      <div className="right_icon">
        <span className="right_star">
          <img src="/img/star.png" alt="star icon" />
          <img src="/img/star.png" alt="star icon" />
          <img src="/img/star.png" alt="star icon" />
          <img src="/img/star.png" alt="star icon" />
          <img src="/img/star.png" alt="star icon" />
        </span>
        <span className="right_icon_arrow">
          <img src="/img/left-arrow.png" alt="left arrow" />
          <img src="/img/right-arrow.png" alt="right arrow" />
        </span>
      </div>
    </div>
  );
}
