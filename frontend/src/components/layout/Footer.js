import '../../styles/layout.css';


const Footer = (props) => {
    return (
        <div>
            <footer className="contacto-footer">

                <div className="footer-content">
                    <div className="contact-us">
                        <h2 className="brand">Mathias Design</h2>
                        <p>Academia al alcance del mundo</p>
                    </div>

                    <div className="social-media">

                        <a href="https://www.facebook.com/" target="_BLANK" rel="noreferrer" className="social-media-icon">
                            <i className="bx bxl-facebook"></i>
                        </a>
                        <a href="https://twitter.com/?lang=es" target="_BLANK" rel="noreferrer" className="social-media-icon">
                            <i className="bx bxl-twitter"></i>
                        </a>
                        <a href="https://www.instagram.com/" target="_BLANK" rel="noreferrer" className="social-media-icon">
                            <i className="bx bxl-instagram"></i>
                        </a>

                    </div>
                    {/* <div class="line"></div> */}
                </div>




            </footer></div>
    );
}

export default Footer;