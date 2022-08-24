import '../styles/ContactPage.css';




const ContactoPage = (props) => {
    return (
        <div>
            <main class="holder contacto">

                <div class="form">
                    <h2 style={{ color: '#fff', fontWeight: '100', marginLeft: '20px', fontSize: '30px' }}>Contactanos!</h2>
                    
                    <form action="" method="" class="formulario">

                        <div class="input-group">
                            <input required="" type="text" name="text" autocomplete="off" class="input" />
                            <label class="user-label">Nombre</label>
                        </div>

                        <div class="input-group">
                            <input required="" type="text" name="text" autocomplete="off" class="input" />
                            <label class="user-label" for="email">Email</label>
                        </div>

                        <div class="input-group">
                            <input required="" type="text" name="text" autocomplete="off" class="input" />
                            <label class="user-label">Teléfono</label>
                        </div>

                        <div class="input-group">
                            <input required="" type="text" name="text" autocomplete="off" class="input mensaje" />
                            <label class="user-label">Mensaje</label>
                        </div>

                        <button class="cssbuttons-io-button" style={{ cursor: 'pointer' }}> Enviar
                            <div class="icon">
                                <svg height="24" width="24" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M0 0h24v24H0z" fill="none"></path>
                                    <path d="M16.172 11l-5.364-5.364 1.414-1.414L20 12l-7.778 7.778-1.414-1.414L16.172 13H4v-2z"
                                        fill="currentColor"></path>
                                </svg>
                            </div>
                        </button>



                    </form>
                </div>

                <div class="datos">
                    <h2 style={{color: '#fff', fontSize:'30px', fontWeight:'100'}}>Otras vias de comunicacion</h2>


                    <ul class="lista-contacto">
                        <li><i class='bx bxs-phone-call  contact' style={{ color: '#bb4b54' }}></i> 3518088128</li>
                        <li><i class='bx bxs-envelope contact' style={{ color: '#bb4b54' }}></i> @worldacademy.com.ar</li>
                        <li> <i class='bx bxl-facebook-circle contact' style={{ color: '#bb4b54' }}></i> World Academy</li>
                        <li><i class='bx bxl-instagram contact' style={{ color: '#bb4b54' }}></i> @world.academy</li>
                        <li><i class='bx bxl-twitter contact' style={{ color: '#bb4b54' }}></i> @world_academy</li>
                    </ul>
                </div>

            </main>
        </div>
    );
}

export default ContactoPage;