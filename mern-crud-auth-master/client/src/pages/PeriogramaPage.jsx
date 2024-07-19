import { Link } from "react-router-dom";
import { TableD } from "../components/ui/TableD";
import { Red } from "../components/ui/Red";
import { useState } from "react";
import { DienteLock } from "../components/ui/DienteLock";
import { FurcaButton } from "../components/ui/FurcaButton";
import { MiniRed } from "../components/ui/MiniRed";
import { MiniBlue } from "../components/ui/MiniBlue";
import { useEffect } from "react";
import { useForm } from "react-hook-form";
import logo from "../images/logo.png"
import placeholder from "../images/placeholder.png"
import { Button } from "../components/ui/Button";
import { useNavigate, useParams } from "react-router-dom";
import { usePeriodontograma } from "../context/periodontogramaContext";
import { createPeriodontograma } from "../../../src/controllers/periodontograma.controller";
import axios from "axios";
function PeriogramaPage() {


  //DATOS PRIMERAS 2 TABLAS --------------------------------------------------------------------------
  const nombres1 = ["Movilidad", "Implante", "Furca", "B.O.P.", "Placa", "M.G.", "P.S.", "N.I.C."]

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

  //PrOFUNDIDAD AL SONDAJE PRIMERA TABLA IZQUIERDA
  const [prof1i, setprof1i] = useState([[0, 0, 0], [0, 0, 0], [0, 0, 0], [0, 0, 0], [0, 0, 0], [0, 0, 0], [0, 0, 0], [0, 0, 0]])
  const cambioProf1i = (e, index, n) => {
    const newArray = prof1i.map((innerArray, i) => {
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
    setprof1i(newArray);
  };


  // DIFERENCIA ENTRE PROFUNDIDAD Y MARGEN PRIMERA TABLA IZQUIERDA
  const [diff1i, setdiff1i] = useState([[0, 0, 0], [0, 0, 0], [0, 0, 0], [0, 0, 0], [0, 0, 0], [0, 0, 0], [0, 0, 0], [0, 0, 0]])

  useEffect(() => {
    const newDiffArray = prof1i.map((innerArray, i) => {
      return innerArray.map((value, j) => {
        return value - mar1i[i][j];
      });
    });
    setdiff1i(newDiffArray);
  }, [prof1i, mar1i]);



















  //DATOS PRIMERA TABLA DERECHA>>>>>>>>>>>>>>>>>>>>>>-----------------------------------------------
  const [dientes1d, setDientes1d] = useState([[21, false], [22, false], [23, false], [24, false], [25, false], [26, false], [27, false], [28, false]])
  const cambioDientes1d = (index) => {
    const newArray = [...dientes1d];
    newArray[index][1] = !newArray[index][1];
    setDientes1d(newArray);
    //const newArray2 = [...movilidad2];
    //newArray2[index] = 0;
    //setMovilidad2(newArray2);
  }
  //MOVILIDAD 2 TABLA DERECHA
  const [movilidad2, setMovilidad2] = useState([0, 0, 0, 0, 0, 0, 0, 0])
  const cambioMovilidad2 = (e, index) => {
    const newArray = [...movilidad2];
    newArray[index] = e.target.value;
    setMovilidad2(newArray);
  }
  //IMPLANTE 2 TABLA DERECHA
  const [implante2, setImplante2] = useState([false, false, false, false, false, false, false, false])
  const cambioImplante2 = (index) => {
    const newImplante2 = [...implante2]
    newImplante2[index] = !newImplante2[index]
    setImplante2(newImplante2);

  }
  //FURCA 1 DERECHA-------------------------------------------------------------------------------------------
  const [furca1d, setfurca1d] = useState([0, 0, 0, 0, 0, 0, 0, 0])
  const cambiofurca1d = (index) => {
    const newFurca = [...furca1d]
    let valor = newFurca[index] + 1
    if (valor === 4) valor = 0
    newFurca[index] = valor
    setfurca1d(newFurca);

  }
  //SANGRADO AL SONDAJE VESTIBULAR SUPERIOR DERECHO----------------------------------------------------
  const [san1d, setsan1d] = useState([[false, false, false], [false, false, false], [false, false, false], [false, false, false], [false, false, false], [false, false, false], [false, false, false], [false, false, false]])
  const cambioSan1d = (index, n) => {
    const newsan1d = [...san1d]
    newsan1d[index][n] = !newsan1d[index][n]
    setsan1d(newsan1d);

  }
  //PLACA PRIMERA TABLA IZQUIERDA
  const [placa1d, setplaca1d] = useState([[false, false, false], [false, false, false], [false, false, false], [false, false, false], [false, false, false], [false, false, false], [false, false, false], [false, false, false]])
  const cambioPlaca1d = (index, n) => {
    const newplaca1d = [...placa1d]
    newplaca1d[index][n] = !newplaca1d[index][n]
    setplaca1d(newplaca1d)
  }
  //MARGEN GINGIVAL PRIMERA TABLA DERECHA 
  const [mar1d, setmar1d] = useState([[0, 0, 0], [0, 0, 0], [0, 0, 0], [0, 0, 0], [0, 0, 0], [0, 0, 0], [0, 0, 0], [0, 0, 0]])
  const cambioMar1d = (e, index, n) => {
    const newArray = mar1d.map((innerArray, i) => {
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
    setmar1d(newArray);
  };

  //PrOFUNDIDAD AL SONDAJE PRIMERA TABLA DERECHA
  const [prof1d, setprof1d] = useState([[0, 0, 0], [0, 0, 0], [0, 0, 0], [0, 0, 0], [0, 0, 0], [0, 0, 0], [0, 0, 0], [0, 0, 0]])
  const cambioProf1d = (e, index, n) => {
    const newArray = prof1d.map((innerArray, i) => {
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
    setprof1d(newArray);
  };

  // DIFERENCIA ENTRE PROFUNDIDAD Y MARGEN PRIMERA TABLA DERECHA
  const [diff1d, setdiff1d] = useState([[0, 0, 0], [0, 0, 0], [0, 0, 0], [0, 0, 0], [0, 0, 0], [0, 0, 0], [0, 0, 0], [0, 0, 0]])

  useEffect(() => {
    const newDiffArray = prof1d.map((innerArray, i) => {
      return innerArray.map((value, j) => {
        return value - mar1d[i][j];
      });
    });
    setdiff1d(newDiffArray);
  }, [prof1d, mar1d]);






























  //DATOS SEGUNDA TABLA IZQUIERDA



  //MARGEN GINGIVAL PRIMERA TABLA DERECHA 
  const [mar2i, setmar2i] = useState([[0, 0, 0], [0, 0, 0], [0, 0, 0], [0, 0, 0], [0, 0, 0], [0, 0, 0], [0, 0, 0], [0, 0, 0]])
  const cambioMar2i = (e, index, n) => {
    const newArray = mar2i.map((innerArray, i) => {
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
    setmar2i(newArray);
  };
  //PrOFUNDIDAD AL SONDAJE SEGUNDA TABLA IZQUIERDA
  const [prof2i, setprof2i] = useState([[0, 0, 0], [0, 0, 0], [0, 0, 0], [0, 0, 0], [0, 0, 0], [0, 0, 0], [0, 0, 0], [0, 0, 0]])
  const cambioProf2i = (e, index, n) => {
    const newArray = prof2i.map((innerArray, i) => {
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
    setprof2i(newArray);
  };
  // DIFERENCIA ENTRE PROFUNDIDAD Y MARGEN
  const [diff2i, setdiff2i] = useState([[0, 0, 0], [0, 0, 0], [0, 0, 0], [0, 0, 0], [0, 0, 0], [0, 0, 0], [0, 0, 0], [0, 0, 0]])

  useEffect(() => {
    const newDiffArray = prof2i.map((innerArray, i) => {
      return innerArray.map((value, j) => {
        return value - mar2i[i][j];
      });
    });
    setdiff2i(newDiffArray);
  }, [prof2i, mar2i]);

  //PLACA SEGUNDA TABLA IZQUIERDA
  const [placa2i, setplaca2i] = useState([[false, false, false], [false, false, false], [false, false, false], [false, false, false], [false, false, false], [false, false, false], [false, false, false], [false, false, false]])
  const cambioPlaca2i = (index, n) => {
    const newplaca2i = [...placa2i]
    newplaca2i[index][n] = !newplaca2i[index][n]
    setplaca2i(newplaca2i)
  }
  //SANGRADO AL SONDAJE SEGUNDA TABLA IZQUIERDA----------------------------------------------------
  const [san2i, setsan2i] = useState([[false, false, false], [false, false, false], [false, false, false], [false, false, false], [false, false, false], [false, false, false], [false, false, false], [false, false, false]])
  const cambioSan2i = (index, n) => {
    const newsan2i = [...san2i]
    newsan2i[index][n] = !newsan2i[index][n]
    setsan2i(newsan2i);

  }
  //FURCA 2 IZQUIERDA------------------------------------------------------------------------------
  const [furca2i, setfurca2i] = useState([[0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0]])

  const cambiofurca2i = (index, n) => {
    const newfurca2i = [...furca2i]
    let valor = newfurca2i[index][n] + 1
    if (valor === 4) valor = 0
    newfurca2i[index][n] = valor
    setfurca2i(newfurca2i);

  }












  const dientes2i = [48, 47, 46, 45, 44, 43, 42, 41]
  const dientes2d = [31, 32, 33, 34, 35, 36, 37, 38]


  //Logica para la bd
  const { register, handleSubmit } = useForm();
  const navigate= useNavigate()
  const onSubmit = async (data) => {
    try {
      const response = await axios.post('/api/crear_periodontograma', {movilidad1})
    } catch (error) {
      console.log(error);
      // window.location.href = "/";
    }
  };

  return (
    <>

      <div className="mb-16 color: black border rounded bg-white" style={{ color: 'black ', display: 'flex', flexWrap: 'wrap', justifyContent: 'center', borderColor: '#fc9099', borderWidth: '10px', padding: '0' }}>

        {/*PRIMERA TABLA IZQUIERDA-----------------------------------------------------------   */}
        <div className="rounded w-1/3 my-10" style={{ boxSizing: 'border-box' }}>

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
                <th style={{ textAlign: 'right', padding: '2px', width: '12.5%', fontWeight: 'bold', fontSize: '1.2em' }}>{nombres1[0]}</th>

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
                <th style={{ textAlign: 'right', padding: '2px', width: '12.5%', fontWeight: 'bold', fontSize: '1.2em' }}>{nombres1[1]}</th>
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

              <tr style={{ height: '2px', margin: 0 }}>
                <th style={{ textAlign: 'right', padding: '2px', width: '12.5%', fontWeight: 'bold', fontSize: '1.2em' }}>{nombres1[2]}</th>
                {furca1i.map((furca1i, index) => (

                  <th key={index} className="border-black border rounded " style={{ fontWeight: 'bold', fontSize: '1.2em', maxHeight: '3px' }}>
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
                <th style={{ textAlign: 'right', padding: '2px', width: '12.5%', fontWeight: 'bold', fontSize: '1.2em' }}>{nombres1[3]}</th>
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
                <th style={{ textAlign: 'right', padding: '2px', width: '12.5%', fontWeight: 'bold', fontSize: '1.2em' }}>{nombres1[4]}</th>
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
                <th style={{ textAlign: 'right', padding: '2px', width: '12.5%', fontWeight: 'bold', fontSize: '1.2em' }}>{nombres1[5]}</th>

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

              {/*profundidad al sondaje tabla 1 izquierda-------------------------------------------   */}

              <tr>
                <th style={{ textAlign: 'right', padding: '2px', width: '12.5%', fontWeight: 'bold', fontSize: '1.2em' }}>{nombres1[6]}</th>

                {prof1i.map((innerprof1i, index) => (
                  <th key={index} className="border-black border" style={{ padding: '2px', width: '12.5%' }}>
                    {dientes1i[index][1] ? (
                      <div></div>
                    ) : (
                      innerprof1i.map((prof, index2) => (

                        <input
                          key={`${index}-${index2}`}
                          style={{
                            width: '30%',
                            height: '20px',
                            fontSize: '12px',
                            textAlign: "center",
                            color: prof >= 4 ? 'red' : 'black'
                          }}
                          value={prof}
                          onChange={(e) => cambioProf1i(e, index, index2)}
                          onFocus={(e) => e.target.value = ''}
                        />
                      ))
                    )}
                  </th>
                ))}
              </tr>

              {/*NIC tabla 1 izquierda-------------------------------------------   */}

              <tr>
                <th style={{ textAlign: 'right', padding: '2px', width: '12.5%', fontWeight: 'bold', fontSize: '1.2em' }}>{nombres1[7]}</th>

                {diff1i.map((innernicf1i, index) => (
                  <th key={index} className="border-black border bg-slate-200" style={{ padding: '2px', width: '12.5%' }}>
                    {dientes1i[index][1] ? (
                      <div></div>
                    ) : (
                      innernicf1i.map((prof, index2) => (
                        <span
                          key={`${index}-${index2}`}
                          style={{ width: '30%', display: 'inline-block', textAlign: "center", fontSize: '12px' }}
                        >
                          {prof}
                        </span>
                      ))
                    )}
                  </th>
                ))}
              </tr>


            </tbody>
          </table>
        </div>

        {/*cabecera dela segunda tabla-----------------------------------------------------------   */}

        <div className="rounded w-1/3 my-10" style={{ boxSizing: 'border-box' }}>
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

              {/*Furca 1 derecha-----------------------------------------------------------   */}

              <tr style={{ height: '2px', margin: 0 }}>
                <th style={{ padding: '2px', width: '12.5%', fontWeight: 'bold', fontSize: '1.2em' }}></th>
                {furca1d.map((furca1d, index) => (

                  <th key={index} className="border-black border rounded " style={{ fontWeight: 'bold', fontSize: '1.2em', maxHeight: '3px' }}>
                    {((dientes1d[index][1] || implante2[index]) || dientes1d[index][0] < 26) ? (
                      <div></div>
                    ) :
                      (
                        <FurcaButton onClick={() => { cambiofurca1d(index) }}>{furca1d}</FurcaButton>

                      )
                    }

                  </th>
                ))}
              </tr>

              {/*sangrado al sondaje 1 derecha------------------------------------------------------   */}

              <tr>
                <th style={{ padding: '2px', width: '12.5%', fontWeight: 'bold', fontSize: '1.2em' }}></th>
                {san1d.map((innersan1d, index) => (
                  dientes1d[index][1] ? (
                    <th key={index} className="border-black border rounded">
                      <div></div>
                    </th>
                  ) : (
                    <th key={index} className="border-black border rounded">
                      {innersan1d.map((san, index2) => (
                        <MiniRed key={`${index}-${index2}`} onClick={() => cambioSan1d(index, index2)}>
                          {san}
                        </MiniRed>
                      ))}
                    </th>
                  )
                ))}
              </tr>
              {/*placa tabla 1 derecha------------------------------------------------------   */}

              <tr>
                <th style={{ padding: '2px', width: '12.5%', fontWeight: 'bold', fontSize: '1.2em' }}></th>
                {placa1d.map((innerplaca1d, index) => (
                  dientes1d[index][1] ? (
                    <th key={index} className="border-black border rounded">
                      <div></div>
                    </th>
                  ) : (
                    <th key={index} className="border-black border rounded">
                      {innerplaca1d.map((placa, index2) => (

                        <MiniBlue key={`${index}-${index2}`} onClick={() => cambioPlaca1d(index, index2)}>{placa}</MiniBlue>

                      ))}
                    </th>
                  )
                ))}
              </tr>
              {/*margen gingival tabla 1 derecha------------------------------------------------------   */}

              <tr>
                <th style={{ padding: '2px', width: '12.5%', fontWeight: 'bold', fontSize: '1.2em' }}></th>

                {mar1d.map((innermar1d, index) => (
                  <th key={index} className="border-black border" style={{ padding: '2px', width: '12.5%' }}>
                    {dientes1d[index][1] ? (
                      <div></div>
                    ) : (
                      innermar1d.map((margen, index2) => (
                        <input
                          key={`${index}-${index2}`}
                          style={{ width: '30%', height: '20px', fontSize: '12px', textAlign: "center" }}
                          value={margen}
                          onChange={(e) => cambioMar1d(e, index, index2)}
                          onFocus={(e) => e.target.value = ''}
                        />
                      ))
                    )}
                  </th>
                ))}
              </tr>
              {/*profundidad al sondaje tabla 1 DERECHA------------------------------------------   */}

              <tr>
                <th style={{ padding: '2px', width: '12.5%', fontWeight: 'bold', fontSize: '1.2em' }}></th>

                {prof1d.map((innerprof1d, index) => (
                  <th key={index} className="border-black border" style={{ padding: '2px', width: '12.5%' }}>
                    {dientes1d[index][1] ? (
                      <div></div>
                    ) : (
                      innerprof1d.map((prof, index2) => (

                        <input
                          key={`${index}-${index2}`}
                          style={{
                            width: '30%',
                            height: '20px',
                            fontSize: '12px',
                            textAlign: "center",
                            color: prof >= 4 ? 'red' : 'black'
                          }}
                          value={prof}
                          onChange={(e) => cambioProf1d(e, index, index2)}
                          onFocus={(e) => e.target.value = ''}
                        />
                      ))
                    )}
                  </th>
                ))}
              </tr>

              {/*NIC tabla 1 derecha-------------------------------------------   */}

              <tr>
                <th style={{ padding: '2px', width: '12.5%', fontWeight: 'bold', fontSize: '1.2em' }}></th>

                {diff1d.map((innernicf1d, index) => (
                  <th key={index} className="border-black border bg-slate-200" style={{ padding: '2px', width: '12.5%' }}>
                    {dientes1d[index][1] ? (
                      <div></div>
                    ) : (
                      innernicf1d.map((prof, index2) => (
                        <span
                          key={`${index}-${index2}`}
                          style={{ width: '30%', display: 'inline-block', textAlign: "center", fontSize: '12px' }}
                        >
                          {prof}
                        </span>
                      ))
                    )}
                  </th>
                ))}
              </tr>



            </tbody>
          </table>
        </div>

        <div className="my-200 display-flex">
          <img src={placeholder} width="100%" height="100" />

        </div>



        {/*SEGUNDA TABLA IZQUIERDA-----------------------------------------------------------   */}
        <div className="rounded w-1/3 my-10" style={{ boxSizing: 'border-box' }}>

          {/*cabecera dela SEGUNDA tabla-----------------------------------------------------------   */}

          <table style={{ tableLayout: 'fixed', width: '100%' }}>
            <thead>
              <tr>
                <th style={{ padding: '2px', width: '15.5%' }}></th></tr>
            </thead>

            <tbody>
              {/*NIC tabla 1 izquierda-------------------------------------------   */}

              <tr>
                <th style={{ textAlign: 'right', padding: '2px', width: '12.5%', fontWeight: 'bold', fontSize: '1.2em' }}>{nombres1[7]}</th>

                {diff2i.map((innernicf2i, index) => (
                  <th key={index} className="border-black border bg-slate-200" style={{ padding: '2px', width: '12.5%' }}>
                    {dientes1i[index][1] ? (
                      <div></div>
                    ) : (
                      innernicf2i.map((prof, index2) => (
                        <span
                          key={`${index}-${index2}`}
                          style={{ width: '30%', display: 'inline-block', textAlign: "center", fontSize: '12px' }}
                        >
                          {prof}
                        </span>
                      ))
                    )}
                  </th>
                ))}
              </tr>

              {/*margen gingival tabla 2 IZQUIERDA------------------------------------------------------   */}

              <tr>
                <th style={{ textAlign: 'right', padding: '2px', width: '12.5%', fontWeight: 'bold', fontSize: '1.2em' }}>{nombres1[5]}</th>

                {mar2i.map((innermar2i, index) => (
                  <th key={index} className="border-black border" style={{ padding: '2px', width: '12.5%' }}>
                    {dientes1i[index][1] ? (
                      <div></div>
                    ) : (
                      innermar2i.map((margen, index2) => (
                        <input
                          key={`${index}-${index2}`}
                          style={{ width: '30%', height: '20px', fontSize: '12px', textAlign: "center" }}
                          value={margen}
                          onChange={(e) => cambioMar2i(e, index, index2)}
                          onFocus={(e) => e.target.value = ''}
                        />
                      ))
                    )}
                  </th>
                ))}
              </tr>
              {/*profundidad al sondaje tabla 2 izquierda-------------------------------------------   */}

              <tr>
                <th style={{ textAlign: 'right', padding: '2px', width: '12.5%', fontWeight: 'bold', fontSize: '1.2em' }}>{nombres1[6]}</th>

                {prof2i.map((innerprof2i, index) => (
                  <th key={index} className="border-black border" style={{ padding: '2px', width: '12.5%' }}>
                    {dientes1i[index][1] ? (
                      <div></div>
                    ) : (
                      innerprof2i.map((prof, index2) => (

                        <input
                          key={`${index}-${index2}`}
                          style={{
                            width: '30%',
                            height: '20px',
                            fontSize: '12px',
                            textAlign: "center",
                            color: prof >= 4 ? 'red' : 'black'
                          }}
                          value={prof}
                          onChange={(e) => cambioProf2i(e, index, index2)}
                          onFocus={(e) => e.target.value = ''}
                        />
                      ))
                    )}
                  </th>
                ))}
              </tr>
              {/*placa tabla 2 izquierda------------------------------------------------------   */}

              <tr>
                <th style={{ textAlign: 'right', padding: '2px', width: '12.5%', fontWeight: 'bold', fontSize: '1.2em' }}>{nombres1[4]}</th>
                {placa2i.map((innerplaca2i, index) => (
                  dientes1i[index][1] ? (
                    <th key={index} className="border-black border rounded">
                      <div></div>
                    </th>
                  ) : (
                    <th key={index} className="border-black border rounded">
                      {innerplaca2i.map((placa, index2) => (

                        <MiniBlue key={`${index}-${index2}`} onClick={() => cambioPlaca2i(index, index2)}>{placa}</MiniBlue>

                      ))}
                    </th>
                  )
                ))}
              </tr>
              {/*sangrado al sondaje 2 izquierda------------------------------------------------------   */}

              <tr>
                <th style={{ textAlign: 'right', padding: '2px', width: '12.5%', fontWeight: 'bold', fontSize: '1.2em' }}>{nombres1[3]}</th>
                {san2i.map((innersan2i, index) => (
                  dientes1i[index][1] ? (
                    <th key={index} className="border-black border rounded">
                      <div></div>
                    </th>
                  ) : (
                    <th key={index} className="border-black border rounded">
                      {innersan2i.map((san, index2) => (
                        <MiniRed key={`${index}-${index2}`} onClick={() => cambioSan2i(index, index2)}>
                          {san}
                        </MiniRed>
                      ))}
                    </th>
                  )
                ))}
              </tr>
              {/*FURCA 2 izquierda------------------------------------------------------   */}

              <tr>
                <th style={{ textAlign: 'right', padding: '2px', width: '12.5%', fontWeight: 'bold', fontSize: '1.2em' }}>{nombres1[2]}</th>
                {furca2i.map((innerfurca2i, index) =>
                (((dientes1i[index][1] || implante1[index]) || dientes1i[index][0] <= 13 || dientes1i[index][0] === 15) ? (
                  <th key={index} className="border-black border rounded">
                    <div></div>
                  </th>
                ) : (
                  <th key={index} className="border-black border rounded " style={{ fontWeight: 'bold', fontSize: '1.2em', maxHeight: '3px' }}>
                    {innerfurca2i.map((san, index2) => (
                      <FurcaButton key={`${index}-${index2}`} onClick={() => { cambiofurca2i(index, index2) }}>{san}</FurcaButton>

                    ))}
                  </th>
                )
                ))}
              </tr>




















              {/*
            <tr>
              <th style={{ padding: '2px', width: '15.5%' }}></th>

              {dientes1i.map((dientes1i, index) => (

                <th key={index} className="border-black border rounded " style={{ fontWeight: 'bold', fontSize: '1.2em' }}>
                  <DienteLock onClick={() => { cambioDientes1i(index) }}>{dientes1i}</DienteLock>
                </th>
              ))}
            </tr>
            <Dientes1iFunction arreglo = {dientes1i} funcion={cambioDientes1i}></Dientes1iFunction>*/}

            </tbody>
          </table>
        </div >


        {/*SEGUNDA TABLA derecha-----------------------------------------------------------   */}
        <div className="rounded w-1/3 my-10" style={{ boxSizing: 'border-box' }}>

          {/*cabecera dela primera tabla-----------------------------------------------------------   */}

          <table style={{ tableLayout: 'fixed', width: '100%' }}>
            {/*margen gingival tabla 1 derecha------------------------------------------------------   */}
            <thead>
              <tr>
                <th style={{ padding: '2px', width: '15.5%' }}></th></tr>
            </thead>
            <tbody>
              <tr>
                <th style={{ padding: '2px', width: '12.5%', fontWeight: 'bold', fontSize: '1.2em' }}></th>

                {mar1d.map((innermar1d, index) => (
                  <th key={index} className="border-black border" style={{ padding: '2px', width: '12.5%' }}>
                    {dientes1d[index][1] ? (
                      <div></div>
                    ) : (
                      innermar1d.map((margen, index2) => (
                        <input
                          key={`${index}-${index2}`}
                          style={{ width: '30%', height: '20px', fontSize: '12px', textAlign: "center" }}
                          value={margen}
                          onChange={(e) => cambioMar1d(e, index, index2)}
                          onFocus={(e) => e.target.value = ''}
                        />
                      ))
                    )}
                  </th>
                ))}
              </tr>
            </tbody>
          </table>
        </div >

        <form onSubmit={handleSubmit(onSubmit)}>
          {/* your form fields here */}
          <button type="submit">Save to Database</button>
        </form>

      </div >

    </>
  )
}

export default PeriogramaPage