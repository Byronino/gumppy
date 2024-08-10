import { ButtonLink } from "../ui"



export function TarjetaPaciente({ paciente }) {
    return (
        <>
            <div className=" text-black mt-3  p-10 rounded-full shadow-lg" style={{ background: '#f87a85', width: "100%", color: "white", borderColor: '#fc9099', borderWidth: '10px',boxShadow: '20px 20px 10px rgba(0, 0 , 0, 0.5)', }}>

                <header className ="rounded-full p-2 mb-2 flex flex-auto" style={{background:"#fc9099", display:"flex",boxShadow: '10px 8px 10px rgba(0, 0, 0, 0.5)'}}>
                    <h1 className="text-2xl font-bold mx-3">{paciente.nomPac}</h1>
                </header>

                <div className="grid grid-cols-3 mt-7 mx-6">
                    <div>

                        <p><b>RUT: </b>{paciente.rutPac}</p>
                        <p> <b>Fecha de Nacimiento: </b>
                            {paciente.fecNacPac &&
                                new Date(paciente.fecNacPac).toLocaleDateString("es-ES", {

                                    year: "numeric",
                                    month: "long",
                                    day: "numeric",
                                })}
                        </p>
                        <p><b>Email: </b>{paciente.emailPac}</p>
                        <p><b>Telefono: +569 </b>{paciente.telPac}</p>

                    </div>
                    {paciente.descripcion == "" ?(
                        <div></div>

                    ):(
                    <div className="mx-20" style={{ overflowWrap: 'break-word',
                        flexWrap: 'wrap',
                     }}>
                        <p><b>Descripcion:  </b>{paciente.descripcion}</p>

                    </div>
                    )}

                    <div>


                        <div className="flex gap-x-2 items-center justify-end -mx-30">
                            <ButtonLink to={`/`}>prueba</ButtonLink>

                        </div>

                    </div>





                </div>



            </div>
        </>
    )


}