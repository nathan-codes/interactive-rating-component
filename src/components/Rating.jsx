import iconLogo from "../assets/images/icon-star.svg";
import "./Rating.css";

function Rating() {
  return (
    <article className="Rating">
      <span>
        <img src={iconLogo} alt="star-icon" />
      </span>

      <h1>How did we do? </h1>
      <p>
        Please let us know how we did with your support request. All feedback is
        appreciated to help us improve our offering!
      </p>

      <form action="#">
        <input type="radio" />
        <input type="radio" />
        <input type="radio" />
        <input type="radio" />
        <input type="radio" />
        <div>
          <button className="btn btn-secondary btn-lg">SUBMIT</button>
        </div>
      </form>
    </article>
  );
}

export default Rating;
