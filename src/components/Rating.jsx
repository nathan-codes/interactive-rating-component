import iconLogo from "../assets/images/icon-star.svg";
import "./Rating.css";

function Rating() {
  return (
    <article className="Rating">
      <span className="star-logo">
        <img src={iconLogo} alt="star-icon" />
      </span>

      <h1>How did we do? </h1>
      <p className="description">
        Please let us know how we did with your support request. All feedback is
        appreciated to help us improve our offering!
      </p>

      <form action="#">
        <label htmlFor="1">
          <input type="radio" id="1" name="rating" />
          <span>1</span>
        </label>

        <label htmlFor="2">
          <input type="radio" id="2" name="rating" />
          <span>2</span>
        </label>

        <label htmlFor="3">
          <input type="radio" id="3" name="rating" />
          <span>3</span>
        </label>

        <label htmlFor="4">
          <input type="radio" id="4" name="rating" />
          <span>4</span>
        </label>

        <label htmlFor="5">
          <input type="radio" id="5" name="rating" />
          <span>5</span>
        </label>

        <div>
          <button className="btn">SUBMIT</button>
        </div>
      </form>
    </article>
  );
}

export default Rating;
