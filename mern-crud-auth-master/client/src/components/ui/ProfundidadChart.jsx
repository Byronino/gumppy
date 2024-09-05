import React from 'react'
import { LineChart, Line, CartesianGrid, XAxis, YAxis, Tooltip, ResponsiveContainer } from 'recharts';
import { WhiteWindow } from './WhiteWindow';
import { TituloChart } from './TituloChart';
export const ProfundidadChart = ({ diente, parametro }) => {

    const data1 = parametro.map((examen, index) => {
        if (diente < 8) {
            return {
                name: `${index + 1}`,
                uv: examen.prof1i[diente][0],
            };
        }
        if (8 <= diente && diente < 16) {
            return {
                name: `${index + 1}`,
                uv: examen.prof1d[diente % 8][0],
            }
        }
        if (16 <= diente && diente < 24) {
            return {
                name: `${index + 1}`,
                uv: examen.prof3i[diente % 8][0],
            }
        }
        else {
            return {
                name: `${index + 1}`,
                uv: examen.prof3d[diente % 8][0]
            };
        }

    })
    const data2 = parametro.map((examen, index) => {
        if (diente < 8) {
            return {
                name: `${index + 1}`,
                uv: examen.prof1i[diente][1],
            };
        }
        if (8 <= diente && diente < 16) {
            return {
                name: `${index + 1}`,
                uv: examen.prof1d[diente % 8][1],
            }
        }
        if (16 <= diente && diente < 24) {
            return {
                name: `${index + 1}`,
                uv: examen.prof3i[diente % 8][1],
            }
        }
        else {
            return {
                name: `${index + 1}`,
                uv: examen.prof3d[diente % 8][1]
            };
        }

    })

    const data3 = parametro.map((examen, index) => {
        if (diente < 8) {
            return {
                name: `${index + 1}`,
                uv: examen.prof1i[diente][2],
            };
        }
        if (8 <= diente && diente < 16) {
            return {
                name: `${index + 1}`,
                uv: examen.prof1d[diente % 8][2],
            }
        }
        if (16 <= diente && diente < 24) {
            return {
                name: `${index + 1}`,
                uv: examen.prof3i[diente % 8][2],
            }
        }
        else {
            return {
                name: `${index + 1}`,
                uv: examen.prof3d[diente % 8][2]
            };
        }

    })

    const data4 = parametro.map((examen, index) => {
        if (diente < 8) {
            return {
                name: `${index + 1}`,
                uv: examen.prof2i[diente][0],
            };
        }
        if (8 <= diente && diente < 16) {
            return {
                name: `${index + 1}`,
                uv: examen.prof2d[diente % 8][0],
            }
        }
        if (16 <= diente && diente < 24) {
            return {
                name: `${index + 1}`,
                uv: examen.prof4i[diente % 8][0],
            }
        }
        else {
            return {
                name: `${index + 1}`,
                uv: examen.prof4d[diente % 8][0]
            };
        }

    })

    const data5 = parametro.map((examen, index) => {
        if (diente < 8) {
            return {
                name: `${index + 1}`,
                uv: examen.prof2i[diente][1],
            };
        }
        if (8 <= diente && diente < 16) {
            return {
                name: `${index + 1}`,
                uv: examen.prof2d[diente % 8][1],
            }
        }
        if (16 <= diente && diente < 24) {
            return {
                name: `${index + 1}`,
                uv: examen.prof4i[diente % 8][1],
            }
        }
        else {
            return {
                name: `${index + 1}`,
                uv: examen.prof4d[diente % 8][1]
            };
        }

    })

    const data6 = parametro.map((examen, index) => {
        if (diente < 8) {
            return {
                name: `${index + 1}`,
                uv: examen.prof2i[diente][2],
            };
        }
        if (8 <= diente && diente < 16) {
            return {
                name: `${index + 1}`,
                uv: examen.prof2d[diente % 8][2],
            }
        }
        if (16 <= diente && diente < 24) {
            return {
                name: `${index + 1}`,
                uv: examen.prof4i[diente % 8][2],
            }
        }
        else {
            return {
                name: `${index + 1}`,
                uv: examen.prof4d[diente % 8][2]
            };
        }

    })



    return (
        <WhiteWindow>
            <TituloChart>Cambio de profundidad al sondaje en el tiempo</TituloChart>
            <div className="mt-3 grid grid-cols-3 gap-6">
                <ResponsiveContainer aspect={2}>

                    {(diente < 8 || (diente >= 16 && diente < 24)) && <TituloChart>Distovestibular</TituloChart>}
                    {((diente >= 8 && diente < 16) || (diente >= 24)) && <TituloChart>Mesiovestibular</TituloChart>}
                    <LineChart width={600} height={300} data={data1} margin={{ top: 5, right: 20, bottom: 5, left: 0 }}>
                        <Line type="monotone" dataKey="uv" stroke="#8884d8" />
                        <CartesianGrid stroke="#ccc" strokeDasharray="5 5" />
                        <XAxis dataKey="name" />
                        <YAxis domain={[0, 15]} ticks={[0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10,11,12,13,14,15]}
                            tickFormatter={(tick) => tick.toFixed(1)} />
                        <Tooltip />
                    </LineChart>
                </ResponsiveContainer>
                <ResponsiveContainer aspect={2}>
                <TituloChart>Vestibular</TituloChart>
                    <LineChart width={600} height={300} data={data2} margin={{ top: 5, right: 20, bottom: 5, left: 0 }}>

                        <Line type="monotone" dataKey="uv" stroke="#8884d8" />
                        <CartesianGrid stroke="#ccc" strokeDasharray="5 5" />
                        <XAxis dataKey="name" />
                        <YAxis domain={[0, 15]} ticks={[0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10,11,12,13,14,15]}
                            tickFormatter={(tick) => tick.toFixed(1)} />
                        <Tooltip />
                    </LineChart>
                </ResponsiveContainer>
                <ResponsiveContainer aspect={2}>
                    {(diente < 8 || (diente >= 16 && diente < 24)) && <TituloChart>Mesiovestibular</TituloChart>}
                    {((diente >= 8 && diente < 16) || (diente >= 24)) && <TituloChart>Distovestibular</TituloChart>}
                    <LineChart width={600} height={300} data={data3} margin={{ top: 5, right: 20, bottom: 5, left: 0 }}>

                        <Line type="monotone" dataKey="uv" stroke="#8884d8" />
                        <CartesianGrid stroke="#ccc" strokeDasharray="5 5" />
                        <XAxis dataKey="name" />
                        <YAxis domain={[0, 15]} ticks={[0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10,11,12,13,14,15]}
                            tickFormatter={(tick) => tick.toFixed(1)} />
                        <Tooltip />
                    </LineChart>
                </ResponsiveContainer>
            </div>
            <div className="mt-3 grid grid-cols-3 gap-6">
                <ResponsiveContainer aspect={2}>
                    

                    <LineChart width={600} height={300} data={data4} margin={{ top: 5, right: 20, bottom: 5, left: 0 }}>
                        <Line type="monotone" dataKey="uv" stroke="#8884d8" />
                        <CartesianGrid stroke="#ccc" strokeDasharray="5 5" />
                        <XAxis dataKey="name" />
                        <YAxis domain={[0, 15]} ticks={[0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10,11,12,13,14,15]}
                            tickFormatter={(tick) => tick.toFixed(1)} />
                        <Tooltip />
                    </LineChart>
                    {(diente < 8) && <TituloChart>Distopalatino</TituloChart>}
                    {(diente >= 8 && diente < 16) && <TituloChart>Mesiopalatino</TituloChart>}
                    {(diente >= 16 && diente < 24) && <TituloChart>Distolingual</TituloChart>}
                    {(diente >= 24) && <TituloChart>Mesiolingual</TituloChart>}
                </ResponsiveContainer>
                <ResponsiveContainer aspect={2}>
                    
                    <LineChart width={600} height={400} data={data5} margin={{ top: 5, right: 20, bottom: 5, left: 0 }}>

                        <Line type="monotone" dataKey="uv" stroke="#8884d8" />
                        <CartesianGrid stroke="#ccc" strokeDasharray="5 5" />
                        <XAxis dataKey="name" />
                        <YAxis domain={[0, 15]} ticks={[0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10,11,12,13,14,15]}
                            tickFormatter={(tick) => tick.toFixed(1)} />
                        <Tooltip />
                    </LineChart>
                    {(diente < 16) && <TituloChart>Palatino</TituloChart>}
                    {(diente >= 16) && <TituloChart>Lingual</TituloChart>}
                </ResponsiveContainer>
                <ResponsiveContainer aspect={2}>
                    
                    <LineChart width={600} height={300} data={data6} margin={{ top: 5, right: 20, bottom: 5, left: 0 }}>

                        <Line type="monotone" dataKey="uv" stroke="#8884d8" />
                        <CartesianGrid stroke="#ccc" strokeDasharray="5 5" />
                        <XAxis dataKey="name" />
                        <YAxis domain={[0, 15]} ticks={[0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10,11,12,13,14,15]}
                            tickFormatter={(tick) => tick.toFixed(1)} />
                        <Tooltip />
                    </LineChart>
                    {(diente < 8) && <TituloChart>Mesiopalatino</TituloChart>}
                    {(diente >= 8 && diente < 16) && <TituloChart>Distopalatino</TituloChart>}
                    {(diente >= 16 && diente < 24) && <TituloChart>Mesiolingual</TituloChart>}
                    {(diente >= 24) && <TituloChart>Distolingual</TituloChart>}
                </ResponsiveContainer>
            </div>
        </WhiteWindow>
    )
}