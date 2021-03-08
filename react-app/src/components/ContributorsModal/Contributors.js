import "./Contributors.css";
import Nhuy from "./nhu-yphan.jpeg";
import Nichole from "./nichole_obrien.jpeg";
import Seth from "./seth_witfoth.png"

const Contributors = () => {
  return (
    <div className="contributors-container">
      <div className="contributors-title">Contributors</div>
      <div className="contributors-left">
        <a href="https://nhucleus.io/">
          <img className="contributors-avatar" src={Nhuy} />
        </a>
        <a href="https://colie31.github.io/">
          <img className="contributors-avatar" src={Nichole} />
        </a>
        <a href="">
          <img className="contributors-avatar" src="" />
        </a>
        <a href="">
          <img className="contributors-avatar" src={Seth} />
        </a>
      </div>
      <div className="contributors-right">
        <a className="contributors-links" href="https://nhucleus.io/">
          Nhu-y Phan
        </a>
        <a className="contributors-links" href="https://colie31.github.io/">
          Nichole O'Brien
        </a>
        <a className="contributors-links" href="">
          Nick Bierman
        </a>
        <a className="contributors-links" href="https://github.com/switfoth">
          Seth Witfoth
        </a>
      </div>
    </div>
  );
};

export default Contributors;
