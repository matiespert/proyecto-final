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
    const [msg, setMsg] = useState('');
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
        const response = await axios.post(`${process.env.REACT_APP_API_URL}/api/contacto`, formData);
        setSending(false);
        setMsg(response.data.message);
        if (response.data.error === false) {
            setFormData(initialForm)
        }
    }






    return (
        <div>
            <main className="holder contacto">

               

                <div className="form">
                    <h2 style={{ color: '#fff', fontWeight: '100', marginLeft: '20px', fontSize: '30px' }}>Contactanos!</h2>

                    <form action="/contacto" method="post" className="formulario" onSubmit={handleSubmit}>

                        <div className="input-group">
                            <input required="" type="text" autoComplete="off" className="input" name="nombre" value={formData.nombre} onChange={handleChange} />
                            <label className="user-label">Nombre</label>
                        </div>

                        <div className="input-group">
                            <input required="" type="text" autoComplete="off" className="input" name="email" value={formData.email} onChange={handleChange} />
                            <label className="user-label" htmlFor="email">Email</label>
                        </div>

                        <div className="input-group">
                            <input required="" type="text" autoComplete="off" className="input" name="telefono" value={formData.telefono} onChange={handleChange} />
                            <label className="user-label">Teléfono</label>
                        </div>

                        <div className="input-group">
                            <input required="" type="text" autoComplete="off" className="input mensaje" name="mensaje" value={formData.mensaje} onChange={handleChange} />
                            <label className="user-label">Mensaje</label>
                        </div>

                        <button className="cssbuttons-io-button" style={{ cursor: 'pointer' }}> Enviar
                            <div className="icon">
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

                <div className="datos">
                    <h2 style={{ color: '#fff', fontSize: '30px', fontWeight: '100' }}>Otras vias de comunicacion</h2>


                    <ul className="lista-contacto">
                        <li><i className='bx bxs-phone-call  contact' style={{ color: '#bb4b54' }}></i> 3518088128</li>
                        <li><i className='bx bxs-envelope contact' style={{ color: '#bb4b54' }}></i> @worldacademy.com.ar</li>
                        <li> <i className='bx bxl-facebook-circle contact' style={{ color: '#bb4b54' }}></i> World Academy</li>
                        <li><i className='bx bxl-instagram contact' style={{ color: '#bb4b54' }}></i> @world.academy</li>
                        <li><i className='bx bxl-twitter contact' style={{ color: '#bb4b54' }}></i> @world_academy</li>
                    </ul>
                </div>

            </main>
        </div>
    );
}

export default ContactoPage;