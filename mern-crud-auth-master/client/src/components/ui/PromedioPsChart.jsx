import React from 'react';
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import { WhiteWindow } from './WhiteWindow';
import { Subtitulo } from './Subtitulo';
import { TituloChart } from './TituloChart';

export const PromedioPsChart = ({ diente, parametro }) => {

    const contarSangre = (dientes, sangre) => {
        let cantidad = 0
        for (let i = 0; i < sangre.length; i++) {
            if (!dientes[i][1]) {
                cantidad = cantidad + sangre[i][0] + sangre[i][1] + sangre[i][2]
            }
        }
        return cantidad
    }
    const contarNIC = (dientes, sangre) =>{
        let cantidad = 0
        for (let i = 0; i < sangre.length; i++) {
            if(!dientes[i][1]){
                if(sangre[i][0]>0)cantidad=cantidad+sangre[i][0]
                if(sangre[i][1]>0)cantidad=cantidad+sangre[i][1]
                if(sangre[i][2]>0)cantidad=cantidad+sangre[i][2]
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
            + contarSangre(examen.dientes1i, examen.prof1i) + contarSangre(examen.dientes1i, examen.prof2i)
            + contarSangre(examen.dientes1d, examen.prof1d) + contarSangre(examen.dientes1d, examen.prof2d)
            + contarSangre(examen.dientes2i, examen.prof3i) + contarSangre(examen.dientes2i, examen.prof4i)
            + contarSangre(examen.dientes2d, examen.prof3d) + contarSangre(examen.dientes2i, examen.prof4d)
        porcentaje = ((cantidad / (cantidadD * 6))).toFixed(2)

        return {
            name: `${index + 1}`,
            ps: porcentaje,
        };

    })

    const data2 = parametro.map((examen, index) => {
        let cantidad = 0
        let porcentaje = 0
        let cantidadD = 0
        cantidadD = cantidadD + contarDientes(examen.dientes1i) + contarDientes(examen.dientes1d) + contarDientes(examen.dientes2i) + contarDientes(examen.dientes2d)
        cantidad = cantidad
            + contarSangre(examen.dientes1i, examen.mar1i) + contarSangre(examen.dientes1i, examen.mar2i)
            + contarSangre(examen.dientes1d, examen.mar1d) + contarSangre(examen.dientes1d, examen.mar2d)
            + contarSangre(examen.dientes2i, examen.mar3i) + contarSangre(examen.dientes2i, examen.mar4i)
            + contarSangre(examen.dientes2d, examen.mar3d) + contarSangre(examen.dientes2i, examen.mar4d)
        porcentaje = ((cantidad / (cantidadD * 6))).toFixed(2)

        return {
            name: `${index + 1}`,
            ps: porcentaje,
        };

    })
    const data3 = parametro.map((examen, index) => {
        let cantidad = 0
        let porcentaje = 0
        let cantidadD = 0
        cantidadD = cantidadD + contarDientes(examen.dientes1i) + contarDientes(examen.dientes1d) + contarDientes(examen.dientes2i) + contarDientes(examen.dientes2d)
        cantidad = cantidad
            + contarNIC(examen.dientes1i, examen.diff1i) + contarNIC(examen.dientes1i, examen.diff2i)
            + contarNIC(examen.dientes1d, examen.diff1d) + contarNIC(examen.dientes1d, examen.diff2d)
            + contarNIC(examen.dientes2i, examen.diff3i) + contarNIC(examen.dientes2i, examen.diff4i)
            + contarNIC(examen.dientes2d, examen.diff3d) + contarNIC(examen.dientes2i, examen.diff4d)
        porcentaje = ((cantidad / (cantidadD * 6))).toFixed(2)

        return {
            name: `${index + 1}`,
            ps: porcentaje,
        };

    })

    return (
        <>
            <WhiteWindow>
                <div className="mt-3 grid grid-cols-2 gap-6">
                    <ResponsiveContainer aspect={3}>
                        <TituloChart> Promedio de profundidad al sondaje </TituloChart>
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
                            <XAxis dataKey="name" />
                            <YAxis  label={{ value: '', angle: -90, position: 'left', offset: -20 }} />
                            <Tooltip />
                            <Area type="monotone" dataKey="ps" stroke="#06a9af" fill="#5dc0c4" />
                        </AreaChart>
                    </ResponsiveContainer>
                    <ResponsiveContainer aspect={3}>
                        <TituloChart> Promedio de margen gingival </TituloChart>
                        <AreaChart
                            data={data2}
                            margin={{
                                top: 10,
                                right: 30,
                                left: 0,
                                bottom: 0,
                            }}
                        >
                            <CartesianGrid strokeDasharray="3 3" />
                            <XAxis dataKey="name" />
                            <YAxis  label={{ value: '', angle: -90, position: 'left', offset: -20 }} />
                            <Tooltip />
                            <Area type="monotone" dataKey="ps" stroke="#e6071b" fill="#ec8383" />
                        </AreaChart>
                    </ResponsiveContainer>
                </div>
                <div className='w-1/2 flex justify-center items-center'style={{ margin: '0 auto' }} >
                    <ResponsiveContainer aspect={3}>
                        <TituloChart>Promedio Nivel inserción clinico</TituloChart>
                        <AreaChart
                            data={data3}
                            margin={{
                                top: 10,
                                right: 30,
                                left: 0,
                                bottom: 0,
                            }}
                        >
                            <CartesianGrid strokeDasharray="3 3" />
                            <XAxis dataKey="name" />
                            <YAxis   label={{ value: '', angle: -90, position: 'left', offset: -20 }} />
                            <Tooltip  />
                            <Area type="monotone" dataKey="ps" stroke="#fdc42a" fill="#f7d371" />
                        </AreaChart>
                    </ResponsiveContainer>
                </div>

            </WhiteWindow>
        </>
    )
}