import '../styles/HomePage.css'



const HomePage = (props) => {
    return (



        <main class="holder">



            <div>
                <img src="img/home/portada.svg" alt="estudiar" class="portada" />
            </div>

            <div className='seccion-cursos'>

                <div class="filtros">

                    <h3 style={{ fontSize: '30px', color: 'black' }} > <strong>Filtrar por:</strong></h3>
                    <div class="titulos" style={{ marginBottom: "25px" }}>
                        <h3 style={{ marginBottom: "5px" }}>Modalidad</h3>
                        <div>
                            <input class="cajita" type="checkbox" />
                            <label class="" style={{ backgroundColor: "#fff", color: "#000" }}>Online</label>
                        </div>
                        <div>
                            <input class="cajita" type="checkbox" />
                            <label style={{ backgroundColor: "#fff", color: "#000" }}>Presencial</label>
                        </div>
                    </div>


                    <div class="titulos" style={{ marginBottom: "25px" }}>
                        <h3 style={{ marginBottom: '5px' }}>Área académica</h3>
                        <div>
                            <input class="cajita" type="checkbox" />
                            <label style={{ backgroundColor: "#fff", color: "#000" }}>Tecnología</label>
                        </div>
                        <div>
                            <input class="cajita" type="checkbox" />
                            <label style={{ backgroundColor: "#fff", color: "#000" }}>Negocios</label>
                        </div>
                        <div>
                            <input class="cajita" type="checkbox" />
                            <label style={{ backgroundColor: "#fff", color: "#000" }}>Psicología</label>
                        </div>
                        <div>
                            <input class="cajita" type="checkbox" />
                            <label style={{ backgroundColor: "#fff", color: "#000" }}>Derecho</label>
                        </div>
                        <div>
                            <input class="cajita" type="checkbox" />
                            <label style={{ backgroundColor: "#fff", color: "#000" }}>Ciencias Sociales</label>
                        </div>
                    </div>

                    <div class="titulos" style={{ marginBottom: '25px' }}>
                        <h3 style={{ marginBottom: "5px" }}>Tipo</h3>
                        <div>
                            <input class="cajita" type="checkbox" />
                            <label style={{ backgroundColor: "#fff", color: "#000" }}>Curso</label>
                        </div>
                        <div>
                            <input class="cajita" type="checkbox" />
                            <label style={{ backgroundColor: "#fff", color: "#000" }}>Programa</label>
                        </div>
                        <div>
                            <input class="cajita" type="checkbox" />
                            <label style={{ backgroundColor: "#fff", color: "#000" }}>Programa Ejecutivo</label>
                        </div>
                        <div>
                            <input class="cajita" type="checkbox" />
                            <label style={{ backgroundColor: "#fff", color: "#000" }}>Diplomatura</label>
                        </div>
                        <div>
                            <input class="cajita" type="checkbox" />
                            <label style={{ backgroundColor: "#fff", color: "#000" }}>Programa de Posgrado</label>
                        </div>
                    </div>


                    <div class="titulos" style={{ marginBottom: "25px" }}>
                        <h3 style={{ marginBottom: "5px" }}>Duración</h3>
                        <div>
                            <input class="cajita" type="checkbox" />
                            <label style={{ backgroundColor: "#fff", color: "#000" }}>Hasta 1 mes</label>
                        </div>
                        <div>
                            <input class="cajita" type="checkbox" />
                            <label style={{ backgroundColor: "#fff", color: "#000" }}>1-3 meses</label>
                        </div>
                        <div>
                            <input class="cajita" type="checkbox" />
                            <label style={{ backgroundColor: "#fff", color: "#000" }}>3-6 meses</label>
                        </div>
                        <div>
                            <input class="cajita" type="checkbox" />
                            <label style={{ backgroundColor: "#fff", color: "#000" }}>+ 6 meses</label>
                        </div>
                    </div>

                    <div class="boton"><button class="boton-borrar">Borrar Filtros</button></div>

                </div>

                <div class="todos-cursos">


                    <div class="curso">

                        <ul class="modalidad-cursos">
                            <li><i ></i> 📆​ 06/09</li>
                            <li><i ></i> ​🕗​ 1 mes</li>
                            <li><i ></i> 👨‍💻 Online Sincrónico</li>
                        </ul>

                        <img src="img/home/metaverso.jpg" alt="metaverso" />



                        <div class="info">
                            <h4><strong>Metaverso: desafios y oportunidades <br />en la nueva era</strong></h4>



                            <p>Los metaversos son entornos donde los humanos interactúan e intercambian experiencias virtuales
                                mediante uso de avatares, a través de un soporte lógico en un ciberespacio, el cual actúa como
                                una metáfora del mundo real, pero sin tener necesariamente sus limitaciones.</p>
                        </div>
                    </div>
                    <div class="curso">
                        <ul class="modalidad-cursos">
                            <li><i></i> 📆​ 06/09</li>
                            <li><i></i> ​🕗​ 1 mes</li>
                            <li><i></i> 👨‍💻 Online Sincrónico</li>
                        </ul>
                        <img src="img/home/terapia.jpg" alt="psicologia-positiva" />
                        <div class="info">
                            <h4><strong>Psicologia Positiva Aplicada</strong></h4>
                            <p>La psicología positiva se define como el estudio científico de las experiencias positivas, los
                                rasgos individuales positivos, las instituciones que facilitan su desarrollo y los programas que
                                ayudan a mejorar la calidad de vida de los individuos.</p>
                        </div>
                    </div>
                    <div class="curso">
                        <ul class="modalidad-cursos">
                            <li><i></i> 📆​ 06/09</li>
                            <li><i></i> ​🕗​ 1 mes</li>
                            <li ><i ></i> 👨‍💻 Online Sincrónico</li>
                        </ul>
                        <img src="img/home/datascience.jpg" alt="data-science" />
                        <div class="info">
                            <h4><strong>Diplomatura en Data Science</strong></h4>

                            <p>Analizar grandes volúmenes de información para comprender patrones, realizar pronósticos y,
                                principalmente, tomar decisiones es el objetivo de la ciencia de datos.</p>
                        </div>
                    </div>
                    <div class="curso">
                        <ul class="modalidad-cursos">
                            <li><i></i> 📆​ 06/09</li>
                            <li><i></i> ​🕗​ 1 mes</li>
                            <li><i></i> 👨‍💻 Online Sincrónico</li>
                        </ul>
                        <img src="img/home/ecologia.jpg" alt="medioambiente" />
                        <div class="info">
                            <h4><strong>Sustentabilidad y Medio Ambiente</strong></h4>

                            <p>La importancia de conservar el medio ambiente reside en la propia importancia del medio ambiente,
                                ya que todos vivimos en él. Por tanto, si queremos asegurar nuestra propia supervivencia y
                                bienestar, y del resto de seres vivos, debemos preocuparnos por su cuidado y protección.</p>
                        </div>


                    </div>


                </div>













            </div>












        </main>



    );
}

export default HomePage;