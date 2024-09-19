import React from 'react'
import { WhiteWindow } from './WhiteWindow';

import { TituloChart } from './TituloChart';

export const TablaDiente = ({ diente, parametro }) => {
    return (
        <WhiteWindow>
            <table className="table-auto w-full font-roboto text-xl border-collapse border border-gray-300">
                <thead>
                    <tr>
                        <th className="px-4 py-2 text-left w-1/6">Pieza perdida</th>
                        <th className="px-4 py-2 text-left">Fecha</th>
                        <th className="px-4 py-2 text-left">Column 3</th>
                    </tr>
                </thead>
                <tbody>

                    {parametro.map((examen, index) => {
                        return examen.dientes1i.map((dientes, index2) => {
                            return dientes[1] && (
                                <tr>
                                    <td className="px-4 py-2">{dientes[0]}</td>
                                    <td className="px-4 py-2">{new Date(examen.createdAt).toLocaleDateString('es-ES', {
                                year: 'numeric',
                                month: '2-digit',
                                day: '2-digit',
                            })}</td>
                                </tr>
                            )
                        })
                    })}



                </tbody>
            </table>
        </WhiteWindow>
    )
}