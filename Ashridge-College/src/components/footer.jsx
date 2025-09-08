import "../CSS/footer.css"
import Logo from "./logo";
import { CiFacebook } from "react-icons/ci";
import { FaInstagram } from "react-icons/fa";
import { TiSocialLinkedinCircular } from "react-icons/ti";
import { TiSocialTwitterCircular } from "react-icons/ti";
function Footer () {
    return (
        <footer>
            <div className="div1">
                <Logo />
                <a href="#" style={{fontWeight : "700", fontSize : "1.2rem" }}>About Us</a>
                <a href="#">Who Are We?</a>
                <a href="#">How We Work?</a>
                <a href="#">Privacy Policy</a>
                <a href="#">Terms and Conditions</a>
            </div>
            <div className="div2">
                <h5>Follow Us</h5>
                <span className="footer-icons">
                    <a href="#"><TiSocialTwitterCircular/></a>
                    <a href="#"><TiSocialLinkedinCircular/></a>
                    <a href="#"><CiFacebook/></a>
                    <a href="#"><FaInstagram/></a>
                </span>
            </div>
            <div className="div3">
                <ul>
                    <h6>Useful Links</h6>
                    <li><a href="#">Courses</a></li>
                    <li><a href="#">FAQ's</a></li>
                    <li><a href="#">Certificates</a></li>
                </ul>
            </div>
        </footer>
    )
}
export default Footer;