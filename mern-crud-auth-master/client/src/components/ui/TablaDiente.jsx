import React, { useState, useEffect } from 'react';
import { WhiteWindow } from './WhiteWindow';

export const TablaDiente = ({ diente, parametro }) => {
    const pieza = []
    const imprimible = []

    {
        parametro.map((examen, index) => {
            {
                examen.dientes1i.map((dientes, index2) => {
                    if ((!pieza.includes(dientes[0])) && dientes[1]) {
                        pieza.push(dientes[0])
                        imprimible.push([dientes[0], new Date(examen.updatedAt).toLocaleDateString('en-GB', {
                            year: 'numeric',
                            month: '2-digit',
                            day: '2-digit',
                        })])
                    }

                })
            }
            {
                examen.dientes1d.map((dientes, index2) => {
                    if ((!pieza.includes(dientes[0])) && dientes[1]) {
                        pieza.push(dientes[0])
                        imprimible.push([dientes[0], new Date(examen.updatedAt).toLocaleDateString('en-GB', {
                            year: 'numeric',
                            month: '2-digit',
                            day: '2-digit',
                        })])
                    }

                })
            }
            {
                examen.dientes2i.map((dientes, index2) => {
                    if ((!pieza.includes(dientes[0])) && dientes[1]) {
                        pieza.push(dientes[0])
                        imprimible.push([dientes[0], new Date(examen.updatedAt).toLocaleDateString('en-GB', {
                            year: 'numeric',
                            month: '2-digit',
                            day: '2-digit',
                        })])
                    }

                })
            }
            {
                examen.dientes2d.map((dientes, index2) => {
                    if ((!pieza.includes(dientes[0])) && dientes[1]) {
                        pieza.push(dientes[0])
                        imprimible.push([dientes[0], new Date(examen.updatedAt).toLocaleDateString('en-GB', {
                            year: 'numeric',
                            month: '2-digit',
                            day: '2-digit',
                        })])
                    }

                })
            }
        })
    }

    return (
        <WhiteWindow>
            <table className="table-auto w-1/3 font-roboto text-xl border-collapse mx-auto">
                <thead>
                    <tr>
                        <th className="px-4 py-2 text-center">Pieza perdida</th>
                        <th className="px-4 py-2 text-center">Fecha</th>
                    </tr>
                </thead>
                <tbody>
                    {imprimible.map((p, index) => (
                        <tr key={index}>
                            <td className="px-4 py-2 text-center">{p[0]}</td>
                            <td className="px-4 py-2 text-center">{p[1]}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </WhiteWindow>
    );
};