import { Link } from "react-router-dom";
import '../../styles/layout.css';
import { useState } from "react";



const Nav = (props) => {

    const [isOpen, setIsOpen] = useState(false);

    const ulClassnames = `holder-nav ${isOpen ? 'spread' : ''}`

    const changeStatus = () => {
        console.log('me ejecute')
        setIsOpen(!isOpen)
    } 



    return (
        <nav onClick={changeStatus}>
        <img src="img/hamburger.svg" alt="" className="hamburger"/>

        <ul className={ulClassnames}>

            <li><Link to="/">Home</Link></li>
            <li><Link to="/nosotros">Nosotros</Link></li>
            {/* <li><Link to="/blog">Blog</Link></li> */}
            <li><Link to="/novedades">Novedades</Link></li>
            <li><Link to="/contacto">Contacto</Link></li>
        </ul>
    </nav>


    

    );
}

export default Nav;





// <nav>
// <img src="img/hamburger.svg" alt="" className="hamburger"/>

// <ul className="holder-nav">

//     <li><Link to="/">Home</Link></li>
//     <li><Link to="/nosotros">Nosotros</Link></li>
//     <li><Link to="/blog">Blog</Link></li>
//     <li><Link to="/novedades">Novedades</Link></li>
//     <li><Link to="/contacto">Contacto</Link></li>
// </ul>
// </nav>