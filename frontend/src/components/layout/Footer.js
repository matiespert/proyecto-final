import '../../styles/layout.css';


const Footer = (props) => {
    return (
        <div>
            <footer className="contacto-footer">

                <div class="footer-content">
                    <div class="contact-us">
                        <h2 class="brand">Matt Design</h2>
                        <p>Academia al alcance del mundo</p>
                    </div>

                    <div class="social-media">

                        <a href="./" class="social-media-icon">
                            <i class="bx bxl-facebook"></i>
                        </a>
                        <a href="./" class="social-media-icon">
                            <i class="bx bxl-twitter"></i>
                        </a>
                        <a href="./" class="social-media-icon">
                            <i class="bx bxl-instagram"></i>
                        </a>

                    </div>
                    {/* <div class="line"></div> */}
                </div>




            </footer></div>
    );
}

export default Footer;