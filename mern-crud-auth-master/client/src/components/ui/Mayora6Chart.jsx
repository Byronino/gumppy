import React from 'react'
import { LineChart, Line, CartesianGrid, XAxis, YAxis, Tooltip, ResponsiveContainer } from 'recharts';
import { WhiteWindow } from './WhiteWindow';

export const Mayora6Chart = ({ diente, parametro }) => {

    function contarCantidad(array) {
        let cantidad = 0;
        for (let i = 0; i < array.length; i++) {
            for (let j = 0; j < array[i].length; j++) {
                if (array[i][j] >= 6) {
                    cantidad++;
                }
            }
        }
        return cantidad;
    }
    const data = parametro.map((examen, index) => {

        var cantidad = 0
        cantidad = contarCantidad(examen.prof1i) +
            contarCantidad(examen.prof1d)+
            contarCantidad(examen.prof2i)+
            contarCantidad(examen.prof2d)+
            contarCantidad(examen.prof3i)+
            contarCantidad(examen.prof3d)+
            contarCantidad(examen.prof4i)+
            contarCantidad(examen.prof4d)



        return {
            name: `${index + 1}`,
            uv: cantidad,
        };


    });

    return (
        <WhiteWindow>
            <ResponsiveContainer aspect={2}>

                <LineChart width={600} height={300} data={data} margin={{ top: 5, right: 20, bottom: 5, left: 0 }}>
                    <Line type="monotone" dataKey="uv" stroke="#8884d8" />
                    <CartesianGrid stroke="#ccc" strokeDasharray="5 5" />
                    <XAxis  dataKey="name" label={{ value: 'Número de examen', position: 'bottom', offset: -10 }} />
                    <YAxis domain={[0, 32]} label={{ value: 'Cantidad de dientes con PS > 6', angle: -90, position: 'left', offset: -20 }}/>
                    <Tooltip />
                </LineChart>
            </ResponsiveContainer>

        </WhiteWindow>
    )

}