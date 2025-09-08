import { useState ,useEffect } from "react";
import "../CSS/navbar.css"
import NavBtn from "./navBtn";
import NavImg from "./navImg";
import Logo from "./logo";
function NavBar() {
    
    const [signedIn, setSignedIn] = useState(false)
    localStorage.setItem('signedIn', JSON.stringify(signedIn))
    
    useEffect(() => {
        localStorage.setItem('signedIn', JSON.stringify(signedIn));
    }, [signedIn]);
    
    return (
        <nav>
            <Logo />
            <ul className="nav-list">
                <li>Home</li>
                <li>My Exams</li>
                <li>Courses</li>
                <li>Certificate</li>
            </ul>
            {signedIn ? <span className="nav-img-outlay"><NavImg /></span> : <NavBtn />}

        </nav>
    )
}

export default NavBar;