import "./Contributors.css";
import Nhuy from "./nhu-yphan.jpeg";
import Nichole from "./nichole_obrien.jpeg";
import Seth from "./seth_witfoth.PNG";
import Nick from "./nick_bierman.jpeg";

const Contributors = () => {
  return (
    <div className="contributors-container">
      <div className="contributors-title">Contributors</div>
      <div className="contributors-left">
        <a href="https://nhucleus.io/">
          <img className="contributors-avatar" src={Nhuy} alt="Nhuy Phan" />
        </a>
        <a href="https://colie31.github.io/">
          <img
            className="contributors-avatar"
            src={Nichole}
            alt="Nichole O'Brien"
          />
        </a>
        <a href="https://github.com/nicholasbierman">
          <img className="contributors-avatar" src={Nick} alt="Nick Bierman" />
        </a>
        <a href="">
          <img className="contributors-avatar" src={Seth} alt="Seth Witforth" />
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
