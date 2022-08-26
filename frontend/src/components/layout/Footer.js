import '../../styles/layout.css';


const Footer = (props) => {
    return (
        <div>
            <footer className="contacto-footer">

                <div className="footer-content">
                    <div className="contact-us">
                        <h2 className="brand">Matt Design</h2>
                        <p>Academia al alcance del mundo</p>
                    </div>

                    <div className="social-media">

                        <a href="./" className="social-media-icon">
                            <i className="bx bxl-facebook"></i>
                        </a>
                        <a href="./" className="social-media-icon">
                            <i className="bx bxl-twitter"></i>
                        </a>
                        <a href="./" className="social-media-icon">
                            <i className="bx bxl-instagram"></i>
                        </a>

                    </div>
                    {/* <div class="line"></div> */}
                </div>




            </footer></div>
    );
}

export default Footer;