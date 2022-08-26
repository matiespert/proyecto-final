import '../styles/HomePage.css'



const HomePage = (props) => {
    return (



        <main className="inicio">



            <div>
                <img src="img/home/portada.svg" alt="estudiar" className="portada" />
            </div>

            <div className='seccion-cursos'>

                <div className="filtros">
                    <div className='titular-box'>
                    <h3 className="filtros-titular">Filtros  📍​​​</h3>
                    </div>

                    <div className="titulos" style={{ marginBottom: "25px" }}>
                        <h3 style={{ marginBottom: "5px" }}>Modalidad</h3>

                        <div className="contenedor-filtros">
                            <input className="cajita" type="checkbox" />
                            <h6 className="titulo-cajita" style={{ backgroundColor: "#fff", color: "#000" }}>Online</h6>
                        </div>
                        <div className="contenedor-filtros">
                            <input className="cajita" type="checkbox" />
                            <h6 className="titulo-cajita" style={{ backgroundColor: "#fff", color: "#000" }}>Presencial</h6>
                        </div>
                    </div>


                    <div className="titulos" style={{ marginBottom: "25px" }}>
                        <h3 style={{ marginBottom: '5px' }}>Área académica</h3>
                        <div className="contenedor-filtros">
                            <input className="cajita" type="checkbox" />
                            <h6 className="titulo-cajita" style={{ backgroundColor: "#fff", color: "#000" }}>Tecnología</h6>
                        </div>
                        <div className="contenedor-filtros">
                            <input className="cajita" type="checkbox" />
                            <h6 className="titulo-cajita" style={{ backgroundColor: "#fff", color: "#000" }}>Negocios</h6>
                        </div>
                        <div className="contenedor-filtros">
                            <input className="cajita" type="checkbox" />
                            <h6 className="titulo-cajita" style={{ backgroundColor: "#fff", color: "#000" }}>Psicología</h6>
                        </div>
                        <div className="contenedor-filtros">
                            <input className="cajita" type="checkbox" />
                            <h6 className="titulo-cajita" style={{ backgroundColor: "#fff", color: "#000" }}>Derecho</h6>
                        </div>
                        <div className="contenedor-filtros">
                            <input className="cajita" type="checkbox" />
                            <h6 className="titulo-cajita" style={{ backgroundColor: "#fff", color: "#000" }}>Ciencias Sociales</h6>
                        </div>
                    </div>

                    <div className="titulos" style={{ marginBottom: '25px' }}>
                        <h3 style={{ marginBottom: "5px" }}>Tipo</h3>
                        <div className="contenedor-filtros">
                            <input className="cajita" type="checkbox" />
                            <h6 className="titulo-cajita" style={{ backgroundColor: "#fff", color: "#000" }}>Curso</h6>
                        </div>
                        <div className="contenedor-filtros">
                            <input className="cajita" type="checkbox" />
                            <h6 className="titulo-cajita" style={{ backgroundColor: "#fff", color: "#000" }}>Programa</h6>
                        </div>
                        <div className="contenedor-filtros">
                            <input className="cajita" type="checkbox" />
                            <h6 className="titulo-cajita" style={{ backgroundColor: "#fff", color: "#000" }}>Programa Ejecutivo</h6>
                        </div>
                        <div className="contenedor-filtros">
                            <input className="cajita" type="checkbox" />
                            <h6 className="titulo-cajita" style={{ backgroundColor: "#fff", color: "#000" }}>Diplomatura</h6>
                        </div>
                        <div className="contenedor-filtros">
                            <input className="cajita" type="checkbox" />
                            <h6 className="titulo-cajita" style={{ backgroundColor: "#fff", color: "#000" }}>Programa de Posgrado</h6>
                        </div>
                    </div>


                    <div className="titulos" style={{ marginBottom: "25px" }}>
                        <h3 style={{ marginBottom: "5px" }}>Duración</h3>
                        <div className="contenedor-filtros">
                            <input className="cajita" type="checkbox" />
                            <h6 className="titulo-cajita" style={{ backgroundColor: "#fff", color: "#000" }}>Hasta 1 mes</h6>
                        </div>
                        <div className="contenedor-filtros">
                            <input className="cajita" type="checkbox" />
                            <h6 className="titulo-cajita" style={{ backgroundColor: "#fff", color: "#000" }}>1-3 meses</h6>
                        </div>
                        <div className="contenedor-filtros">
                            <input className="cajita" type="checkbox" />
                            <h6 className="titulo-cajita" style={{ backgroundColor: "#fff", color: "#000" }}>3-6 meses</h6>
                        </div>
                        <div className="contenedor-filtros">
                            <input className="cajita" type="checkbox" />
                            <h6 className="titulo-cajita" style={{ backgroundColor: "#fff", color: "#000" }}>+ 6 meses</h6>
                        </div>
                    </div>

                    <div className="boton"><button className="boton-borrar">Borrar Filtros</button></div>

                </div>


                <div className="todos-cursos">


                    <a href="https://teachable.com/" target="_BLANK" rel="noreferrer" ><div className="curso" >

                        <ul className="modalidad-cursos">
                            <li><i ></i> 📆​ 06/09</li>
                            <li><i ></i> ​🕗​ 1 mes</li>
                            <li><i ></i> 👨‍💻 Online Sincrónico</li>
                        </ul>

                        <img src="img/home/metaverso.jpg" alt="metaverso" />



                        <div className="info">
                            <h4><strong>Metaverso: desafios y oportunidades <br />en la nueva era</strong></h4>



                            <p>Los metaversos son entornos donde los humanos interactúan e intercambian experiencias virtuales
                                mediante uso de avatares, a través de un soporte lógico en un ciberespacio, el cual actúa como
                                una metáfora del mundo real, pero sin tener necesariamente sus limitaciones.</p>
                        </div>
                    </div>
                    </a>
                    <a href="https://teachable.com/" target="_BLANK" rel="noreferrer" ><div className="curso">
                        <ul className="modalidad-cursos">
                            <li><i></i> 📆​ 06/09</li>
                            <li><i></i> ​🕗​ 1 mes</li>
                            <li><i></i> 👨‍💻 Online Sincrónico</li>
                        </ul>
                        <img src="img/home/terapia.jpg" alt="psicologia-positiva" />
                        <div className="info">
                            <h4><strong>Psicologia Positiva Aplicada</strong></h4>
                            <p>La psicología positiva se define como el estudio científico de las experiencias positivas, los
                                rasgos individuales positivos, las instituciones que facilitan su desarrollo y los programas que
                                ayudan a mejorar la calidad de vida de los individuos.</p>
                        </div>
                    </div>
                    </a>
                    <a href="https://teachable.com/" target="_BLANK" rel="noreferrer" > <div className="curso">
                        <ul className="modalidad-cursos">
                            <li><i></i> 📆​ 06/09</li>
                            <li><i></i> ​🕗​ 1 mes</li>
                            <li ><i ></i> 👨‍💻 Online Sincrónico</li>
                        </ul>
                        <img src="img/home/datascience.jpg" alt="data-science" />
                        <div className="info">
                            <h4><strong>Diplomatura en Data Science</strong></h4>

                            <p>Analizar grandes volúmenes de información para comprender patrones, realizar pronósticos y,
                                principalmente, tomar decisiones es el objetivo de la ciencia de datos.</p>
                        </div>
                    </div>
                    </a>
                    <a href="https://teachable.com/" target="_BLANK" rel="noreferrer" > <div className="curso">
                        <ul className="modalidad-cursos">
                            <li><i></i> 📆​ 06/09</li>
                            <li><i></i> ​🕗​ 1 mes</li>
                            <li><i></i> 👨‍💻 Online Sincrónico</li>
                        </ul>
                        <img src="img/home/ecologia.jpg" alt="medioambiente" />
                        <div className="info">
                            <h4><strong>Sustentabilidad y Medio Ambiente</strong></h4>

                            <p>La importancia de conservar el medio ambiente reside en la propia importancia del medio ambiente,
                                ya que todos vivimos en él. Por tanto, si queremos asegurar nuestra propia supervivencia y
                                bienestar, y del resto de seres vivos, debemos preocuparnos por su cuidado y protección.</p>
                        </div>



                    </div>
                    </a>


                </div>













            </div>












        </main >



    );
}

export default HomePage;