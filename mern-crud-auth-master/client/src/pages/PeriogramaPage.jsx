import { Link } from "react-router-dom";
import { TableD } from "../components/ui/TableD";
import { Red } from "../components/ui/Red";
import { useState } from "react";
import { DienteLock } from "../components/ui/DienteLock";
import { FurcaButton } from "../components/ui/FurcaButton";
import { MiniRed } from "../components/ui/MiniRed";
import { MiniBlue } from "../components/ui/MiniBlue";

function PeriogramaPage() {
  //DATOS PRIMERAS 2 TABLAS --------------------------------------------------------------------------
  const nombres1 = ["movilidad", "implante", "defecto de furca", "sangrado al sondaje", "Placa", "Margen Gingival", "Profundidad la sondaje"]

  //DATOS PRIMERA TABLA IZQUIERDA<<<<<<<<<<<<<<<<<<<<<--------------------------------------------------------------------------------------------
  const [dientes1i, setDientes1i] = useState([[18, false], [17, false], [16, false], [15, false], [14, false], [13, false], [12, false], [11, false]])
  const cambioDientes1i = (index) => {
    const newArray = [...dientes1i];
    newArray[index][1] = !newArray[index][1];
    setDientes1i(newArray);
    //const newArray2 = [...movilidad1];
    //newArray2[index] = 0;
    //setMovilidad1(newArray2);
  }

  //MOVILIDAD 1-------------------------------------------------------------------------------------------
  const [movilidad1, setMovilidad1] = useState([0, 0, 0, 0, 0, 0, 0, 0])
  const cambioMovilidad1 = (e, index) => {
    const newArray = [...movilidad1];
    newArray[index] = e.target.value;
    setMovilidad1(newArray);
  }
  //IMPLANTE 1-------------------------------------------------------------------------------------------
  const [implante1, setImplante1] = useState([false, false, false, false, false, false, false, false])
  const cambioImplante = (index) => {
    const newImplante = [...implante1]
    newImplante[index] = !newImplante[index]
    setImplante1(newImplante);

  }
  //FURCA 1 IZQUIERDA-------------------------------------------------------------------------------------------
  const [furca1i, setfurca1i] = useState([0, 0, 0, 0, 0, 0, 0, 0])
  const cambiofurca1i = (index) => {
    const newFurca = [...furca1i]
    let valor = newFurca[index] + 1
    if (valor === 4) valor = 0
    newFurca[index] = valor
    setfurca1i(newFurca);

  }

  //SANGRADO AL SONDAJE VESTIBULAR SUPERIOR IZQUIERDO----------------------------------------------------
  const [san1i, setsan1i] = useState([[false, false, false], [false, false, false], [false, false, false], [false, false, false], [false, false, false], [false, false, false], [false, false, false], [false, false, false]])
  const cambioSan1i = (index, n) => {
    const newsan1i = [...san1i]
    newsan1i[index][n] = !newsan1i[index][n]
    setsan1i(newsan1i);

  }

  //PLACA PRIMERA TABLA IZQUIERDA
  const [placa1i, setplaca1i] = useState([[false, false, false], [false, false, false], [false, false, false], [false, false, false], [false, false, false], [false, false, false], [false, false, false], [false, false, false]])
  const cambioPlaca1i = (index, n) => {
    const newplaca1i = [...placa1i]
    newplaca1i[index][n] = !newplaca1i[index][n]
    setplaca1i(newplaca1i)
  }
  //MARGEN GINGIVAL PRIMERA TABLA IZQUIERDA
  const [mar1i, setmar1i] = useState([[0, 0, 0], [0, 0, 0], [0, 0, 0], [0, 0, 0], [0, 0, 0], [0, 0, 0], [0, 0, 0], [0, 0, 0]])
  const cambioMar1i = (e, index, n) => {
    const newArray = mar1i.map((innerArray, i) => {
      if (i === index) {
        return innerArray.map((value, j) => {
          if (j === n) {
            return e.target.value;
          }
          return value;
        });
      }
      return innerArray;
    });
    setmar1i(newArray);
  };


  //DATOS PRIMERA TABLA DERECHA>>>>>>>>>>>>>>>>>>>>>>--------------------------------------------------------------------------
  const [dientes1d, setDientes1d] = useState([[21, false], [22, false], [23, false], [24, false], [25, false], [26, false], [27, false], [28, false]])
  const cambioDientes1d = (index) => {
    const newArray = [...dientes1d];
    newArray[index][1] = !newArray[index][1];
    setDientes1d(newArray);
    const newArray2 = [...movilidad2];
    newArray2[index] = 0;
    setMovilidad2(newArray2);
  }
  const [movilidad2, setMovilidad2] = useState([0, 0, 0, 0, 0, 0, 0, 0])
  const cambioMovilidad2 = (e, index) => {
    const newArray = [...movilidad2];
    newArray[index] = e.target.value;
    setMovilidad2(newArray);
  }
  const [implante2, setImplante2] = useState([false, false, false, false, false, false, false, false])
  const cambioImplante2 = (index) => {
    const newImplante2 = [...implante2]
    newImplante2[index] = !newImplante2[index]
    setImplante2(newImplante2);

  }


  const dientes2i = [48, 47, 46, 45, 44, 43, 42, 41]
  const dientes2d = [31, 32, 33, 34, 35, 36, 37, 38]


  return (
    <>

      <div className="color: black border rounded bg-white" style={{ color: 'black ', display: 'flex', flexWrap: 'wrap', justifyContent: 'center', borderColor: '#fc9099', borderWidth: '10px', padding: '0' }}>
        {mar1i}
        {movilidad1}
        {/*PRIMERA TABLA IZQUIERDA-----------------------------------------------------------   */}
        <div className="rounded w-1/3 " style={{ boxSizing: 'border-box' }}>

          {/*cabecera dela primera tabla-----------------------------------------------------------   */}

          <table style={{ tableLayout: 'fixed', width: '100%' }}>
            <thead>

              <tr>
                <th style={{ padding: '2px', width: '15.5%' }}></th>

                {dientes1i.map((dientes1i, index) => (

                  <th key={index} className="border-black border rounded " style={{ fontWeight: 'bold', fontSize: '1.2em' }}>
                    <DienteLock onClick={() => { cambioDientes1i(index) }}>{dientes1i}</DienteLock>
                  </th>
                ))}
              </tr>
              {/*<Dientes1iFunction arreglo = {dientes1i} funcion={cambioDientes1i}></Dientes1iFunction>*/}

            </thead>

            {/*movilidad-----------------------------------------------------------   */}
            <tbody>
              <tr>
                <th style={{ padding: '2px', width: '12.5%' }}>{nombres1[0]}</th>

                {movilidad1.map((movilidad, index) => (
                  <th key={index} className="border-black border " style={{ padding: '2px', width: '12.5%' }} >

                    {dientes1i[index][1] ? (
                      <div></div>
                    ) :
                      (
                        <input
                          style={{ width: '80%', height: '20px', fontSize: '12px', textAlign: "center" }}
                          value={movilidad}
                          onChange={(e) => cambioMovilidad1(e, index)}
                          onFocus={(e) => e.target.value = ''}
                        />

                      )}
                  </th>
                ))}
              </tr>

              {/*Implante-----------------------------------------------------------   */}

              <tr>
                <th style={{ padding: '2px', width: '12.5%' }}>{nombres1[1]}</th>
                {implante1.map((implante, index) => (
                  <th key={index} className="border-black border rounded ">
                    {dientes1i[index][1] ? (
                      <div></div>
                    ) :
                      (<Red onClick={() => { cambioImplante(index) }}>{implante}</Red>)
                    }

                  </th>
                ))}
              </tr>
              {/*Furca 1 izquierda-----------------------------------------------------------   */}

              <tr>
                <th style={{ padding: '2px', width: '12.5%' }}>{nombres1[2]}</th>
                {furca1i.map((furca1i, index) => (

                  <th key={index} className="border-black border rounded ">
                    {((dientes1i[index][1] || implante1[index]) || dientes1i[index][0] <= 15) ? (
                      <div></div>
                    ) :
                      (
                        <FurcaButton onClick={() => { cambiofurca1i(index) }}>{furca1i}</FurcaButton>

                      )
                    }

                  </th>
                ))}
              </tr>


              {/*sangrado al sondaje 1 izquierda------------------------------------------------------   */}

              <tr>
                <th style={{ padding: '2px', width: '12.5%' }}>{nombres1[3]}</th>
                {san1i.map((innersan1i, index) => (
                  dientes1i[index][1] ? (
                    <th key={index} className="border-black border rounded">
                      <div></div>
                    </th>
                  ) : (
                    <th key={index} className="border-black border rounded">
                      {innersan1i.map((san, index2) => (
                        <MiniRed key={`${index}-${index2}`} onClick={() => cambioSan1i(index, index2)}>
                          {san}
                        </MiniRed>
                      ))}
                    </th>
                  )
                ))}
              </tr>


              {/*placa tabla 1 izquierda------------------------------------------------------   */}

              <tr>
                <th style={{ padding: '2px', width: '12.5%' }}>{nombres1[4]}</th>
                {placa1i.map((innerplaca1i, index) => (
                  dientes1i[index][1] ? (
                    <th key={index} className="border-black border rounded">
                      <div></div>
                    </th>
                  ) : (
                    <th key={index} className="border-black border rounded">
                      {innerplaca1i.map((placa, index2) => (

                        <MiniBlue key={`${index}-${index2}`} onClick={() => cambioPlaca1i(index, index2)}>{placa}</MiniBlue>

                      ))}
                    </th>
                  )
                ))}
              </tr>


              {/*margen gingival tabla 1 izquierda------------------------------------------------------   */}

              <tr>
                <th style={{ padding: '2px', width: '12.5%' }}>{nombres1[5]}</th>

                {mar1i.map((innermar1i, index) => (
                  <th key={index} className="border-black border" style={{ padding: '2px', width: '12.5%' }}>
                    {dientes1i[index][1] ? (
                      <div></div>
                    ) : (
                      innermar1i.map((margen, index2) => (
                        <input
                          key={`${index}-${index2}`} 
                          style={{ width: '30%', height: '20px', fontSize: '12px', textAlign: "center" }}
                          value={margen}
                          onChange={(e) => cambioMar1i(e, index, index2)}
                          onFocus={(e) => e.target.value = ''}
                        />
                      ))
                    )}
                  </th>
                ))}
              </tr>

            </tbody>
          </table>
        </div>

        {/*cabecera dela segunda tabla-----------------------------------------------------------   */}

        <div className="rounded w-1/3 " style={{ boxSizing: 'border-box' }}>
          {/*cabecera dela segunda tabla-----------------------------------------------------------   */}

          <table style={{ tableLayout: 'fixed', width: '100%' }}>
            <thead>

              <tr>
                <th style={{ padding: '2px', width: '12.5%' }}></th>

                {dientes1d.map((dientes1i, index) => (

                  <th key={index} className="border-black border rounded " style={{ fontWeight: 'bold', fontSize: '1.2em' }}>
                    <DienteLock onClick={() => { cambioDientes1d(index) }}>{dientes1i}</DienteLock>
                  </th>
                ))}
              </tr>

            </thead>
            {/*movilidad-----------------------------------------------------------   */}
            <tbody>
              <tr>
                <th style={{ padding: '2px', width: '12.5%' }}></th>

                {movilidad2.map((movilidad, index) => (
                  <th key={index} className="border-black border " style={{ padding: '2px', width: '12.5%' }} >

                    {dientes1d[index][1] ? (
                      <div></div>
                    ) :
                      (
                        <input
                          style={{ width: '80%', height: '20px', fontSize: '12px', textAlign: "center" }}
                          value={movilidad}
                          onChange={(e) => cambioMovilidad2(e, index)}
                          onFocus={(e) => e.target.value = ''}
                        />

                      )}
                  </th>
                ))}
              </tr>
              {/*Implante??-----------------------------------------------------------   */}

              <tr>
                <th style={{ padding: '2px', width: '12.5%' }}></th>
                {implante2.map((implante, index) => (
                  <th key={index} className="border-black border rounded ">
                    {dientes1d[index][1] ? (
                      <div></div>
                    ) :
                      (<Red onClick={() => { cambioImplante2(index) }}>{implante}</Red>)
                    }

                  </th>
                ))}
              </tr>



            </tbody>
          </table>
        </div>

      </div >
    </>
  )
}

export default PeriogramaPage