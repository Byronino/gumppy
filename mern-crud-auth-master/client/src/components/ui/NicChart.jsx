import React from 'react'
import { LineChart, Line, CartesianGrid, XAxis, YAxis, Tooltip, ResponsiveContainer } from 'recharts';
import { WhiteWindow } from './WhiteWindow';

export const NicChart = ({ diente, parametro }) => {

    const getValue = (array, index, numero) => {
        return array && array[index] && array[index][numero] > 0 ? array[index][numero] : 0;
      }

      const data1 = parametro.map((examen, index) => {
        if (diente < 8) {
          return { name: `${index + 1}`, uv: getValue(examen.diff1i, diente,0) };
        } else if (diente < 16) {
          return { name: `${index + 1}`, uv: getValue(examen.diff1d, diente % 8,0) };
        } else if (diente < 24) {
          return { name: `${index + 1}`, uv: getValue(examen.diff3i, diente % 8,0) };
        } else {
          return { name: `${index + 1}`, uv: getValue(examen.diff3d, diente % 8,0) };
        }
      })
      const data2 = parametro.map((examen, index) => {
        if (diente < 8) {
          return { name: `${index + 1}`, uv: getValue(examen.diff1i, diente,1) };
        } else if (diente < 16) {
          return { name: `${index + 1}`, uv: getValue(examen.diff1d, diente % 8,1) };
        } else if (diente < 24) {
          return { name: `${index + 1}`, uv: getValue(examen.diff3i, diente % 8,1) };
        } else {
          return { name: `${index + 1}`, uv: getValue(examen.diff3d, diente % 8,1) };
        }
      })
      const data3 = parametro.map((examen, index) => {
        if (diente < 8) {
          return { name: `${index + 1}`, uv: getValue(examen.diff1i, diente,2) };
        } else if (diente < 16) {
          return { name: `${index + 1}`, uv: getValue(examen.diff1d, diente % 8,2) };
        } else if (diente < 24) {
          return { name: `${index + 1}`, uv: getValue(examen.diff3i, diente % 8,2) };
        } else {
          return { name: `${index + 1}`, uv: getValue(examen.diff3d, diente % 8,2) };
        }
      })

    

      const data4 = parametro.map((examen, index) => {
        if (diente < 8) {
          return { name: `${index + 1}`, uv: getValue(examen.diff2i, diente,0) };
        } else if (diente < 16) {
          return { name: `${index + 1}`, uv: getValue(examen.diff2d, diente % 8,0) };
        } else if (diente < 24) {
          return { name: `${index + 1}`, uv: getValue(examen.diff4i, diente % 8,0) };
        } else {
          return { name: `${index + 1}`, uv: getValue(examen.diff4d, diente % 8,0) };
        }
      })

      const data5 = parametro.map((examen, index) => {
        if (diente < 8) {
          return { name: `${index + 1}`, uv: getValue(examen.diff2i, diente,1) };
        } else if (diente < 16) {
          return { name: `${index + 1}`, uv: getValue(examen.diff2d, diente % 8,1) };
        } else if (diente < 24) {
          return { name: `${index + 1}`, uv: getValue(examen.diff4i, diente % 8,1) };
        } else {
          return { name: `${index + 1}`, uv: getValue(examen.diff4d, diente % 8,1) };
        }
      })

      const data6 = parametro.map((examen, index) => {
        if (diente < 8) {
          return { name: `${index + 1}`, uv: getValue(examen.diff2i, diente,2) };
        } else if (diente < 16) {
          return { name: `${index + 1}`, uv: getValue(examen.diff2d, diente % 8,2) };
        } else if (diente < 24) {
          return { name: `${index + 1}`, uv: getValue(examen.diff4i, diente % 8,2) };
        } else {
          return { name: `${index + 1}`, uv: getValue(examen.diff4d, diente % 8,2) };
        }
      })



    return (
        <WhiteWindow>
            <div className="mt-3 grid grid-cols-3 gap-6">
                <ResponsiveContainer aspect={2}>

                    {(diente < 8 || (diente >= 16 && diente < 24)) && <div> Distovestibular</div>}
                    {((diente >= 8 && diente < 16) || (diente >= 24)) && <div> Mesiovestibular</div>}
                    <LineChart width={600} height={300} data={data1} margin={{ top: 5, right: 20, bottom: 5, left: 0 }}>
                        <Line type="monotone" dataKey="uv" stroke="#8884d8" />
                        <CartesianGrid stroke="#ccc" strokeDasharray="5 5" />
                        <XAxis dataKey="name" />
                        <YAxis domain={[0, 15]} ticks={[0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15]}
                            tickFormatter={(tick) => tick.toFixed(1)} />
                        <Tooltip />
                    </LineChart>
                </ResponsiveContainer>
                <ResponsiveContainer aspect={2}>
                    Vestibular
                    <LineChart width={600} height={300} data={data2} margin={{ top: 5, right: 20, bottom: 5, left: 0 }}>

                        <Line type="monotone" dataKey="uv" stroke="#8884d8" />
                        <CartesianGrid stroke="#ccc" strokeDasharray="5 5" />
                        <XAxis dataKey="name" />
                        <YAxis domain={[0, 15]} ticks={[0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15]}
                            tickFormatter={(tick) => tick.toFixed(1)} />
                        <Tooltip />
                    </LineChart>
                </ResponsiveContainer>
                <ResponsiveContainer aspect={2}>
                    {(diente < 8 || (diente >= 16 && diente < 24)) && <div>Mesiovestibular</div>}
                    {((diente >= 8 && diente < 16) || (diente >= 24)) && <div>  Distovestibular</div>}
                    <LineChart width={600} height={300} data={data3} margin={{ top: 5, right: 20, bottom: 5, left: 0 }}>

                        <Line type="monotone" dataKey="uv" stroke="#8884d8" />
                        <CartesianGrid stroke="#ccc" strokeDasharray="5 5" />
                        <XAxis dataKey="name" />
                        <YAxis domain={[0, 15]} ticks={[0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15]}
                            tickFormatter={(tick) => tick.toFixed(1)} />
                        <Tooltip />
                    </LineChart>
                </ResponsiveContainer>
            </div>
            <div className="mt-3 grid grid-cols-3 gap-6">
                <ResponsiveContainer aspect={2}>
                    {(diente < 8) && <div>Distopalatino</div>}
                    {(diente >= 8 && diente < 16) && <div>Mesiopalatino</div>}
                    {(diente >= 16 && diente < 24) && <div>Distolingual</div>}
                    {(diente >= 24) && <div>Mesiolingual</div>}

                    <LineChart width={600} height={300} data={data4} margin={{ top: 5, right: 20, bottom: 5, left: 0 }}>
                        <Line type="monotone" dataKey="uv" stroke="#8884d8" />
                        <CartesianGrid stroke="#ccc" strokeDasharray="5 5" />
                        <XAxis dataKey="name" />
                        <YAxis domain={[0, 15]} ticks={[0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15]}
                            tickFormatter={(tick) => tick.toFixed(1)} />
                        <Tooltip />
                    </LineChart>
                </ResponsiveContainer>
                <ResponsiveContainer aspect={2}>
                    {(diente < 16) && <div>Palatino</div>}
                    {(diente >= 16) && <div>Lingual</div>}
                    <LineChart width={600} height={400} data={data5} margin={{ top: 5, right: 20, bottom: 5, left: 0 }}>

                        <Line type="monotone" dataKey="uv" stroke="#8884d8" />
                        <CartesianGrid stroke="#ccc" strokeDasharray="5 5" />
                        <XAxis dataKey="name" />
                        <YAxis domain={[0, 15]} ticks={[0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15]}
                            tickFormatter={(tick) => tick.toFixed(1)} />
                        <Tooltip />
                    </LineChart>
                </ResponsiveContainer>
                <ResponsiveContainer aspect={2}>
                    {(diente < 8) && <div>Mesiopalatino</div>}
                    {(diente >= 8 && diente < 16) && <div>Distopalatino</div>}
                    {(diente >= 16 && diente < 24) && <div>Mesiolingual</div>}
                    {(diente >= 24) && <div>Distolingual</div>}
                    <LineChart width={600} height={300} data={data6} margin={{ top: 5, right: 20, bottom: 5, left: 0 }}>

                        <Line type="monotone" dataKey="uv" stroke="#8884d8" />
                        <CartesianGrid stroke="#ccc" strokeDasharray="5 5" />
                        <XAxis dataKey="name" />
                        <YAxis domain={[0, 15]} ticks={[0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15]}
                            tickFormatter={(tick) => tick.toFixed(1)} />
                        <Tooltip />
                    </LineChart>
                </ResponsiveContainer>
            </div>
        </WhiteWindow>
    )
}