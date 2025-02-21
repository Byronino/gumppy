import { WhiteWindow } from './WhiteWindow';
import { MiniSub } from './MiniSub';
export const Patologia = ({ paciente }) => {
    const lista = []
    const lista1 = []

    lista1.push(paciente.tabaco)
    lista1.push("Drogas: " + paciente.drogas)
    lista1.push("Medicamentos: " + paciente.medicamentos)
    lista1.push("Alergias: " + paciente.alergia)
    if (paciente.embarazo) lista1.push("Embarazada")

    if (paciente.cardiovascular != "- -") lista.push(paciente.cardiovascular)
    if (paciente.pulmonar !== "- -") lista.push(paciente.pulmonar);
    if (paciente.nervioso !== "- -") lista.push(paciente.nervioso);
    if (paciente.hematologico !== "- -") lista.push(paciente.hematologico);
    if (paciente.gastrointestinal !== "- -") lista.push(paciente.gastrointestinal);
    if (paciente.genitourinario !== "- -") lista.push(paciente.genitourinario);
    if (paciente.endocrino !== "- -") lista.push(paciente.endocrino);
    if (paciente.musculoEsqueletal !== "- -") lista.push(paciente.musculoEsqueletal);
    if (paciente.sistemaInmune !== "- -") lista.push(paciente.sistemaInmune);
    if (paciente.dermatologico !== "- -") lista.push(paciente.dermatologico);
    if (paciente.otros !== "- -") lista.push(paciente.otros);

    return (
        <>
    <div className="flex space-x-4 h-full">
        <div className="w-1/2 h-full">
            <MiniSub>Hábitos</MiniSub>
            <WhiteWindow>
                <ul className="list-disc list-inside space-y-2">
                    {lista1.map((valor, index) => (
                        <li key={index} className="text-gray-700">
                            {valor}
                        </li>
                    ))}
                </ul>
            </WhiteWindow>
        </div>
        <div className="w-1/2 h-full">
            <MiniSub>Patologías</MiniSub>
            <WhiteWindow>
                <ul className="list-disc list-inside space-y-2">
                    {lista.map((valor, index) => (
                        <li key={index} className="text-gray-700">
                            {valor}
                        </li>
                    ))}
                </ul>
            </WhiteWindow>
        </div>
    </div>
</>

    )
}