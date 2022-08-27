import React from 'react';
import '../../styles/NovedadesPage.css';

const NovedadItem = (props) => {
    const { title, subtitle, imagen, body } = props;

    return (



        <section className='novedades-contenedor'>

            <div className='novedades'>
                <figure>
                    <img src={imagen} alt='' />
                </figure>

                <div className='cuerpo'>
                    <h1>{title}</h1>

                    <h2> <strong>{subtitle} </strong> </h2>

                    <div className='descripcion' dangerouslySetInnerHTML={{ __html: body }} />

                     <p>Escrito por Matias Espert - &copy;2022</p>

                </div>




            </div>






        </section>



    );



}

export default NovedadItem;