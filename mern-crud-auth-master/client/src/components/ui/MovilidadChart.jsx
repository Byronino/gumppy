import React from 'react'
import { LineChart, Line, CartesianGrid, XAxis, YAxis, Tooltip, ResponsiveContainer } from 'recharts';
import { WhiteWindow } from './WhiteWindow';





export const MovilidadChart = ({ diente, parametro }) => {

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
        if (diente < 8) {
          return {
            name: `${index + 1}`,
            uv: examen.movilidad1[diente],
          };
        } 
        if(8<=diente && diente<16){
            return{
                name: `${index + 1}`,
                uv: examen.movilidad2[diente%8], 
            }
        }
        if(16<=diente && diente<24){
            return{
                name: `${index + 1}`,
                uv: examen.movilidad3[diente%8], 
            }
        }
        else {
          return {
            name: `${index + 1}`,
            uv: examen.movilidad4[diente % 8]
          };
        }
      });
    return (
        <WhiteWindow>
        
            <ResponsiveContainer aspect={2}>

                <LineChart width={600} height={300} data={data} margin={{ top: 5, right: 20, bottom: 5, left: 0 }}>
                    <Line type="monotone" dataKey="uv" stroke="#8884d8" />
                    <CartesianGrid stroke="#ccc" strokeDasharray="5 5" />
                    <XAxis  label={{ value: 'Número de examen', position: 'bottom', offset: -10 }} dataKey="name" />
                    <YAxis domain={[0, 3]} ticks={[0, 1, 2, 3]}
                        tickFormatter={(tick) => tick.toFixed(1)} 
                        label={{ value: 'Movilidad a través del tiempo', angle: -90, position: 'left', offset: -20 }}/>
                    <Tooltip />
                </LineChart>
            </ResponsiveContainer>
        </WhiteWindow>

    );
};