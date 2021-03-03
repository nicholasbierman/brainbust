import "./Footer.css";
import { IoPersonCircleOutline } from "react-icons/io5";
import { AiOutlineGithub } from "react-icons/ai";

const Footer = () => {
  return (
    <div className="footer-container">
      <ul className="footer-ul">
        <li><a className="footer-links" href="https://github.com/nicholasbierman/brainbust"><IoPersonCircleOutline className="footer-icon"/><span> Contributors</span></a></li>
        <li><a className="footer-links" href="https://github.com/nicholasbierman/brainbust"><AiOutlineGithub className="footer-icon"/><span> GitHub</span></a></li>
      </ul>
    </div>
  )
}

export default Footer;