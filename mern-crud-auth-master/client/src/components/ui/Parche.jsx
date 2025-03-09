import { WhiteWindow } from "./WhiteWindow"

export function Parche() {
    return (
        <WhiteWindow>
            <b>Version 0.1.0 (Actual)</b><br />
            Bienvenido a la primera versión funcional de Gumppy, la página aún se encuentra en beta, por lo que algunas funciones pueden no funcionar correctamente. Y algunas vistas se pueden ver extrañas en algunas resoluciones, serán corregidas a la brevedad. <br /><br />
            Las funcionalidades añadidas en esta primera versión son:
            <br /><br />
            <div className="ml-10">
                <ul class="list-disc ml-5">
                    <li class="mb-2">
                        <b>Añadir pacientes </b> Se permite agregar la información de cada uno de sus pacientes a la plataforma.</li>
                    <li class="mb-2">
                        <b>Ver informacion de los pacientes: </b> Consultar sus datos personales.

                    </li>
                    <li class="mb-2">
                        <b>Crear periodontogramas:</b> Las posibilidad de anexar periodontogramas y la posibilidad de visualizarlos.
                    </li>
                    <li class="mb-2">
                        <b>Dashboard:</b> Analizar los datos de los pacientes y visualizarlos en un dashboard.
                    </li>

                </ul>
            </div>
        </WhiteWindow>
    )
}