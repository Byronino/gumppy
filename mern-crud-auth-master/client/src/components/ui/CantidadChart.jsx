import React from 'react'
import { LineChart, Line, CartesianGrid, XAxis, YAxis, Tooltip, ResponsiveContainer } from 'recharts';
import { WhiteWindow } from './WhiteWindow';

import { TituloChart } from './TituloChart';



export const CantidadChart = ({ diente, parametro }) => {

    const movilidad1 = [1, 2, 3, 4, 5, 6, 7, 8];
    const movilidad2 = [3, 4, 5, 6, 7, 8, 9, 10];
    const movilidad3 = [3, 2, 1, 56, 4, 5, 3, 2];
    const movilidad4 = [4, 3, 2, 3, 2, 3, 2, 3]
    const indice = 0
    const movilidades = [movilidad1, movilidad2, movilidad3, movilidad4];

    /*const data = movilidades.map((movilidad, index) => ({
        name: `Exámen ${index + 1}`,
        uv: movilidad[diente],
    }));*/

    const data = parametro.map((examen, index) => {
        var cantidad = 0
        for(let i=0;i<examen.dientes1i.length;i++){
            if(!examen.dientes1i[i][1]){
                cantidad++
            }
            if(!examen.dientes1d[i][1]){
                cantidad++
            }
            if(!examen.dientes2i[i][1]){
                cantidad++
            }
            if(!examen.dientes2d[i][1]){
                cantidad++
            }

        }
        return {
            name: `${index + 1}`,
            uv: cantidad,
        };
    });

    const data2 = parametro.map((examen, index) => {
        var cantidad = 0
        for(let i=0;i<examen.dientes1i.length;i++){
            if(examen.implante1[i]){
                cantidad++
            }
            if(examen.implante2[i]){
                cantidad++
            }
            if(examen.implante3[i]){
                cantidad++
            }
            if(examen.implante4[i]){
                cantidad++
            }

        }
        return {
            name: `${index + 1}`,
            uv: cantidad,
        };
    });
    return (
        <WhiteWindow>
            <div className="mt-3 grid grid-cols-2 gap-6">

                <ResponsiveContainer aspect={2}>
                    <TituloChart>Cantidad de dientes en el tiempo</TituloChart>
                    <LineChart width={600} height={300} data={data} margin={{ top: 5, right: 20, bottom: 5, left: 0 }}>
                        <Line type="monotone" dataKey="uv" stroke="#8884d8" />
                        <CartesianGrid stroke="#ccc" strokeDasharray="5 5" />
                        <XAxis label={{ value: 'Número de examen', position: 'bottom', offset: -10 }} dataKey="name" />
                        <YAxis  />
                        <Tooltip />
                    </LineChart>
                </ResponsiveContainer>
                <ResponsiveContainer aspect={2}>
                    <TituloChart>Cantidad de implantes en el tiempo</TituloChart>
                    <LineChart width={600} height={300} data={data2} margin={{ top: 5, right: 20, bottom: 5, left: 0 }}>
                        <Line type="monotone" dataKey="uv" stroke="#8884d8" />
                        <CartesianGrid stroke="#ccc" strokeDasharray="5 5" />
                        <XAxis label={{ value: 'Número de examen', position: 'bottom', offset: -10 }} dataKey="name" />
                        <YAxis  />
                        <Tooltip />
                    </LineChart>
                </ResponsiveContainer>
          
            </div>
        </WhiteWindow>

    );
};