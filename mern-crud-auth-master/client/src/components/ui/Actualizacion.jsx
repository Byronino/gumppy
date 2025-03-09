import { WhiteWindow } from "./WhiteWindow"

export function Actualizacion() {
    return (
        <WhiteWindow>
            <b>Version 0.2.0 </b><br />
            En la siguiente actualización Gumppy contará con las siguientes funcionalidades: 
            <br /><br />
            <div className="ml-10">
                <ul class="list-disc ml-5">
                    <li class="mb-2">
                        <b>Anexo de radiografías: </b> Un paso en la dirección para la implementación de modelos de inteligencia artificial para el apoyo en analisis de de radiografías.</li>
                    <li class="mb-2">
                        <b>Nuevas métricas para el dashboard: </b> Permitiendo a los usuarios visualizar de manera más clara y detallada los datos de los pacientes. Personalizando más la forma de ver los datos historicos. 

                    </li>
                    <li class="mb-2">
                        <b>Correcciones de errores:</b> Errores menores de redireccionamiento, visualización de algunos componentes, mejoras en la visualización de ciertos datos, entre otros.
                    </li>
                    

                </ul>
            </div>
        </WhiteWindow>
    )
}