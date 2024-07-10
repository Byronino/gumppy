import { Link } from "react-router-dom";
import { TableD } from "../components/ui/TableD";
import { Red } from "../components/ui/Red";
import { useState } from "react";
import { DienteLock } from "../components/ui/DienteLock";
import { FurcaButton } from "../components/ui/FurcaButton";


function PeriogramaPage() {
  //DATOS PRIMERAS 2 TABLAS --------------------------------------------------------------------------
  const nombres1 = ["movilidad", "implante", "defecto de furca", "sangrado al sondaje", "Placa", "Margen Gingival", "Profundidad la sondaje"]

  //DATOS PRIMERA TABLA IZQUIERDA<<<<<<<<<<<<<<<<<<<<<--------------------------------------------------------------------------------------------
  const [dientes1i, setDientes1i] = useState([[18, false], [17, false], [16, false], [15, false], [14, false], [13, false], [12, false], [11, false]])
  const cambioDientes1i = (index) => {
    const newArray = [...dientes1i];
    newArray[index][1] = !newArray[index][1];
    setDientes1i(newArray);
    const newArray2 = [...movilidad1];
    newArray2[index] = 0;
    setMovilidad1(newArray2);
  }
  //comentario prueba
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
  const [furca1d, setFurca1d] = useState([0, 0, 0, 0, 0, 0, 0, 0])
  const cambioFurca1d = (index) => {
    const newFurca = [...furca1d]
    let valor = newFurca[index] + 1
    if (valor === 4) valor = 0
    newFurca[index] = valor
    setFurca1d(newFurca);

  }
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

      <div className="color: black border rounded bg-white" style={{ color: 'black ', display: 'flex', flexWrap: 'wrap', justifyContent: 'center', borderColor: '#fc9099', borderWidth: '10px' }}>
        {/*PRIMERA TABLA IZQUIERDA-----------------------------------------------------------   */}
        <div className="rounded w-1/3 " style={{ boxSizing: 'border-box' }}>

      
          {/*cabecera dela primera tabla-----------------------------------------------------------   */}

          <table style={{ tableLayout: 'fixed', width: '100%' }}>
            <thead>

              <tr>
                <th style={{ padding: '2px', width: '12.5%' }}></th>

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

              {/*Implante??-----------------------------------------------------------   */}

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
              {/*Furca 1 d-----------------------------------------------------------   */}

              <tr>
                <th style={{ padding: '2px', width: '12.5%' }}>{nombres1[2]}</th>
                {furca1d.map((furca1d, index) => (

                  <th key={index} className="border-black border rounded ">
                    {(dientes1i[index][1] || implante1[index]) ? (
                      <div></div>
                    ) :
                      (
                        <FurcaButton onClick={() => { cambioFurca1d(index) }}>{furca1d}</FurcaButton>
                      )
                    }

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