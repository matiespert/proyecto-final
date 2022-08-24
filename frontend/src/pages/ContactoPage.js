import '../styles/ContactPage.css';
import { useState } from 'react';
import axios from 'axios';




const ContactoPage = (props) => {


    const initialForm = {
        nombre: '',
        email: '',
        telefono: '',
        mensaje: ''
    }

    const [sending, setSending] = useState(false);
    const [msg, setMsg] = useState(false);
    const [formData, setFormData] = useState(initialForm);

    const handleChange = e => {
        const { name, value } = e.target;
        setFormData(oldData => ({
            ...oldData,
            [name]: value
        }));
    }

    const handleSubmit = async e => {
        e.preventDefault();
        setMsg('');
        setSending(true)
        const response = await axios.post('http://localhost:3000/api/contacto', formData);
        setSending(false);
        setMsg(response.data.message);
        if (response.data.error === false) {
            setFormData(initialForm)
        }
    }






    return (
        <div>
            <main class="holder contacto">

               

                <div class="form">
                    <h2 style={{ color: '#fff', fontWeight: '100', marginLeft: '20px', fontSize: '30px' }}>Contactanos!</h2>

                    <form action="/contacto" method="post" className="formulario" onSubmit={handleSubmit}>

                        <div class="input-group">
                            <input required="" type="text" autocomplete="off" class="input" name="nombre" value={formData.nombre} onChange={handleChange} />
                            <label class="user-label">Nombre</label>
                        </div>

                        <div class="input-group">
                            <input required="" type="text" autocomplete="off" class="input" name="email" value={formData.email} onChange={handleChange} />
                            <label class="user-label" for="email">Email</label>
                        </div>

                        <div class="input-group">
                            <input required="" type="text" autocomplete="off" class="input" name="telefono" value={formData.telefono} onChange={handleChange} />
                            <label class="user-label">Teléfono</label>
                        </div>

                        <div class="input-group">
                            <input required="" type="text" autocomplete="off" class="input mensaje" name="mensaje" value={formData.mensaje} onChange={handleChange} />
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

                    {sending ? <p style={{color:'#fff', marginLeft: '50px'}}>Enviando 🚀​​</p> : null}
                {msg ? <p style={{color:'#fff', marginLeft: '50px'}}>{msg}✅​</p> : null}

                </div>

                <div class="datos">
                    <h2 style={{ color: '#fff', fontSize: '30px', fontWeight: '100' }}>Otras vias de comunicacion</h2>


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