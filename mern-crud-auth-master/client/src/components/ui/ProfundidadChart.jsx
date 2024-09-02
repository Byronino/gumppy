import React from 'react'
import { LineChart, Line, CartesianGrid, XAxis, YAxis, Tooltip, ResponsiveContainer } from 'recharts';
import { WhiteWindow } from './WhiteWindow';

export const ProfundidadChart = ({ diente, parametro }) => {

    const data1 = parametro.map((examen, index) => {
        if (diente < 8) {
            return {
                name: `Exámen ${index + 1}`,
                uv: examen.prof1i[diente][0],
            };
        }
        if (8 <= diente && diente < 16) {
            return {
                name: `Exámen ${index + 1}`,
                uv: examen.prof1d[diente % 8][0],
            }
        }
        if (16 <= diente && diente < 24) {
            return {
                name: `Exámen ${index + 1}`,
                uv: examen.prof3i[diente % 8][0],
            }
        }
        else {
            return {
                name: `Exámen ${index + 1}`,
                uv: examen.prof3d[diente % 8][0]
            };
        }

    })
    const data2 = parametro.map((examen, index) => {
        if (diente < 8) {
            return {
                name: `Exámen ${index + 1}`,
                uv: examen.prof1i[diente][1],
            };
        }
        if (8 <= diente && diente < 16) {
            return {
                name: `Exámen ${index + 1}`,
                uv: examen.prof1d[diente % 8][1],
            }
        }
        if (16 <= diente && diente < 24) {
            return {
                name: `Exámen ${index + 1}`,
                uv: examen.prof3i[diente % 8][1],
            }
        }
        else {
            return {
                name: `Exámen ${index + 1}`,
                uv: examen.prof3d[diente % 8][1]
            };
        }

    })

    const data3 = parametro.map((examen, index) => {
        if (diente < 8) {
            return {
                name: `Exámen ${index + 1}`,
                uv: examen.prof1i[diente][2],
            };
        }
        if (8 <= diente && diente < 16) {
            return {
                name: `Exámen ${index + 1}`,
                uv: examen.prof1d[diente % 8][2],
            }
        }
        if (16 <= diente && diente < 24) {
            return {
                name: `Exámen ${index + 1}`,
                uv: examen.prof3i[diente % 8][2],
            }
        }
        else {
            return {
                name: `Exámen ${index + 1}`,
                uv: examen.prof3d[diente % 8][2]
            };
        }

    })

    const data4 = parametro.map((examen, index) => {
        if (diente < 8) {
            return {
                name: `Exámen ${index + 1}`,
                uv: examen.prof2i[diente][0],
            };
        }
        if (8 <= diente && diente < 16) {
            return {
                name: `Exámen ${index + 1}`,
                uv: examen.prof2d[diente % 8][0],
            }
        }
        if (16 <= diente && diente < 24) {
            return {
                name: `Exámen ${index + 1}`,
                uv: examen.prof4i[diente % 8][0],
            }
        }
        else {
            return {
                name: `Exámen ${index + 1}`,
                uv: examen.prof4d[diente % 8][0]
            };
        }

    })

    const data5 = parametro.map((examen, index) => {
        if (diente < 8) {
            return {
                name: `Exámen ${index + 1}`,
                uv: examen.prof2i[diente][1],
            };
        }
        if (8 <= diente && diente < 16) {
            return {
                name: `Exámen ${index + 1}`,
                uv: examen.prof2d[diente % 8][1],
            }
        }
        if (16 <= diente && diente < 24) {
            return {
                name: `Exámen ${index + 1}`,
                uv: examen.prof4i[diente % 8][1],
            }
        }
        else {
            return {
                name: `Exámen ${index + 1}`,
                uv: examen.prof4d[diente % 8][1]
            };
        }

    })

    const data6 = parametro.map((examen, index) => {
        if (diente < 8) {
            return {
                name: `Exámen ${index + 1}`,
                uv: examen.prof2i[diente][2],
            };
        }
        if (8 <= diente && diente < 16) {
            return {
                name: `Exámen ${index + 1}`,
                uv: examen.prof2d[diente % 8][2],
            }
        }
        if (16 <= diente && diente < 24) {
            return {
                name: `Exámen ${index + 1}`,
                uv: examen.prof4i[diente % 8][2],
            }
        }
        else {
            return {
                name: `Exámen ${index + 1}`,
                uv: examen.prof4d[diente % 8][2]
            };
        }

    })



    return (
        <WhiteWindow>
            <div className="mt-3 grid grid-cols-3 gap-6">
                <ResponsiveContainer aspect={2}>
                    Primer sitio arriba
                    <LineChart width={600} height={300} data={data1} margin={{ top: 5, right: 20, bottom: 5, left: 0 }}>
                        <Line type="monotone" dataKey="uv" stroke="#8884d8" />
                        <CartesianGrid stroke="#ccc" strokeDasharray="5 5" />
                        <XAxis dataKey="name" />
                        <YAxis domain={[0, 10]} ticks={[0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10]}
                            tickFormatter={(tick) => tick.toFixed(1)} />
                        <Tooltip />
                    </LineChart>
                </ResponsiveContainer>
                <ResponsiveContainer aspect={2}>
                    Segundo sitio arriba
                    <LineChart width={600} height={300} data={data2} margin={{ top: 5, right: 20, bottom: 5, left: 0 }}>

                        <Line type="monotone" dataKey="uv" stroke="#8884d8" />
                        <CartesianGrid stroke="#ccc" strokeDasharray="5 5" />
                        <XAxis dataKey="name" />
                        <YAxis domain={[0, 10]} ticks={[0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10]}
                            tickFormatter={(tick) => tick.toFixed(1)} />
                        <Tooltip />
                    </LineChart>
                </ResponsiveContainer>
                <ResponsiveContainer aspect={2}>
                    Tercer sitio arriba
                    <LineChart width={600} height={300} data={data3} margin={{ top: 5, right: 20, bottom: 5, left: 0 }}>

                        <Line type="monotone" dataKey="uv" stroke="#8884d8" />
                        <CartesianGrid stroke="#ccc" strokeDasharray="5 5" />
                        <XAxis dataKey="name" />
                        <YAxis domain={[0, 10]} ticks={[0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10]}
                            tickFormatter={(tick) => tick.toFixed(1)} />
                        <Tooltip />
                    </LineChart>
                </ResponsiveContainer>
            </div>
            <div className="mt-3 grid grid-cols-3 gap-6">
                <ResponsiveContainer aspect={2}>
                    Primer sitio abajo
                    <LineChart width={600} height={300} data={data4} margin={{ top: 5, right: 20, bottom: 5, left: 0 }}>
                        <Line type="monotone" dataKey="uv" stroke="#8884d8" />
                        <CartesianGrid stroke="#ccc" strokeDasharray="5 5" />
                        <XAxis dataKey="name" />
                        <YAxis domain={[0, 10]} ticks={[0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10]}
                            tickFormatter={(tick) => tick.toFixed(1)} />
                        <Tooltip />
                    </LineChart>
                </ResponsiveContainer>
                <ResponsiveContainer aspect={2}>
                    Segundo sitio abajo
                    <LineChart width={600} height={400} data={data5} margin={{ top: 5, right: 20, bottom: 5, left: 0 }}>

                        <Line type="monotone" dataKey="uv" stroke="#8884d8" />
                        <CartesianGrid stroke="#ccc" strokeDasharray="5 5" />
                        <XAxis dataKey="name" />
                        <YAxis domain={[0, 10]} ticks={[0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10]}
                            tickFormatter={(tick) => tick.toFixed(1)} />
                        <Tooltip />
                    </LineChart>
                </ResponsiveContainer>
                <ResponsiveContainer aspect={2}>
                    Tercer sitio abajo
                    <LineChart width={600} height={300} data={data6} margin={{ top: 5, right: 20, bottom: 5, left: 0 }}>

                        <Line type="monotone" dataKey="uv" stroke="#8884d8" />
                        <CartesianGrid stroke="#ccc" strokeDasharray="5 5" />
                        <XAxis dataKey="name" />
                        <YAxis domain={[0, 10]} ticks={[0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10]}
                            tickFormatter={(tick) => tick.toFixed(1)} />
                        <Tooltip />
                    </LineChart>
                </ResponsiveContainer>
            </div>
        </WhiteWindow>
    )
}