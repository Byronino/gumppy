import React from 'react';
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import { WhiteWindow } from './WhiteWindow';
export const BloodChart = ({ diente, parametro }) => {

    const contarSangre = (dientes, sangre) => {
        let cantidad = 0
        for (let i = 0; i < sangre.length; i++) {
            if (!dientes[i][1]) {
                if (sangre[i][0]) cantidad++
                if (sangre[i][1]) cantidad++
                if (sangre[i][2]) cantidad++
            }
        }
        return cantidad
    }
    const contarDientes = (dientes) => {
        let cantidad = 0
        for (let i = 0; i < 8; i++) {
          if (!dientes[i][1])
            cantidad++
        }
        return cantidad
      }

    
    

    
    const data = parametro.map((examen, index) => {
        let cantidad = 0
        let porcentaje = 0
        let cantidadD = 0
        cantidadD = cantidadD + contarDientes(examen.dientes1i) + contarDientes(examen.dientes1d) + contarDientes(examen.dientes2i) + contarDientes(examen.dientes2d)
        cantidad = cantidad
          + contarSangre(examen.dientes1i, examen.san1i) + contarSangre(examen.dientes1i, examen.san2i)
          + contarSangre(examen.dientes1d, examen.san1d) + contarSangre(examen.dientes1d, examen.san2d)
          + contarSangre(examen.dientes2i, examen.san3i) + contarSangre(examen.dientes2i, examen.san4i)
          + contarSangre(examen.dientes2d, examen.san3d) + contarSangre(examen.dientes2i, examen.san4d)
        porcentaje = ((cantidad / (cantidadD * 6)) * 100).toFixed(2)

        return {
            name: `${index + 1}`,
            uv: porcentaje,
        };

    })
    const data2 = [
        {
            mes: 'Enero',
            uv: 100,
        },
        {
            mes: 'Febrero',
            uv: 10,
        },
        {
            mes: 'Marzo',
            uv: 100,
        },

    ];

    return (
        <>
            <WhiteWindow>
                <ResponsiveContainer aspect={3}>
                    <AreaChart
                        data={data}
                        margin={{
                            top: 10,
                            right: 30,
                            left: 0,
                            bottom: 0,
                        }}
                    >
                        <CartesianGrid strokeDasharray="3 3" />
                        <XAxis dataKey="mes" />
                        <YAxis tickFormatter={(value) => `${value}%`} domain={[0, 100]} label={{ value: 'Porcentaje de sangrado', angle: -90, position: 'left', offset: -20 }} />
                        <Tooltip formatter={(value) => `${value}%`} />
                        <Area type="monotone" dataKey="uv" stroke="#e6071b" fill="#ec8383" />
                    </AreaChart>
                </ResponsiveContainer>
            </WhiteWindow>
        </>
    );
};


