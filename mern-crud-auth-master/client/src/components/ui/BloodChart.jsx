import React from 'react';
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import { WhiteWindow } from './WhiteWindow';
import { Subtitulo } from './Subtitulo';
import { TituloChart } from './TituloChart';
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

    const data2 = parametro.map((examen, index) => {
        let cantidad = 0
        let porcentaje = 0
        let cantidadD = 0
        cantidadD = cantidadD + contarDientes(examen.dientes1i) + contarDientes(examen.dientes1d) + contarDientes(examen.dientes2i) + contarDientes(examen.dientes2d)
        cantidad = cantidad
            + contarSangre(examen.dientes1i, examen.placa1i) + contarSangre(examen.dientes1i, examen.placa2i)
            + contarSangre(examen.dientes1d, examen.placa1d) + contarSangre(examen.dientes1d, examen.placa2d)
            + contarSangre(examen.dientes2i, examen.placa3i) + contarSangre(examen.dientes2i, examen.placa4i)
            + contarSangre(examen.dientes2d, examen.placa3d) + contarSangre(examen.dientes2i, examen.placa4d)
        porcentaje = ((cantidad / (cantidadD * 6)) * 100).toFixed(2)

        return {
            name: `${index + 1}`,
            uv: porcentaje,
        };

    })

    const data3 = parametro.map((examen, index) => {
        let cantidad = 0
        let porcentaje = 0
        let cantidadD = 0
        cantidadD = cantidadD + contarDientes(examen.dientes1i) + contarDientes(examen.dientes1d) + contarDientes(examen.dientes2i) + contarDientes(examen.dientes2d)
        cantidad = cantidad
            + contarSangre(examen.dientes1i, examen.car1i) + contarSangre(examen.dientes1i, examen.car2i)
            + contarSangre(examen.dientes1d, examen.car1d) + contarSangre(examen.dientes1d, examen.car2d)
            + contarSangre(examen.dientes2i, examen.car3i) + contarSangre(examen.dientes2i, examen.car4i)
            + contarSangre(examen.dientes2d, examen.car3d) + contarSangre(examen.dientes2i, examen.car4d)
        porcentaje = ((cantidad / (cantidadD * 6)) * 100).toFixed(2)

        return {
            name: `${index + 1}`,
            uv: porcentaje,
        };
    })

    const data4 = parametro.map((examen, index) => {
        let cantidad = 0
        let porcentaje = 0
        let cantidadD = 0
        cantidadD = cantidadD + contarDientes(examen.dientes1i) + contarDientes(examen.dientes1d) + contarDientes(examen.dientes2i) + contarDientes(examen.dientes2d)
        cantidad = cantidad
            + contarSangre(examen.dientes1i, examen.res1i) + contarSangre(examen.dientes1i, examen.res2i)
            + contarSangre(examen.dientes1d, examen.res1d) + contarSangre(examen.dientes1d, examen.res2d)
            + contarSangre(examen.dientes2i, examen.res3i) + contarSangre(examen.dientes2i, examen.res4i)
            + contarSangre(examen.dientes2d, examen.res3d) + contarSangre(examen.dientes2i, examen.res4d)
        porcentaje = ((cantidad / (cantidadD * 6)) * 100).toFixed(2)

        return {
            name: `${index + 1}`,
            uv: porcentaje,
        };
    })
    const data5 = parametro.map((examen, index) => {
        let cantidad = 0
        let porcentaje = 0
        let cantidadD = 0
        cantidadD = cantidadD + contarDientes(examen.dientes1i) + contarDientes(examen.dientes1d) + contarDientes(examen.dientes2i) + contarDientes(examen.dientes2d)
        cantidad = cantidad
            + contarSangre(examen.dientes1i, examen.sup1i) + contarSangre(examen.dientes1i, examen.sup2i)
            + contarSangre(examen.dientes1d, examen.sup1d) + contarSangre(examen.dientes1d, examen.sup2d)
            + contarSangre(examen.dientes2i, examen.sup3i) + contarSangre(examen.dientes2i, examen.sup4i)
            + contarSangre(examen.dientes2d, examen.sup3d) + contarSangre(examen.dientes2i, examen.sup4d)
        porcentaje = ((cantidad / (cantidadD * 6)) * 100).toFixed(2)
    
        return {
            name: `${index + 1}`,
            uv: porcentaje,
        };
    })


    return (
        <>
            <WhiteWindow>
                <div className="mt-3 grid grid-cols-2 gap-6">

                    <ResponsiveContainer aspect={3}>
                        <TituloChart> % Sangrado al sondaje </TituloChart>
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
                            <YAxis tickFormatter={(value) => `${value}%`} domain={[0, 100]} label={{ value: '', angle: -90, position: 'left', offset: -20 }} />
                            <Tooltip formatter={(value) => `${value}%`} />
                            <Area type="monotone" dataKey="uv" stroke="#e6071b" fill="#ec8383" />
                        </AreaChart>
                    </ResponsiveContainer>
                    <ResponsiveContainer aspect={3}>
                        <TituloChart>% Placa </TituloChart>
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
                            <YAxis tickFormatter={(value) => `${value}%`} domain={[0, 100]} label={{ value: '', angle: -90, position: 'left', offset: -20 }} />
                            <Tooltip formatter={(value) => `${value}%`} />
                            <Area type="monotone" dataKey="uv" stroke="#06a9af" fill="#5dc0c4" />
                        </AreaChart>
                    </ResponsiveContainer>
                    <ResponsiveContainer aspect={3}>
                        <TituloChart>% Caries radicular </TituloChart>
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
                            <YAxis tickFormatter={(value) => `${value}%`} domain={[0, 100]} label={{ value: '', angle: -90, position: 'left', offset: -20 }} />
                            <Tooltip formatter={(value) => `${value}%`} />
                            <Area type="monotone" dataKey="uv" stroke="#000000" fill="#5e5d5d" />
                        </AreaChart>
                    </ResponsiveContainer>
                    <ResponsiveContainer aspect={3}>
                        <TituloChart>% Restauración mal ajustada</TituloChart>
                        <AreaChart
                            data={data4}
                            margin={{
                                top: 10,
                                right: 30,
                                left: 0,
                                bottom: 0,
                            }}
                        >
                            <CartesianGrid strokeDasharray="3 3" />
                            <XAxis dataKey="name" />
                            <YAxis tickFormatter={(value) => `${value}%`} domain={[0, 100]} label={{ value: '', angle: -90, position: 'left', offset: -20 }} />
                            <Tooltip formatter={(value) => `${value}%`} />
                            <Area type="monotone" dataKey="uv" stroke="#000000" fill="#b859b3" />
                        </AreaChart>
                    </ResponsiveContainer>
                </div>
                <div className='w-1/2 flex justify-center items-center'style={{ margin: '0 auto' }} >
                    <ResponsiveContainer aspect={3}>
                        <TituloChart>% Supuración</TituloChart>
                        <AreaChart
                            data={data5}
                            margin={{
                                top: 10,
                                right: 30,
                                left: 0,
                                bottom: 0,
                            }}
                        >
                            <CartesianGrid strokeDasharray="3 3" />
                            <XAxis dataKey="name" />
                            <YAxis tickFormatter={(value) => `${value}%`} domain={[0, 100]} label={{ value: '', angle: -90, position: 'left', offset: -20 }} />
                            <Tooltip formatter={(value) => `${value}%`} />
                            <Area type="monotone" dataKey="uv" stroke="#fdc42a" fill="#f7d371" />
                        </AreaChart>
                    </ResponsiveContainer>
                </div>
            </WhiteWindow>
        </>
    );
};


