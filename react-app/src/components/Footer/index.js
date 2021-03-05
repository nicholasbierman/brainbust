import "./Footer.css";
import { IoPersonCircleOutline } from "react-icons/io5";
import { AiOutlineGithub } from "react-icons/ai";
import ContributorsModal from "../ContributorsModal"

const Footer = () => {
  return (
    <div className="footer-container">
      <ul className="footer-ul">
        <li><div className="footer-links"><IoPersonCircleOutline className="footer-icon" /><span> <ContributorsModal /></span></div></li>
        <li><a className="footer-links" href="https://github.com/nicholasbierman/brainbust"><AiOutlineGithub className="footer-icon" /><span> GitHub</span></a></li>
      </ul>
    </div>
  )
};

export default Footer;