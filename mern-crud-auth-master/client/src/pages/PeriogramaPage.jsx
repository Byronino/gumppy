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
import placeholder2 from "../images/placeholder2.png"
import borde from "../images/borde.png"
import { Button } from "../components/ui/Button";
import { useNavigate, useParams } from "react-router-dom";
import { usePeriodontograma } from "../context/periodontogramaContext";
import { createPeriodontograma } from "../../../src/controllers/periodontograma.controller";
import dibujo1i from "../images/dibujo1i.png"
import axios from "axios";
import { Subtitulo } from "../components/ui/Subtitulo";
import { useLocation } from "react-router-dom";
import { OfficialCard } from "../components/ui/OfficialCard";
import { Fila } from "../components/ui/Fila";
import { Textorosa } from "../components/ui/Textorosa";
import { MiniBlack } from "../components/ui/MiniBlack";
import { MiniYellow } from "../components/ui/MiniYellow";
import { MiniPurple } from "../components/ui/MiniPurple";
import { Button2 } from "../components/ui/Button2";
import { Textonegro } from "../components/ui/Textonegro";

function PeriogramaPage() {
  const location = useLocation();
  const paciente = location.state;

  const patient = paciente._id

  //DATOS PRIMERAS 2 TABLAS --------------------------------------------------------------------------
  const nombres1 = ["Movilidad", "Implante", "Furca", "B.O.P.", "Placa", "M.G.", "P.S.", "N.I.C.", "C.R.", "R.M.A", "Sup."]

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
    newArray[index] = Number(e.target.value);
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
    const valor = e.target.value;

    // Agregamos esta condición para verificar si el valor es un símbolo -
    if (valor === '-') {
      const newArray = mar1i.map((innerArray, i) => {
        if (i === index) {
          return innerArray.map((value, j) => {
            if (j === n) {
              return valor;
            }
            return value;
          });
        }
        return innerArray;
      });
      setmar1i(newArray);
      return;
    }

    const esNegativo = valor.startsWith('-');
    const valorAbsoluto = esNegativo ? valor.substring(1) : valor;
    const valorNumerico = Number(valorAbsoluto);
    const valorFinal = esNegativo ? -valorNumerico : valorNumerico;

    const newArray = mar1i.map((innerArray, i) => {
      if (i === index) {
        return innerArray.map((value, j) => {
          if (j === n) {
            return valorFinal;
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
            return Number(e.target.value);
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
    newArray[index] = Number(e.target.value);
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
    const valor = e.target.value;

    // Agregamos esta condición para verificar si el valor es un símbolo -
    if (valor === '-') {
      const newArray = mar1d.map((innerArray, i) => {
        if (i === index) {
          return innerArray.map((value, j) => {
            if (j === n) {
              return valor;
            }
            return value;
          });
        }
        return innerArray;
      });
      setmar1d(newArray);
      return;
    }

    const esNegativo = valor.startsWith('-');
    const valorAbsoluto = esNegativo ? valor.substring(1) : valor;
    const valorNumerico = Number(valorAbsoluto);
    const valorFinal = esNegativo ? -valorNumerico : valorNumerico;

    const newArray = mar1d.map((innerArray, i) => {
      if (i === index) {
        return innerArray.map((value, j) => {
          if (j === n) {
            return valorFinal;
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
            return Number(e.target.value);
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



  //MARGEN GINGIVAL SEGUNDA TABLA IZQUIERDA
  const [mar2i, setmar2i] = useState([[0, 0, 0], [0, 0, 0], [0, 0, 0], [0, 0, 0], [0, 0, 0], [0, 0, 0], [0, 0, 0], [0, 0, 0]])
  const cambioMar2i = (e, index, n) => {
    const valor = e.target.value;

    // Agregamos esta condición para verificar si el valor es un símbolo -
    if (valor === '-') {
      const newArray = mar2i.map((innerArray, i) => {
        if (i === index) {
          return innerArray.map((value, j) => {
            if (j === n) {
              return valor;
            }
            return value;
          });
        }
        return innerArray;
      });
      setmar2i(newArray);
      return;
    }

    const esNegativo = valor.startsWith('-');
    const valorAbsoluto = esNegativo ? valor.substring(1) : valor;
    const valorNumerico = Number(valorAbsoluto);
    const valorFinal = esNegativo ? -valorNumerico : valorNumerico;

    const newArray = mar2i.map((innerArray, i) => {
      if (i === index) {
        return innerArray.map((value, j) => {
          if (j === n) {
            return valorFinal;
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
            return Number(e.target.value);
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










  //DATOS SEGUNDA TABLA DERECHA
  //MARGEN GINGIVAL SEGUNDA TABLA IZQUIERDA
  const [mar2d, setmar2d] = useState([[0, 0, 0], [0, 0, 0], [0, 0, 0], [0, 0, 0], [0, 0, 0], [0, 0, 0], [0, 0, 0], [0, 0, 0]])
  const cambioMar2d = (e, index, n) => {
    const valor = e.target.value;

    // Agregamos esta condición para verificar si el valor es un símbolo -
    if (valor === '-') {
      const newArray = mar2d.map((innerArray, i) => {
        if (i === index) {
          return innerArray.map((value, j) => {
            if (j === n) {
              return valor;
            }
            return value;
          });
        }
        return innerArray;
      });
      setmar2d(newArray);
      return;
    }

    const esNegativo = valor.startsWith('-');
    const valorAbsoluto = esNegativo ? valor.substring(1) : valor;
    const valorNumerico = Number(valorAbsoluto);
    const valorFinal = esNegativo ? -valorNumerico : valorNumerico;

    const newArray = mar2d.map((innerArray, i) => {
      if (i === index) {
        return innerArray.map((value, j) => {
          if (j === n) {
            return valorFinal;
          }
          return value;
        });
      }
      return innerArray;
    });
    setmar2d(newArray);
  };
  //PrOFUNDIDAD AL SONDAJE SEGUNDA TABLA DERECHA
  const [prof2d, setprof2d] = useState([[0, 0, 0], [0, 0, 0], [0, 0, 0], [0, 0, 0], [0, 0, 0], [0, 0, 0], [0, 0, 0], [0, 0, 0]])
  const cambioProf2d = (e, index, n) => {
    const newArray = prof2d.map((innerArray, i) => {
      if (i === index) {
        return innerArray.map((value, j) => {
          if (j === n) {
            return Number(e.target.value);
          }
          return value;
        });
      }
      return innerArray;
    });
    setprof2d(newArray);
  };

  // DIFERENCIA ENTRE PROFUNDIDAD Y MARGEN segunda tabla derecha
  const [diff2d, setdiff2d] = useState([[0, 0, 0], [0, 0, 0], [0, 0, 0], [0, 0, 0], [0, 0, 0], [0, 0, 0], [0, 0, 0], [0, 0, 0]])

  useEffect(() => {
    const newDiffArray = prof2d.map((innerArray, i) => {
      return innerArray.map((value, j) => {
        return value - mar2d[i][j];
      });
    });
    setdiff2d(newDiffArray);
  }, [prof2d, mar2d]);
  //PLACA SEGUNDA TABLA DERECHA
  const [placa2d, setplaca2d] = useState([[false, false, false], [false, false, false], [false, false, false], [false, false, false], [false, false, false], [false, false, false], [false, false, false], [false, false, false]])
  const cambioPlaca2d = (index, n) => {
    const newplaca2d = [...placa2d]
    newplaca2d[index][n] = !newplaca2d[index][n]
    setplaca2d(newplaca2d)
  }
  //SANGRADO AL SONDAJE SEGUNDA TABLA derecha----------------------------------------------------
  const [san2d, setsan2d] = useState([[false, false, false], [false, false, false], [false, false, false], [false, false, false], [false, false, false], [false, false, false], [false, false, false], [false, false, false]])
  const cambioSan2d = (index, n) => {
    const newsan2d = [...san2d]
    newsan2d[index][n] = !newsan2d[index][n]
    setsan2d(newsan2d);

  }
  //FURCA 2 DERECHA------------------------------------------------------------------------------
  const [furca2d, setfurca2d] = useState([[0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0]])

  const cambiofurca2d = (index, n) => {
    const newfurca2d = [...furca2d]
    let valor = newfurca2d[index][n] + 1
    if (valor === 4) valor = 0
    newfurca2d[index][n] = valor
    setfurca2d(newfurca2d);

  }







  //DATOS TERCERA TABLA IZQUIERDA<<<<<<<<<<<<<<<<<<<<<--------------------------------------------------
  const [dientes2i, setDientes2i] = useState([[48, false], [47, false], [46, false], [45, false], [44, false], [43, false], [42, false], [41, false]])
  const cambioDientes2i = (index) => {
    const newArray = [...dientes2i];
    newArray[index][1] = !newArray[index][1];
    setDientes2i(newArray);

  }

  //MOVILIDAD 3-------------------------------------------------------------------------------------------
  const [movilidad3, setMovilidad3] = useState([0, 0, 0, 0, 0, 0, 0, 0])
  const cambioMovilidad3 = (e, index) => {
    const newArray = [...movilidad3];
    newArray[index] = Number(e.target.value);
    setMovilidad3(newArray);
  }
  //IMPLANTE 3-------------------------------------------------------------------------------------------
  const [implante3, setImplante3] = useState([false, false, false, false, false, false, false, false])
  const cambioImplante3 = (index) => {
    const newImplante3 = [...implante3]
    newImplante3[index] = !newImplante3[index]
    setImplante3(newImplante3);

  }
  //FURCA 3 IZQUIERDA-----------------------------------------------------------------------------------
  const [furca3i, setfurca3i] = useState([0, 0, 0, 0, 0, 0, 0, 0])
  const cambiofurca3i = (index) => {
    const newFurca = [...furca3i]
    let valor = newFurca[index] + 1
    if (valor === 4) valor = 0
    newFurca[index] = valor
    setfurca3i(newFurca);

  }

  //SANGRADO AL SONDAJE tabla 3 izquierda----------------------------------------------------
  const [san3i, setsan3i] = useState([[false, false, false], [false, false, false], [false, false, false], [false, false, false], [false, false, false], [false, false, false], [false, false, false], [false, false, false]])
  const cambioSan3i = (index, n) => {
    const newsan3i = [...san3i]
    newsan3i[index][n] = !newsan3i[index][n]
    setsan3i(newsan3i);

  }

  //PLACA TERCERA TABLA IZQUIERDA
  const [placa3i, setplaca3i] = useState([[false, false, false], [false, false, false], [false, false, false], [false, false, false], [false, false, false], [false, false, false], [false, false, false], [false, false, false]])
  const cambioPlaca3i = (index, n) => {
    const newplaca3i = [...placa3i]
    newplaca3i[index][n] = !newplaca3i[index][n]
    setplaca3i(newplaca3i)
  }
  //MARGEN GINGIVAL TERCERA TABLA IZQUIERDA
  const [mar3i, setmar3i] = useState([[0, 0, 0], [0, 0, 0], [0, 0, 0], [0, 0, 0], [0, 0, 0], [0, 0, 0], [0, 0, 0], [0, 0, 0]])

  const cambioMar3i = (e, index, n) => {
    const valor = e.target.value;

    // Agregamos esta condición para verificar si el valor es un símbolo -
    if (valor === '-') {
      const newArray = mar3i.map((innerArray, i) => {
        if (i === index) {
          return innerArray.map((value, j) => {
            if (j === n) {
              return valor;
            }
            return value;
          });
        }
        return innerArray;
      });
      setmar3i(newArray);
      return;
    }

    const esNegativo = valor.startsWith('-');
    const valorAbsoluto = esNegativo ? valor.substring(1) : valor;
    const valorNumerico = Number(valorAbsoluto);
    const valorFinal = esNegativo ? -valorNumerico : valorNumerico;

    const newArray = mar3i.map((innerArray, i) => {
      if (i === index) {
        return innerArray.map((value, j) => {
          if (j === n) {
            return valorFinal;
          }
          return value;
        });
      }
      return innerArray;
    });
    setmar3i(newArray);
  };

  //PrOFUNDIDAD AL SONDAJE TERCER TABLA IZQUIERDA
  const [prof3i, setprof3i] = useState([[0, 0, 0], [0, 0, 0], [0, 0, 0], [0, 0, 0], [0, 0, 0], [0, 0, 0], [0, 0, 0], [0, 0, 0]])
  const cambioProf3i = (e, index, n) => {
    const newArray = prof3i.map((innerArray, i) => {
      if (i === index) {
        return innerArray.map((value, j) => {
          if (j === n) {
            return Number(e.target.value);
          }
          return value;
        });
      }
      return innerArray;
    });
    setprof3i(newArray);
  };


  // DIFERENCIA ENTRE PROFUNDIDAD Y MARGEN TERCERA TABLA IZQUIERDA
  const [diff3i, setdiff3i] = useState([[0, 0, 0], [0, 0, 0], [0, 0, 0], [0, 0, 0], [0, 0, 0], [0, 0, 0], [0, 0, 0], [0, 0, 0]])

  useEffect(() => {
    const newDiffArray = prof3i.map((innerArray, i) => {
      return innerArray.map((value, j) => {
        return value - mar3i[i][j];
      });
    });
    setdiff3i(newDiffArray);
  }, [prof3i, mar3i]);


  //DATOS TERCERA TABLA DERECHA<<<<<<<<<<<<<<<<<<<<<--------------------------------------------------
  const [dientes2d, setDientes2d] = useState([[31, false], [32, false], [33, false], [34, false], [35, false], [36, false], [37, false], [38, false]])
  const cambioDientes2d = (index) => {
    const newArray = [...dientes2d];
    newArray[index][1] = !newArray[index][1];
    setDientes2d(newArray);

  }

  //MOVILIDAD 4-------------------------------------------------------------------------------------------
  const [movilidad4, setMovilidad4] = useState([0, 0, 0, 0, 0, 0, 0, 0])
  const cambioMovilidad4 = (e, index) => {
    const newArray = [...movilidad4];
    newArray[index] = Number(e.target.value);
    setMovilidad4(newArray);
  }
  //IMPLANTE 4-------------------------------------------------------------------------------------------
  const [implante4, setImplante4] = useState([false, false, false, false, false, false, false, false])
  const cambioImplante4 = (index) => {
    const newImplante4 = [...implante4]
    newImplante4[index] = !newImplante4[index]
    setImplante4(newImplante4);

  }
  //FURCA 3 DERECHA-----------------------------------------------------------------------------------
  const [furca3d, setfurca3d] = useState([0, 0, 0, 0, 0, 0, 0, 0])
  const cambiofurca3d = (index) => {
    const newFurca = [...furca3d]
    let valor = newFurca[index] + 1
    if (valor === 4) valor = 0
    newFurca[index] = valor
    setfurca3d(newFurca);

  }

  //SANGRADO AL SONDAJE tabla 3 DERECHA----------------------------------------------------
  const [san3d, setsan3d] = useState([[false, false, false], [false, false, false], [false, false, false], [false, false, false], [false, false, false], [false, false, false], [false, false, false], [false, false, false]])
  const cambioSan3d = (index, n) => {
    const newsan3d = [...san3d]
    newsan3d[index][n] = !newsan3d[index][n]
    setsan3d(newsan3d);

  }

  //PLACA TERCERA TABLA DERECHA
  const [placa3d, setplaca3d] = useState([[false, false, false], [false, false, false], [false, false, false], [false, false, false], [false, false, false], [false, false, false], [false, false, false], [false, false, false]])
  const cambioPlaca3d = (index, n) => {
    const newplaca3d = [...placa3d]
    newplaca3d[index][n] = !newplaca3d[index][n]
    setplaca3d(newplaca3d)
  }
  //MARGEN GINGIVAL TERCERA TABLA DERECHA
  const [mar3d, setmar3d] = useState([[0, 0, 0], [0, 0, 0], [0, 0, 0], [0, 0, 0], [0, 0, 0], [0, 0, 0], [0, 0, 0], [0, 0, 0]])

  const cambioMar3d = (e, index, n) => {
    const valor = e.target.value;

    // Agregamos esta condición para verificar si el valor es un símbolo -
    if (valor === '-') {
      const newArray = mar3d.map((innerArray, i) => {
        if (i === index) {
          return innerArray.map((value, j) => {
            if (j === n) {
              return valor;
            }
            return value;
          });
        }
        return innerArray;
      });
      setmar3d(newArray);
      return;
    }

    const esNegativo = valor.startsWith('-');
    const valorAbsoluto = esNegativo ? valor.substring(1) : valor;
    const valorNumerico = Number(valorAbsoluto);
    const valorFinal = esNegativo ? -valorNumerico : valorNumerico;

    const newArray = mar3d.map((innerArray, i) => {
      if (i === index) {
        return innerArray.map((value, j) => {
          if (j === n) {
            return valorFinal;
          }
          return value;
        });
      }
      return innerArray;
    });
    setmar3d(newArray);
  };

  //PrOFUNDIDAD AL SONDAJE TERCER TABLA DERECHA
  const [prof3d, setprof3d] = useState([[0, 0, 0], [0, 0, 0], [0, 0, 0], [0, 0, 0], [0, 0, 0], [0, 0, 0], [0, 0, 0], [0, 0, 0]])
  const cambioProf3d = (e, index, n) => {
    const newArray = prof3d.map((innerArray, i) => {
      if (i === index) {
        return innerArray.map((value, j) => {
          if (j === n) {
            return Number(e.target.value);
          }
          return value;
        });
      }
      return innerArray;
    });
    setprof3d(newArray);
  };


  // DIFERENCIA ENTRE PROFUNDIDAD Y MARGEN TERCERA TABLA DERECHA
  const [diff3d, setdiff3d] = useState([[0, 0, 0], [0, 0, 0], [0, 0, 0], [0, 0, 0], [0, 0, 0], [0, 0, 0], [0, 0, 0], [0, 0, 0]])

  useEffect(() => {
    const newDiffArray = prof3d.map((innerArray, i) => {
      return innerArray.map((value, j) => {
        return value - mar3d[i][j];
      });
    });
    setdiff3d(newDiffArray);
  }, [prof3d, mar3d]);





  //DATOS CUARTA TABLA IZQUIERDA



  //MARGEN GINGIVAL CUARTA TABLA IZQUIERDA
  const [mar4i, setmar4i] = useState([[0, 0, 0], [0, 0, 0], [0, 0, 0], [0, 0, 0], [0, 0, 0], [0, 0, 0], [0, 0, 0], [0, 0, 0]])
  const cambioMar4i = (e, index, n) => {
    const valor = e.target.value;

    // Agregamos esta condición para verificar si el valor es un símbolo -
    if (valor === '-') {
      const newArray = mar4i.map((innerArray, i) => {
        if (i === index) {
          return innerArray.map((value, j) => {
            if (j === n) {
              return valor;
            }
            return value;
          });
        }
        return innerArray;
      });
      setmar4i(newArray);
      return;
    }

    const esNegativo = valor.startsWith('-');
    const valorAbsoluto = esNegativo ? valor.substring(1) : valor;
    const valorNumerico = Number(valorAbsoluto);
    const valorFinal = esNegativo ? -valorNumerico : valorNumerico;

    const newArray = mar4i.map((innerArray, i) => {
      if (i === index) {
        return innerArray.map((value, j) => {
          if (j === n) {
            return valorFinal;
          }
          return value;
        });
      }
      return innerArray;
    });
    setmar4i(newArray);
  };
  //PrOFUNDIDAD AL SONDAJE CUARTA TABLA IZQUIERDA
  const [prof4i, setprof4i] = useState([[0, 0, 0], [0, 0, 0], [0, 0, 0], [0, 0, 0], [0, 0, 0], [0, 0, 0], [0, 0, 0], [0, 0, 0]])
  const cambioProf4i = (e, index, n) => {
    const newArray = prof4i.map((innerArray, i) => {
      if (i === index) {
        return innerArray.map((value, j) => {
          if (j === n) {
            return Number(e.target.value);
          }
          return value;
        });
      }
      return innerArray;
    });
    setprof4i(newArray);
  };
  // DIFERENCIA ENTRE PROFUNDIDAD Y MARGEN CUARTA TABLA IZQUIERDA
  const [diff4i, setdiff4i] = useState([[0, 0, 0], [0, 0, 0], [0, 0, 0], [0, 0, 0], [0, 0, 0], [0, 0, 0], [0, 0, 0], [0, 0, 0]])

  useEffect(() => {
    const newDiffArray = prof4i.map((innerArray, i) => {
      return innerArray.map((value, j) => {
        return value - mar4i[i][j];
      });
    });
    setdiff4i(newDiffArray);
  }, [prof4i, mar4i]);

  //PLACA CUARTA TABLA IZQUIERDA
  const [placa4i, setplaca4i] = useState([[false, false, false], [false, false, false], [false, false, false], [false, false, false], [false, false, false], [false, false, false], [false, false, false], [false, false, false]])
  const cambioPlaca4i = (index, n) => {
    const newplaca4i = [...placa4i]
    newplaca4i[index][n] = !newplaca4i[index][n]
    setplaca4i(newplaca4i)
  }
  //SANGRADO AL SONDAJE CUARTA TABLA IZQUIERDA----------------------------------------------------
  const [san4i, setsan4i] = useState([[false, false, false], [false, false, false], [false, false, false], [false, false, false], [false, false, false], [false, false, false], [false, false, false], [false, false, false]])
  const cambioSan4i = (index, n) => {
    const newsan4i = [...san4i]
    newsan4i[index][n] = !newsan4i[index][n]
    setsan4i(newsan4i);

  }
  //FURCA 4 IZQUIERDA-------------------------------------------------------------------------------------------
  const [furca4i, setfurca4i] = useState([0, 0, 0, 0, 0, 0, 0, 0])
  const cambiofurca4i = (index) => {
    const newFurca = [...furca4i]
    let valor = newFurca[index] + 1
    if (valor === 4) valor = 0
    newFurca[index] = valor
    setfurca4i(newFurca);

  }

  //DATOS CUARTA TABLA DERECHA



  //MARGEN GINGIVAL CUARTA TABLA DERECHA
  const [mar4d, setmar4d] = useState([[0, 0, 0], [0, 0, 0], [0, 0, 0], [0, 0, 0], [0, 0, 0], [0, 0, 0], [0, 0, 0], [0, 0, 0]])
  const cambioMar4d = (e, index, n) => {
    const valor = e.target.value;

    // Agregamos esta condición para verificar si el valor es un símbolo -
    if (valor === '-') {
      const newArray = mar4d.map((innerArray, i) => {
        if (i === index) {
          return innerArray.map((value, j) => {
            if (j === n) {
              return valor;
            }
            return value;
          });
        }
        return innerArray;
      });
      setmar4d(newArray);
      return;
    }

    const esNegativo = valor.startsWith('-');
    const valorAbsoluto = esNegativo ? valor.substring(1) : valor;
    const valorNumerico = Number(valorAbsoluto);
    const valorFinal = esNegativo ? -valorNumerico : valorNumerico;

    const newArray = mar4d.map((innerArray, i) => {
      if (i === index) {
        return innerArray.map((value, j) => {
          if (j === n) {
            return valorFinal;
          }
          return value;
        });
      }
      return innerArray;
    });
    setmar4d(newArray);
  };
  //PrOFUNDIDAD AL SONDAJE CUARTA TABLA DERECHA
  const [prof4d, setprof4d] = useState([[0, 0, 0], [0, 0, 0], [0, 0, 0], [0, 0, 0], [0, 0, 0], [0, 0, 0], [0, 0, 0], [0, 0, 0]])
  const cambioProf4d = (e, index, n) => {
    const newArray = prof4d.map((innerArray, i) => {
      if (i === index) {
        return innerArray.map((value, j) => {
          if (j === n) {
            return Number(e.target.value);
          }
          return value;
        });
      }
      return innerArray;
    });
    setprof4d(newArray);
  };
  // DIFERENCIA ENTRE PROFUNDIDAD Y MARGEN CUARTA TABLA DERECHA
  const [diff4d, setdiff4d] = useState([[0, 0, 0], [0, 0, 0], [0, 0, 0], [0, 0, 0], [0, 0, 0], [0, 0, 0], [0, 0, 0], [0, 0, 0]])

  useEffect(() => {
    const newDiffArray = prof4d.map((innerArray, i) => {
      return innerArray.map((value, j) => {
        return value - mar4d[i][j];
      });
    });
    setdiff4d(newDiffArray);
  }, [prof4d, mar4d]);

  //PLACA CUARTA TABLA DERECHA
  const [placa4d, setplaca4d] = useState([[false, false, false], [false, false, false], [false, false, false], [false, false, false], [false, false, false], [false, false, false], [false, false, false], [false, false, false]])
  const cambioPlaca4d = (index, n) => {
    const newplaca4d = [...placa4d]
    newplaca4d[index][n] = !newplaca4d[index][n]
    setplaca4d(newplaca4d)
  }
  //SANGRADO AL SONDAJE CUARTA TABLA DERECHA----------------------------------------------------
  const [san4d, setsan4d] = useState([[false, false, false], [false, false, false], [false, false, false], [false, false, false], [false, false, false], [false, false, false], [false, false, false], [false, false, false]])
  const cambioSan4d = (index, n) => {
    const newsan4d = [...san4d]
    newsan4d[index][n] = !newsan4d[index][n]
    setsan4d(newsan4d);

  }
  //FURCA 4 DERECHA-------------------------------------------------------------------------------------------
  const [furca4d, setfurca4d] = useState([0, 0, 0, 0, 0, 0, 0, 0])
  const cambiofurca4d = (index) => {
    const newFurca = [...furca4d]
    let valor = newFurca[index] + 1
    if (valor === 4) valor = 0
    newFurca[index] = valor
    setfurca4d(newFurca);

  }

  //NUEVAS FUNCIONES--------------------------------------------------------------------------------------

  //CARIES RADICULAR 1i
  const [car1i, setcar1i] = useState([[false, false, false], [false, false, false], [false, false, false], [false, false, false], [false, false, false], [false, false, false], [false, false, false], [false, false, false]])
  const cambioCar1i = (index, n) => {
    const newcar1i = [...car1i]
    newcar1i[index][n] = !newcar1i[index][n]
    setcar1i(newcar1i);

  }

  //Restauracion mal ajustada 1i
  const [res1i, setres1i] = useState([[false, false, false], [false, false, false], [false, false, false], [false, false, false], [false, false, false], [false, false, false], [false, false, false], [false, false, false]])
  const cambioRes1i = (index, n) => {
    const newres1i = [...res1i]
    newres1i[index][n] = !newres1i[index][n]
    setres1i(newres1i);

  }
  //supuracion 1i
  const [sup1i, setsup1i] = useState([[false, false, false], [false, false, false], [false, false, false], [false, false, false], [false, false, false], [false, false, false], [false, false, false], [false, false, false]])
  const cambioSup1i = (index, n) => {
    const newsup1i = [...sup1i]
    newsup1i[index][n] = !newsup1i[index][n]
    setsup1i(newsup1i);

  }

  //CARIES 1D
  const [car1d, setcar1d] = useState([[false, false, false], [false, false, false], [false, false, false], [false, false, false], [false, false, false], [false, false, false], [false, false, false], [false, false, false]])
  const cambioCar1d = (index, n) => {
    const newcar1d = [...car1d]
    newcar1d[index][n] = !newcar1d[index][n]
    setcar1d(newcar1d);

  }

  //restauracion 1D
  const [res1d, setres1d] = useState([[false, false, false], [false, false, false], [false, false, false], [false, false, false], [false, false, false], [false, false, false], [false, false, false], [false, false, false]])
  const cambioRes1d = (index, n) => {
    const newres1d = [...res1d]
    newres1d[index][n] = !newres1d[index][n]
    setres1d(newres1d);

  }

  //supouracion 1D
  const [sup1d, setsup1d] = useState([[false, false, false], [false, false, false], [false, false, false], [false, false, false], [false, false, false], [false, false, false], [false, false, false], [false, false, false]])
  const cambioSup1d = (index, n) => {
    const newsup1d = [...sup1d]
    newsup1d[index][n] = !newsup1d[index][n]
    setsup1d(newsup1d);

  }

  //Caries 2i
  const [car2i, setcar2i] = useState([[false, false, false], [false, false, false], [false, false, false], [false, false, false], [false, false, false], [false, false, false], [false, false, false], [false, false, false]])
  const cambioCar2i = (index, n) => {
    const newcar2i = [...car2i]
    newcar2i[index][n] = !newcar2i[index][n]
    setcar2i(newcar2i);
  }

  //Restauración 2i
  const [res2i, setres2i] = useState([[false, false, false], [false, false, false], [false, false, false], [false, false, false], [false, false, false], [false, false, false], [false, false, false], [false, false, false]])
  const cambioRes2i = (index, n) => {
    const newres2i = [...res2i]
    newres2i[index][n] = !newres2i[index][n]
    setres2i(newres2i);
  }

  //Supouración 2i
  const [sup2i, setsup2i] = useState([[false, false, false], [false, false, false], [false, false, false], [false, false, false], [false, false, false], [false, false, false], [false, false, false], [false, false, false]])
  const cambioSup2i = (index, n) => {
    const newsup2i = [...sup2i]
    newsup2i[index][n] = !newsup2i[index][n]
    setsup2i(newsup2i);
  }

  //Caries 2d
  const [car2d, setcar2d] = useState([[false, false, false], [false, false, false], [false, false, false], [false, false, false], [false, false, false], [false, false, false], [false, false, false], [false, false, false]])
  const cambioCar2d = (index, n) => {
    const newcar2d = [...car2d]
    newcar2d[index][n] = !newcar2d[index][n]
    setcar2d(newcar2d);
  }

  //Restauración 2d
  const [res2d, setres2d] = useState([[false, false, false], [false, false, false], [false, false, false], [false, false, false], [false, false, false], [false, false, false], [false, false, false], [false, false, false]])
  const cambioRes2d = (index, n) => {
    const newres2d = [...res2d]
    newres2d[index][n] = !newres2d[index][n]
    setres2d(newres2d);
  }

  //Supouración 2d
  const [sup2d, setsup2d] = useState([[false, false, false], [false, false, false], [false, false, false], [false, false, false], [false, false, false], [false, false, false], [false, false, false], [false, false, false]])
  const cambioSup2d = (index, n) => {
    const newsup2d = [...sup2d]
    newsup2d[index][n] = !newsup2d[index][n]
    setsup2d(newsup2d);
  }

  //Caries 3i
  const [car3i, setcar3i] = useState([[false, false, false], [false, false, false], [false, false, false], [false, false, false], [false, false, false], [false, false, false], [false, false, false], [false, false, false]])
  const cambioCar3i = (index, n) => {
    const newcar3i = [...car3i]
    newcar3i[index][n] = !newcar3i[index][n]
    setcar3i(newcar3i);
  }

  //Restauración 3i
  const [res3i, setres3i] = useState([[false, false, false], [false, false, false], [false, false, false], [false, false, false], [false, false, false], [false, false, false], [false, false, false], [false, false, false]])
  const cambioRes3i = (index, n) => {
    const newres3i = [...res3i]
    newres3i[index][n] = !newres3i[index][n]
    setres3i(newres3i);
  }

  //Supouración 3i
  const [sup3i, setsup3i] = useState([[false, false, false], [false, false, false], [false, false, false], [false, false, false], [false, false, false], [false, false, false], [false, false, false], [false, false, false]])
  const cambioSup3i = (index, n) => {
    const newsup3i = [...sup3i]
    newsup3i[index][n] = !newsup3i[index][n]
    setsup3i(newsup3i);
  }

  //Caries 3d
  const [car3d, setcar3d] = useState([[false, false, false], [false, false, false], [false, false, false], [false, false, false], [false, false, false], [false, false, false], [false, false, false], [false, false, false]])
  const cambioCar3d = (index, n) => {
    const newcar3d = [...car3d]
    newcar3d[index][n] = !newcar3d[index][n]
    setcar3d(newcar3d);
  }

  //Restauración 3d
  const [res3d, setres3d] = useState([[false, false, false], [false, false, false], [false, false, false], [false, false, false], [false, false, false], [false, false, false], [false, false, false], [false, false, false]])
  const cambioRes3d = (index, n) => {
    const newres3d = [...res3d]
    newres3d[index][n] = !newres3d[index][n]
    setres3d(newres3d);
  }

  //Supouración 3d
  const [sup3d, setsup3d] = useState([[false, false, false], [false, false, false], [false, false, false], [false, false, false], [false, false, false], [false, false, false], [false, false, false], [false, false, false]])
  const cambioSup3d = (index, n) => {
    const newsup3d = [...sup3d]
    newsup3d[index][n] = !newsup3d[index][n]
    setsup3d(newsup3d);
  }

  //Caries 4i
  const [car4i, setcar4i] = useState([[false, false, false], [false, false, false], [false, false, false], [false, false, false], [false, false, false], [false, false, false], [false, false, false], [false, false, false]])
  const cambioCar4i = (index, n) => {
    const newcar4i = [...car4i]
    newcar4i[index][n] = !newcar4i[index][n]
    setcar4i(newcar4i);
  }

  //Restauración 4i
  const [res4i, setres4i] = useState([[false, false, false], [false, false, false], [false, false, false], [false, false, false], [false, false, false], [false, false, false], [false, false, false], [false, false, false]])
  const cambioRes4i = (index, n) => {
    const newres4i = [...res4i]
    newres4i[index][n] = !newres4i[index][n]
    setres4i(newres4i);
  }

  //Supouración 4i
  const [sup4i, setsup4i] = useState([[false, false, false], [false, false, false], [false, false, false], [false, false, false], [false, false, false], [false, false, false], [false, false, false], [false, false, false]])
  const cambioSup4i = (index, n) => {
    const newsup4i = [...sup4i]
    newsup4i[index][n] = !newsup4i[index][n]
    setsup4i(newsup4i);
  }

  //Caries 4d
  const [car4d, setcar4d] = useState([[false, false, false], [false, false, false], [false, false, false], [false, false, false], [false, false, false], [false, false, false], [false, false, false], [false, false, false]])
  const cambioCar4d = (index, n) => {
    const newcar4d = [...car4d]
    newcar4d[index][n] = !newcar4d[index][n]
    setcar4d(newcar4d);
  }

  //Restauración 4d
  const [res4d, setres4d] = useState([[false, false, false], [false, false, false], [false, false, false], [false, false, false], [false, false, false], [false, false, false], [false, false, false], [false, false, false]])
  const cambioRes4d = (index, n) => {
    const newres4d = [...res4d]
    newres4d[index][n] = !newres4d[index][n]
    setres4d(newres4d);
  }

  //Supouración 4d
  const [sup4d, setsup4d] = useState([[false, false, false], [false, false, false], [false, false, false], [false, false, false], [false, false, false], [false, false, false], [false, false, false], [false, false, false]])
  const cambioSup4d = (index, n) => {
    const newsup4d = [...sup4d]
    newsup4d[index][n] = !newsup4d[index][n]
    setsup4d(newsup4d);
  }

  //Imagenes--------------------------------------------------------------------------------------------


  const [contexto, setContexto] = useState(null);
  const [imagen, setImagen] = useState(null);

  useEffect(() => {
    const img = new Image();
    img.src = placeholder;
    img.onload = () => {
      setImagen(img);
    };
  }, [dibujo1i]);

  useEffect(() => {
    const canvas = document.getElementById('canvas');
    const ctx = canvas.getContext('2d');
    setContexto(ctx);
  }, []);

  useEffect(() => {
    if (contexto && imagen) {
      const canvasWidth = 2000;
      const canvasHeight = 300;
      const imagenWidth = imagen.width;
      const imagenHeight = imagen.height;
      const iniciox = 150;
      const inicioy = 111;

      contexto.clearRect(0, 0, canvasWidth, canvasHeight);
      const x = (canvasWidth - imagenWidth) / 2;
      const y = (canvasHeight - imagenHeight) / 2;

      contexto.drawImage(imagen, x, y); // Dibuja la imagen centrada
      contexto.beginPath();
      contexto.strokeStyle = 'red';
      contexto.lineWidth = 3;

      //dibujo acorde al tamano de cada diente
      const referencia1i = [[0, 20, 37], [50, 70, 90], [105, 125, 155], [170, 180, 195], [210, 220, 233], [250, 260, 273], [290, 305, 317], [335, 345, 365]]

      const referencia1d = [[403, 423, 434], [450, 465, 477], [490, 500, 520], [530, 545, 560], [573, 585, 599], [610, 640, 665], [680, 700, 716], [730, 750, 770]]

      const alturayFurca = -36 + y + inicioy - 50

      //FURCAS SUPERIORES
      for (let i = 0; i < furca1i.length; i++) {
        //FURCA1
        if (!implante1[i] && !dientes1i[i][1]) {
          if (furca1i[i] === 1) {
            contexto.stroke();
            contexto.closePath();

            contexto.beginPath();
            contexto.arc(x + iniciox + referencia1i[i][1], alturayFurca, 10, 0, 2 * Math.PI);
            contexto.fillStyle = 'white';
            contexto.fill();
            contexto.stroke();
            contexto.closePath();

            contexto.beginPath();
            contexto.strokeStyle = 'green';
            contexto.lineWidth = 3;
            contexto.arc(x + iniciox + referencia1i[i][1], alturayFurca, 10, 0, 2 * Math.PI)
            contexto.stroke();
            contexto.closePath();

          }
          if (furca1i[i] == 2) {

            contexto.stroke();
            contexto.closePath();
            contexto.strokeStyle = 'green';
            contexto.beginPath();
            contexto.arc(x + iniciox + referencia1i[i][1], alturayFurca, 10, 0, 2 * Math.PI);
            contexto.fillStyle = 'white';
            contexto.fill();
            contexto.stroke();
            contexto.closePath();
            contexto.beginPath();

            contexto.arc(x + iniciox + referencia1i[i][1], alturayFurca, 10, 0, 2 * Math.PI)
            contexto.stroke();
            contexto.closePath();
            contexto.beginPath();

            contexto.lineTo(x + iniciox + referencia1i[i][1], 3)
            contexto.lineTo(x + iniciox + referencia1i[i][1], 23)
            contexto.stroke();
            contexto.closePath();


          }
          if (furca1i[i] == 3) {

            contexto.stroke();
            contexto.closePath();
            contexto.strokeStyle = 'green';
            contexto.beginPath();
            contexto.arc(x + iniciox + referencia1i[i][1], alturayFurca, 10, 0, 2 * Math.PI);
            contexto.fillStyle = 'white';
            contexto.fill();
            contexto.stroke();
            contexto.closePath();
            contexto.beginPath();

            contexto.arc(x + iniciox + referencia1i[i][1], alturayFurca, 10, 0, 2 * Math.PI)
            contexto.stroke();
            contexto.closePath();
            contexto.stroke();
            contexto.closePath();
            contexto.strokeStyle = 'green';
            contexto.beginPath();

            contexto.arc(x + iniciox + referencia1i[i][1], alturayFurca, 10, 0, 2 * Math.PI)
            contexto.stroke();
            contexto.closePath();
            contexto.beginPath();

            contexto.lineTo(x + iniciox + referencia1i[i][1], 3)
            contexto.lineTo(x + iniciox + referencia1i[i][1], 23)
            contexto.stroke();
            contexto.closePath();
            contexto.beginPath();

            contexto.lineTo(x + iniciox + referencia1i[i][1] - 10, alturayFurca)
            contexto.lineTo(x + iniciox + referencia1i[i][1] + 10, alturayFurca)
            contexto.stroke();
            contexto.closePath();


          }
        }
        //FURCA2
        if (!implante2[i] && !dientes1d[i][1]) {
          if (furca1d[i] === 1) {
            contexto.stroke();
            contexto.closePath();

            contexto.beginPath();
            contexto.arc(x + iniciox + referencia1d[i][1], alturayFurca, 10, 0, 2 * Math.PI);
            contexto.fillStyle = 'white';
            contexto.fill();
            contexto.stroke();
            contexto.closePath();

            contexto.beginPath();
            contexto.strokeStyle = 'green';
            contexto.lineWidth = 3;
            contexto.arc(x + iniciox + referencia1d[i][1], alturayFurca, 10, 0, 2 * Math.PI)
            contexto.stroke();
            contexto.closePath();

          }
          if (furca1d[i] == 2) {

            contexto.stroke();
            contexto.closePath();
            contexto.strokeStyle = 'green';
            contexto.beginPath();
            contexto.arc(x + iniciox + referencia1d[i][1], alturayFurca, 10, 0, 2 * Math.PI);
            contexto.fillStyle = 'white';
            contexto.fill();
            contexto.stroke();
            contexto.closePath();
            contexto.beginPath();

            contexto.arc(x + iniciox + referencia1d[i][1], alturayFurca, 10, 0, 2 * Math.PI)
            contexto.stroke();
            contexto.closePath();
            contexto.beginPath();

            contexto.lineTo(x + iniciox + referencia1d[i][1], 3)
            contexto.lineTo(x + iniciox + referencia1d[i][1], 23)
            contexto.stroke();
            contexto.closePath();


          }
          if (furca1d[i] == 3) {

            contexto.stroke();
            contexto.closePath();
            contexto.strokeStyle = 'green';
            contexto.beginPath();
            contexto.arc(x + iniciox + referencia1d[i][1], alturayFurca, 10, 0, 2 * Math.PI);
            contexto.fillStyle = 'white';
            contexto.fill();
            contexto.stroke();
            contexto.closePath();
            contexto.beginPath();

            contexto.arc(x + iniciox + referencia1d[i][1], alturayFurca, 10, 0, 2 * Math.PI)
            contexto.stroke();
            contexto.closePath();
            contexto.stroke();
            contexto.closePath();
            contexto.strokeStyle = 'green';
            contexto.beginPath();

            contexto.arc(x + iniciox + referencia1d[i][1], alturayFurca, 10, 0, 2 * Math.PI)
            contexto.stroke();
            contexto.closePath();
            contexto.beginPath();

            contexto.lineTo(x + iniciox + referencia1d[i][1], 3)
            contexto.lineTo(x + iniciox + referencia1d[i][1], 23)
            contexto.stroke();
            contexto.closePath();
            contexto.beginPath();

            contexto.lineTo(x + iniciox + referencia1d[i][1] - 10, alturayFurca)
            contexto.lineTo(x + iniciox + referencia1d[i][1] + 10, alturayFurca)
            contexto.stroke();
            contexto.closePath();


          }
        }

      }
      //FURCAS INFERIORES
      for (let i = 0; i < furca2i.length; i++) {
        //FURCA2I
        if (!implante1[i] && !dientes1i[i][1]) {
          if (furca2i[i][0] == 1) {
            contexto.stroke();
            contexto.closePath();

            contexto.beginPath();
            contexto.arc(x + iniciox + referencia1i[i][1] - 15, alturayFurca + 260, 7, 0, 2 * Math.PI);
            contexto.fillStyle = 'white';
            contexto.fill();
            contexto.stroke();
            contexto.closePath();

            contexto.beginPath();
            contexto.strokeStyle = 'green';
            contexto.lineWidth = 3;
            contexto.arc(x + iniciox + referencia1i[i][1] - 15, alturayFurca + 260, 7, 0, 2 * Math.PI)
            contexto.stroke();
            contexto.closePath();

          }
          if (furca2i[i][1] == 1) {
            contexto.stroke();
            contexto.closePath();

            contexto.beginPath();
            contexto.arc(x + iniciox + referencia1i[i][1] + 7, alturayFurca + 260, 7, 0, 2 * Math.PI);
            contexto.fillStyle = 'white';
            contexto.fill();
            contexto.stroke();
            contexto.closePath();

            contexto.beginPath();
            contexto.strokeStyle = 'green';
            contexto.lineWidth = 3;
            contexto.arc(x + iniciox + referencia1i[i][1] + 7, alturayFurca + 260, 7, 0, 2 * Math.PI)
            contexto.stroke();
            contexto.closePath();

          }

          if (furca2i[i][0] == 2) {
            contexto.stroke();
            contexto.closePath();
            contexto.strokeStyle = 'green';
            contexto.beginPath();
            contexto.arc(x + iniciox + referencia1i[i][1] - 15, alturayFurca + 260, 7, 0, 2 * Math.PI);
            contexto.fillStyle = 'white';
            contexto.fill();
            contexto.stroke();
            contexto.closePath();
            contexto.beginPath();

            contexto.arc(x + iniciox + referencia1i[i][1] - 15, alturayFurca + 260, 7, 0, 2 * Math.PI)
            contexto.stroke();
            contexto.closePath();
            contexto.beginPath();

            contexto.lineTo(x + iniciox + referencia1i[i][1] - 15, 3 + 260)
            contexto.lineTo(x + iniciox + referencia1i[i][1] - 15, 20 + 260)
            contexto.stroke();
            contexto.closePath();

          }
          if (furca2i[i][1] == 2) {
            contexto.stroke();
            contexto.closePath();
            contexto.strokeStyle = 'green';
            contexto.beginPath();
            contexto.arc(x + iniciox + referencia1i[i][1] + 7, alturayFurca + 260, 7, 0, 2 * Math.PI);
            contexto.fillStyle = 'white';
            contexto.fill();
            contexto.stroke();
            contexto.closePath();
            contexto.beginPath();

            contexto.arc(x + iniciox + referencia1i[i][1] + 7, alturayFurca + 260, 7, 0, 2 * Math.PI)
            contexto.stroke();
            contexto.closePath();
            contexto.beginPath();

            contexto.lineTo(x + iniciox + referencia1i[i][1] + 7, 3 + 260)
            contexto.lineTo(x + iniciox + referencia1i[i][1] + 7, 20 + 260)
            contexto.stroke();
            contexto.closePath();
          }
          if (furca2i[i][0] == 3) {

            contexto.stroke();
            contexto.closePath();
            contexto.strokeStyle = 'green';
            contexto.beginPath();
            contexto.arc(x + iniciox + referencia1i[i][1] - 15, alturayFurca + 260, 7, 0, 2 * Math.PI);
            contexto.fillStyle = 'white';
            contexto.fill();
            contexto.stroke();
            contexto.closePath();
            contexto.beginPath();

            contexto.arc(x + iniciox + referencia1i[i][1] - 15, alturayFurca + 260, 7, 0, 2 * Math.PI)
            contexto.stroke();
            contexto.closePath();
            contexto.stroke();
            contexto.closePath();
            contexto.strokeStyle = 'green';
            contexto.beginPath();

            contexto.arc(x + iniciox + referencia1i[i][1] - 15, alturayFurca + 260, 7, 0, 2 * Math.PI)
            contexto.stroke();
            contexto.closePath();
            contexto.beginPath();

            contexto.lineTo(x + iniciox + referencia1i[i][1] - 15, 3 + 260)
            contexto.lineTo(x + iniciox + referencia1i[i][1] - 15, 20 + 260)
            contexto.stroke();
            contexto.closePath();
            contexto.beginPath();

            contexto.lineTo(x + iniciox + referencia1i[i][1] - 10 - 12, alturayFurca + 260)
            contexto.lineTo(x + iniciox + referencia1i[i][1] + 10 - 17, alturayFurca + 260)
            contexto.stroke();
            contexto.closePath();


          }
          if (furca2i[i][1] == 3) {

            contexto.stroke();
            contexto.closePath();
            contexto.strokeStyle = 'green';
            contexto.beginPath();
            contexto.arc(x + iniciox + referencia1i[i][1] + 7, alturayFurca + 260, 7, 0, 2 * Math.PI);
            contexto.fillStyle = 'white';
            contexto.fill();
            contexto.stroke();
            contexto.closePath();
            contexto.beginPath();

            contexto.arc(x + iniciox + referencia1i[i][1] + 7, alturayFurca + 260, 7, 0, 2 * Math.PI)
            contexto.stroke();
            contexto.closePath();
            contexto.stroke();
            contexto.closePath();
            contexto.strokeStyle = 'green';
            contexto.beginPath();

            contexto.arc(x + iniciox + referencia1i[i][1] + 7, alturayFurca + 260, 7, 0, 2 * Math.PI)
            contexto.stroke();
            contexto.closePath();
            contexto.beginPath();

            contexto.lineTo(x + iniciox + referencia1i[i][1] + 7, 3 + 260)
            contexto.lineTo(x + iniciox + referencia1i[i][1] + 7, 20 + 260)
            contexto.stroke();
            contexto.closePath();
            contexto.beginPath();

            contexto.lineTo(x + iniciox + referencia1i[i][1], alturayFurca + 260)
            contexto.lineTo(x + iniciox + referencia1i[i][1] + 10 + 7, alturayFurca + 260)
            contexto.stroke();
            contexto.closePath();


          }

          //FURCA2D----------------------------------------------------------------
          if (!implante2[i] && !dientes1d[i][1]) {

            if (furca2d[i][0] == 1) {
              contexto.stroke();
              contexto.closePath();

              contexto.beginPath();
              contexto.arc(x + iniciox + referencia1d[i][1] - 15, alturayFurca + 260, 7, 0, 2 * Math.PI);
              contexto.fillStyle = 'white';
              contexto.fill();
              contexto.stroke();
              contexto.closePath();

              contexto.beginPath();
              contexto.strokeStyle = 'green';
              contexto.lineWidth = 3;
              contexto.arc(x + iniciox + referencia1d[i][1] - 15, alturayFurca + 260, 7, 0, 2 * Math.PI)
              contexto.stroke();
              contexto.closePath();

            }
            if (furca2d[i][1] == 1) {
              contexto.stroke();
              contexto.closePath();

              contexto.beginPath();
              contexto.arc(x + iniciox + referencia1d[i][1] + 7, alturayFurca + 260, 7, 0, 2 * Math.PI);
              contexto.fillStyle = 'white';
              contexto.fill();
              contexto.stroke();
              contexto.closePath();

              contexto.beginPath();
              contexto.strokeStyle = 'green';
              contexto.lineWidth = 3;
              contexto.arc(x + iniciox + referencia1d[i][1] + 7, alturayFurca + 260, 7, 0, 2 * Math.PI)
              contexto.stroke();
              contexto.closePath();

            }

            if (furca2d[i][0] == 2) {
              contexto.stroke();
              contexto.closePath();
              contexto.strokeStyle = 'green';
              contexto.beginPath();
              contexto.arc(x + iniciox + referencia1d[i][1] - 15, alturayFurca + 260, 7, 0, 2 * Math.PI);
              contexto.fillStyle = 'white';
              contexto.fill();
              contexto.stroke();
              contexto.closePath();
              contexto.beginPath();

              contexto.arc(x + iniciox + referencia1d[i][1] - 15, alturayFurca + 260, 7, 0, 2 * Math.PI)
              contexto.stroke();
              contexto.closePath();
              contexto.beginPath();

              contexto.lineTo(x + iniciox + referencia1d[i][1] - 15, 3 + 260)
              contexto.lineTo(x + iniciox + referencia1d[i][1] - 15, 20 + 260)
              contexto.stroke();
              contexto.closePath();

            }
            if (furca2d[i][1] == 2) {
              contexto.stroke();
              contexto.closePath();
              contexto.strokeStyle = 'green';
              contexto.beginPath();
              contexto.arc(x + iniciox + referencia1d[i][1] + 7, alturayFurca + 260, 7, 0, 2 * Math.PI);
              contexto.fillStyle = 'white';
              contexto.fill();
              contexto.stroke();
              contexto.closePath();
              contexto.beginPath();

              contexto.arc(x + iniciox + referencia1d[i][1] + 7, alturayFurca + 260, 7, 0, 2 * Math.PI)
              contexto.stroke();
              contexto.closePath();
              contexto.beginPath();

              contexto.lineTo(x + iniciox + referencia1d[i][1] + 7, 3 + 260)
              contexto.lineTo(x + iniciox + referencia1d[i][1] + 7, 20 + 260)
              contexto.stroke();
              contexto.closePath();
            }
            if (furca2d[i][0] == 3) {

              contexto.stroke();
              contexto.closePath();
              contexto.strokeStyle = 'green';
              contexto.beginPath();
              contexto.arc(x + iniciox + referencia1d[i][1] - 15, alturayFurca + 260, 7, 0, 2 * Math.PI);
              contexto.fillStyle = 'white';
              contexto.fill();
              contexto.stroke();
              contexto.closePath();
              contexto.beginPath();

              contexto.arc(x + iniciox + referencia1d[i][1] - 15, alturayFurca + 260, 7, 0, 2 * Math.PI)
              contexto.stroke();
              contexto.closePath();
              contexto.stroke();
              contexto.closePath();
              contexto.strokeStyle = 'green';
              contexto.beginPath();

              contexto.arc(x + iniciox + referencia1d[i][1] - 15, alturayFurca + 260, 7, 0, 2 * Math.PI)
              contexto.stroke();
              contexto.closePath();
              contexto.beginPath();

              contexto.lineTo(x + iniciox + referencia1d[i][1] - 15, 3 + 260)
              contexto.lineTo(x + iniciox + referencia1d[i][1] - 15, 20 + 260)
              contexto.stroke();
              contexto.closePath();
              contexto.beginPath();

              contexto.lineTo(x + iniciox + referencia1d[i][1] - 10 - 12, alturayFurca + 260)
              contexto.lineTo(x + iniciox + referencia1d[i][1] + 10 - 17, alturayFurca + 260)
              contexto.stroke();
              contexto.closePath();


            }
            if (furca2d[i][1] == 3) {

              contexto.stroke();
              contexto.closePath();
              contexto.strokeStyle = 'green';
              contexto.beginPath();
              contexto.arc(x + iniciox + referencia1d[i][1] + 7, alturayFurca + 260, 7, 0, 2 * Math.PI);
              contexto.fillStyle = 'white';
              contexto.fill();
              contexto.stroke();
              contexto.closePath();
              contexto.beginPath();

              contexto.arc(x + iniciox + referencia1d[i][1] + 7, alturayFurca + 260, 7, 0, 2 * Math.PI)
              contexto.stroke();
              contexto.closePath();
              contexto.stroke();
              contexto.closePath();
              contexto.strokeStyle = 'green';
              contexto.beginPath();

              contexto.arc(x + iniciox + referencia1d[i][1] + 7, alturayFurca + 260, 7, 0, 2 * Math.PI)
              contexto.stroke();
              contexto.closePath();
              contexto.beginPath();

              contexto.lineTo(x + iniciox + referencia1d[i][1] + 7, 3 + 260)
              contexto.lineTo(x + iniciox + referencia1d[i][1] + 7, 20 + 260)
              contexto.stroke();
              contexto.closePath();
              contexto.beginPath();

              contexto.lineTo(x + iniciox + referencia1d[i][1], alturayFurca + 260)
              contexto.lineTo(x + iniciox + referencia1d[i][1] + 10 + 7, alturayFurca + 260)
              contexto.stroke();
              contexto.closePath();


            }
          }

        }
      }

      //ELIMINAR DIENTES arriba
      for (let i = 0; i < dientes1i.length; i++) {
        if (dientes1i[i][1]) {
          contexto.stroke();
          contexto.closePath();
          contexto.beginPath();
          contexto.strokeStyle = 'black';
          contexto.lineWidth = 3;

          contexto.lineTo(x + iniciox + referencia1i[i][1] - 10, 7 * 6 + y + inicioy)
          contexto.lineTo(x + iniciox + referencia1i[i][1] + 10, -16 * 6 + y + inicioy)

          contexto.stroke();
          contexto.closePath();

          contexto.stroke();
          contexto.closePath();
          contexto.beginPath();
          contexto.strokeStyle = 'black';
          contexto.lineWidth = 3;

          contexto.lineTo(x + iniciox + referencia1i[i][1] - 10, 7 * 6 + y + inicioy + 170)
          contexto.lineTo(x + iniciox + referencia1i[i][1] + 10, -16 * 6 + y + inicioy + 170)

          contexto.stroke();
          contexto.closePath();

        }
        if (dientes1d[i][1]) {
          contexto.stroke();
          contexto.closePath();
          contexto.beginPath();
          contexto.strokeStyle = 'black';
          contexto.lineWidth = 3;

          contexto.lineTo(x + iniciox + referencia1d[i][1] - 10, 7 * 6 + y + inicioy)
          contexto.lineTo(x + iniciox + referencia1d[i][1] + 10, -16 * 6 + y + inicioy)

          contexto.stroke();
          contexto.closePath();
          contexto.stroke();
          contexto.closePath();
          contexto.beginPath();
          contexto.strokeStyle = 'black';
          contexto.lineWidth = 3;

          contexto.lineTo(x + iniciox + referencia1d[i][1] - 10, 7 * 6 + y + inicioy + 170)
          contexto.lineTo(x + iniciox + referencia1d[i][1] + 10, -16 * 6 + y + inicioy + 170)

          contexto.stroke();
          contexto.closePath();

        }

      }
      //DIBUJA LA LINEA azul 1i
      contexto.beginPath();
      for (let i = 0; i < mar1i.length; i++) {
        if (!dientes1i[i][1]) {
          contexto.strokeStyle = 'blue';

          contexto.lineTo(x + iniciox + referencia1i[i][0], -diff1i[i][0] * 6 + y + inicioy)
          contexto.lineTo(x + iniciox + referencia1i[i][1], -diff1i[i][1] * 6 + y + inicioy)
          contexto.lineTo(x + iniciox + referencia1i[i][2], -diff1i[i][2] * 6 + y + inicioy)
        }
        else {
          contexto.stroke();
          contexto.closePath();
          contexto.beginPath();


        }


      }
      contexto.stroke();
      contexto.closePath();
      contexto.beginPath();

      //DIBUJA LINEA azul 1D
      contexto.beginPath();
      for (let i = 0; i < mar1i.length; i++) {
        if (!dientes1d[i][1]) {
          contexto.strokeStyle = 'blue';

          contexto.lineTo(x + iniciox + referencia1d[i][0], -diff1d[i][0] * 6 + y + inicioy)
          contexto.lineTo(x + iniciox + referencia1d[i][1], -diff1d[i][1] * 6 + y + inicioy)
          contexto.lineTo(x + iniciox + referencia1d[i][2], -diff1d[i][2] * 6 + y + inicioy)
        }
        else {
          contexto.stroke();
          contexto.closePath();
          contexto.beginPath();


        }


      }
      contexto.stroke();
      contexto.closePath();

      //DIBUJA LA LINEA azul 2i
      contexto.beginPath();
      for (let i = 0; i < mar1i.length; i++) {
        if (!dientes1i[i][1]) {
          contexto.strokeStyle = 'blue';

          contexto.lineTo(x + iniciox + referencia1i[i][0], diff2i[i][0] * 6 + y + inicioy + 110)
          contexto.lineTo(x + iniciox + referencia1i[i][1], diff2i[i][1] * 6 + y + inicioy + 110)
          contexto.lineTo(x + iniciox + referencia1i[i][2], diff2i[i][2] * 6 + y + inicioy + 110)
        }
        else {
          contexto.stroke();
          contexto.closePath();
          contexto.beginPath();


        }


      }
      contexto.stroke();
      contexto.closePath();
      //DIBUJA LINEA azul 2D
      contexto.beginPath();
      for (let i = 0; i < mar1i.length; i++) {
        if (!dientes1d[i][1]) {
          contexto.strokeStyle = 'blue';

          contexto.lineTo(x + iniciox + referencia1d[i][0], diff2d[i][0] * 6 + y + inicioy + 110)
          contexto.lineTo(x + iniciox + referencia1d[i][1], diff2d[i][1] * 6 + y + inicioy + 110)
          contexto.lineTo(x + iniciox + referencia1d[i][2], diff2d[i][2] * 6 + y + inicioy + 110)
        }
        else {
          contexto.stroke();
          contexto.closePath();
          contexto.beginPath();


        }


      }
      contexto.stroke();
      contexto.closePath();


      //dibuja linea ROJA 1i
      contexto.beginPath();
      for (let i = 0; i < mar1i.length; i++) {
        if (!dientes1i[i][1]) {
          contexto.strokeStyle = 'red';
          contexto.lineWidth = 3;
          contexto.lineTo(x + iniciox + referencia1i[i][0], mar1i[i][0] * 6 + y + inicioy)
          contexto.lineTo(x + iniciox + referencia1i[i][1], mar1i[i][1] * 6 + y + inicioy)
          contexto.lineTo(x + iniciox + referencia1i[i][2], mar1i[i][2] * 6 + y + inicioy)
        }
        else {
          contexto.stroke();
          contexto.closePath();
          contexto.beginPath();


        }


      }
      contexto.stroke();
      contexto.closePath();


      //dibuja linea ROJA 1d
      contexto.beginPath();
      for (let i = 0; i < mar1d.length; i++) {
        if (!dientes1d[i][1]) {
          contexto.strokeStyle = 'red';
          contexto.lineWidth = 3;
          contexto.lineTo(x + iniciox + referencia1d[i][0], mar1d[i][0] * 6 + y + inicioy)
          contexto.lineTo(x + iniciox + referencia1d[i][1], mar1d[i][1] * 6 + y + inicioy)
          contexto.lineTo(x + iniciox + referencia1d[i][2], mar1d[i][2] * 6 + y + inicioy)
        }
        else {
          contexto.stroke();
          contexto.closePath();
          contexto.beginPath();


        }


      }

      contexto.stroke();
      contexto.closePath();

      //dibuja linea ROJA 2i
      contexto.beginPath();

      for (let i = 0; i < mar1i.length; i++) {
        if (!dientes1i[i][1]) {
          contexto.strokeStyle = 'red';
          contexto.lineWidth = 3;
          contexto.lineTo(x + iniciox + referencia1i[i][0], -mar2i[i][0] * 6 + y + inicioy + 110)
          contexto.lineTo(x + iniciox + referencia1i[i][1], -mar2i[i][1] * 6 + y + inicioy + 110)
          contexto.lineTo(x + iniciox + referencia1i[i][2], -mar2i[i][2] * 6 + y + inicioy + 110)
        }
        else {
          contexto.stroke();
          contexto.closePath();
          contexto.beginPath();


        }


      }
      contexto.stroke();
      contexto.closePath();

      //dibuja linea ROJA 2d
      contexto.beginPath();
      for (let i = 0; i < mar1i.length; i++) {
        if (!dientes1d[i][1]) {
          contexto.strokeStyle = 'red';
          contexto.lineWidth = 3;
          contexto.lineTo(x + iniciox + referencia1d[i][0], -mar2d[i][0] * 6 + y + inicioy + 110)
          contexto.lineTo(x + iniciox + referencia1d[i][1], -mar2d[i][1] * 6 + y + inicioy + 110)
          contexto.lineTo(x + iniciox + referencia1d[i][2], -mar2d[i][2] * 6 + y + inicioy + 110)
        }
        else {
          contexto.stroke();
          contexto.closePath();
          contexto.beginPath();


        }


      }
      contexto.stroke();
      contexto.closePath();


      // Pinta el área entre las dos líneas 1I
      contexto.beginPath();
      contexto.moveTo(x + iniciox + referencia1i[0][0], -diff1i[0][0] * 6 + y + inicioy);
      for (let i = 0; i < mar1i.length; i++) {
        if (!dientes1i[i][1]) {
          contexto.lineTo(x + iniciox + referencia1i[i][0], -diff1i[i][0] * 6 + y + inicioy);
          contexto.lineTo(x + iniciox + referencia1i[i][1], -diff1i[i][1] * 6 + y + inicioy);
          contexto.lineTo(x + iniciox + referencia1i[i][2], -diff1i[i][2] * 6 + y + inicioy);
        }
        else {
          contexto.lineTo(x + iniciox + referencia1i[i][0], y + inicioy);
          contexto.lineTo(x + iniciox + referencia1i[i][1], y + inicioy);
          contexto.lineTo(x + iniciox + referencia1i[i][2], y + inicioy);

        }
      }
      for (let i = mar1i.length - 1; i >= 0; i--) {
        if (!dientes1i[i][1]) {
          contexto.lineTo(x + iniciox + referencia1i[i][2], mar1i[i][2] * 6 + y + inicioy);
          contexto.lineTo(x + iniciox + referencia1i[i][1], mar1i[i][1] * 6 + y + inicioy);
          contexto.lineTo(x + iniciox + referencia1i[i][0], mar1i[i][0] * 6 + y + inicioy);
        }
        else {
          contexto.lineTo(x + iniciox + referencia1i[i][2], y + inicioy);
          contexto.lineTo(x + iniciox + referencia1i[i][1], y + inicioy);
          contexto.lineTo(x + iniciox + referencia1i[i][0], y + inicioy);

        }
      }
      contexto.closePath();
      contexto.fillStyle = 'rgba(51, 240, 255, 0.5)'; // Color de relleno
      contexto.fill();

      // Pinta el área entre las dos líneas 2I
      contexto.beginPath();
      contexto.moveTo(x + iniciox + referencia1i[0][0], diff1i[0][0] * 6 + y + inicioy + 110);
      for (let i = 0; i < mar1i.length; i++) {
        if (!dientes1i[i][1]) {
          contexto.lineTo(x + iniciox + referencia1i[i][0], diff2i[i][0] * 6 + y + inicioy + 110);
          contexto.lineTo(x + iniciox + referencia1i[i][1], diff2i[i][1] * 6 + y + inicioy + 110);
          contexto.lineTo(x + iniciox + referencia1i[i][2], diff2i[i][2] * 6 + y + inicioy + 110);
        }
        else {
          contexto.lineTo(x + iniciox + referencia1i[i][0], y + inicioy + 110);
          contexto.lineTo(x + iniciox + referencia1i[i][1], y + inicioy + 110);
          contexto.lineTo(x + iniciox + referencia1i[i][2], y + inicioy + 110);

        }
      }
      for (let i = mar1i.length - 1; i >= 0; i--) {
        if (!dientes1i[i][1]) {
          contexto.lineTo(x + iniciox + referencia1i[i][2], -mar2i[i][2] * 6 + y + inicioy + 110);
          contexto.lineTo(x + iniciox + referencia1i[i][1], -mar2i[i][1] * 6 + y + inicioy + 110);
          contexto.lineTo(x + iniciox + referencia1i[i][0], -mar2i[i][0] * 6 + y + inicioy + 110);
        }
        else {
          contexto.lineTo(x + iniciox + referencia1i[i][2], y + inicioy + 110);
          contexto.lineTo(x + iniciox + referencia1i[i][1], y + inicioy + 110);
          contexto.lineTo(x + iniciox + referencia1i[i][0], y + inicioy + 110);

        }
      }
      contexto.closePath();
      contexto.fillStyle = 'rgba(51, 240, 255, 0.5)'; // Color de relleno
      contexto.fill();

      // Pinta el área entre las dos líneas 1d
      contexto.beginPath();
      contexto.moveTo(x + iniciox + referencia1d[0][0], -diff1d[0][0] * 6 + y + inicioy);
      for (let i = 0; i < mar1i.length; i++) {
        if (!dientes1d[i][1]) {
          contexto.lineTo(x + iniciox + referencia1d[i][0], -diff1d[i][0] * 6 + y + inicioy);
          contexto.lineTo(x + iniciox + referencia1d[i][1], -diff1d[i][1] * 6 + y + inicioy);
          contexto.lineTo(x + iniciox + referencia1d[i][2], -diff1d[i][2] * 6 + y + inicioy);
        }
        else {
          contexto.lineTo(x + iniciox + referencia1d[i][0], -diff1d[i][0] * 0 + y + inicioy);
          contexto.lineTo(x + iniciox + referencia1d[i][1], -diff1d[i][1] * 0 + y + inicioy);
          contexto.lineTo(x + iniciox + referencia1d[i][2], -diff1d[i][2] * 0 + y + inicioy);
        }
      }
      for (let i = mar1i.length - 1; i >= 0; i--) {
        if (!dientes1d[i][1]) {
          contexto.lineTo(x + iniciox + referencia1d[i][2], mar1d[i][2] * 6 + y + inicioy);
          contexto.lineTo(x + iniciox + referencia1d[i][1], mar1d[i][1] * 6 + y + inicioy);
          contexto.lineTo(x + iniciox + referencia1d[i][0], mar1d[i][0] * 6 + y + inicioy);
        }
        else {
          contexto.lineTo(x + iniciox + referencia1d[i][2], mar1d[i][2] * 0 + y + inicioy);
          contexto.lineTo(x + iniciox + referencia1d[i][1], mar1d[i][1] * 0 + y + inicioy);
          contexto.lineTo(x + iniciox + referencia1d[i][0], mar1d[i][0] * 0 + y + inicioy);
        }
      }
      contexto.closePath();
      contexto.fillStyle = 'rgba(51, 240, 255, 0.5)'; // Color de relleno
      contexto.fill();

      // Pinta el área entre las dos líneas 2d
      contexto.beginPath();
      contexto.moveTo(x + iniciox + referencia1d[0][0], diff2d[0][0] * 6 + y + inicioy + 110);
      for (let i = 0; i < mar1i.length; i++) {
        if (!dientes1d[i][1]) {
          contexto.lineTo(x + iniciox + referencia1d[i][0], diff2d[i][0] * 6 + y + inicioy + 110);
          contexto.lineTo(x + iniciox + referencia1d[i][1], diff2d[i][1] * 6 + y + inicioy + 110);
          contexto.lineTo(x + iniciox + referencia1d[i][2], diff2d[i][2] * 6 + y + inicioy + 110);
        }
        else {
          contexto.lineTo(x + iniciox + referencia1d[i][0], y + inicioy + 110);
          contexto.lineTo(x + iniciox + referencia1d[i][1], y + inicioy + 110);
          contexto.lineTo(x + iniciox + referencia1d[i][2], y + inicioy + 110);

        }
      }
      for (let i = mar1i.length - 1; i >= 0; i--) {
        if (!dientes1d[i][1]) {
          contexto.lineTo(x + iniciox + referencia1d[i][2], -mar2d[i][2] * 6 + y + inicioy + 110);
          contexto.lineTo(x + iniciox + referencia1d[i][1], -mar2d[i][1] * 6 + y + inicioy + 110);
          contexto.lineTo(x + iniciox + referencia1d[i][0], -mar2d[i][0] * 6 + y + inicioy + 110);
        }
        else {
          contexto.lineTo(x + iniciox + referencia1d[i][2], y + inicioy + 110);
          contexto.lineTo(x + iniciox + referencia1d[i][1], y + inicioy + 110);
          contexto.lineTo(x + iniciox + referencia1d[i][0], y + inicioy + 110);

        }
      }
      contexto.closePath();
      contexto.fillStyle = 'rgba(51, 240, 255, 0.5)'; // Color de relleno
      contexto.fill();




    }
  }, [contexto, imagen, mar1i, dientes1i, furca1i, implante1, prof1i, diff1i,
    dientes1d, furca1d, implante2, mar1d, prof1d, diff1d, mar2i, prof2i, diff2i, diff2d, mar2d, furca2i, furca2d]);
  //IMAGEN TABLA 3 Y 4

  const [contexto2, setContexto2] = useState(null);
  const [imagen2, setImagen2] = useState(null);

  useEffect(() => {
    const img2 = new Image();
    img2.src = placeholder2;
    img2.onload = () => {
      setImagen2(img2);
      const canvas2 = document.getElementById('canvas2');
      const ctx2 = canvas2.getContext('2d');
      setContexto2(ctx2);
    };
  }, [dibujo1i]);

  useEffect(() => {
    if (contexto2 && imagen2) {
      const canvasWidth2 = 2000;
      const canvasHeight2 = 300;
      const imagenWidth2 = imagen2.width;
      const imagenHeight2 = imagen2.height;
      const iniciox2 = 157;
      const inicioy2 = 106;

      contexto2.clearRect(0, 0, canvasWidth2, canvasHeight2);
      const x2 = (canvasWidth2 - imagenWidth2) / 2;
      const y2 = (canvasHeight2 - imagenHeight2) / 2;

      contexto2.drawImage(imagen2, x2, y2); // Dibuja la imagen centrada
      contexto2.beginPath();
      contexto2.strokeStyle = 'red';
      contexto2.lineWidth = 3

      //dibujo acorde al tamano de cada diente tabla 2
      const referencia3i = [[0, 25, 47], [63, 90, 110], [130, 150, 170], [193, 205, 215], [233, 245, 255], [273, 282, 293], [310, 320, 330], [345, 355, 364]]

      const referencia3d = [[401, 410, 420], [432, 445, 455], [470, 480, 490], [505, 515, 530], [547, 557, 573], [587, 615, 635], [650, 675, 697], [713, 740, 765]]

      const alturayFurca2 = -36 + y2 + inicioy2 - 45
      const inicioy3 = inicioy2 + 5



      //ELIMINAR DIENTES abajo 
      for (let i = 0; i < dientes1i.length; i++) {
        if (dientes2i[i][1]) {
          contexto2.stroke();
          contexto2.closePath();
          contexto2.beginPath();
          contexto2.strokeStyle = 'black';
          contexto2.lineWidth = 3;

          contexto2.lineTo(x2 + iniciox2 + referencia3i[i][1] - 10, 7 * 6 + y2 + inicioy2)
          contexto2.lineTo(x2 + iniciox2 + referencia3i[i][1] + 10, -16 * 6 + y2 + inicioy2)

          contexto2.stroke();
          contexto2.closePath();

          contexto2.stroke();
          contexto2.closePath();
          contexto2.beginPath();
          contexto2.strokeStyle = 'black';
          contexto2.lineWidth = 3;

          contexto2.lineTo(x2 + iniciox2 + referencia3i[i][1] - 10, 7 * 6 + y2 + inicioy2 + 170)
          contexto2.lineTo(x2 + iniciox2 + referencia3i[i][1] + 10, -16 * 6 + y2 + inicioy2 + 170)

          contexto2.stroke();
          contexto2.closePath();

        }
        if (dientes2d[i][1]) {
          contexto2.stroke();
          contexto2.closePath();
          contexto2.beginPath();
          contexto2.strokeStyle = 'black';
          contexto2.lineWidth = 3;

          contexto2.lineTo(x2 + iniciox2 + referencia3d[i][1] - 10, 7 * 6 + y2 + inicioy2)
          contexto2.lineTo(x2 + iniciox2 + referencia3d[i][1] + 10, -16 * 6 + y2 + inicioy2)

          contexto2.stroke();
          contexto2.closePath();
          contexto2.stroke();
          contexto2.closePath();
          contexto2.beginPath();
          contexto2.strokeStyle = 'black';
          contexto2.lineWidth = 3;

          contexto2.lineTo(x2 + iniciox2 + referencia3d[i][1] - 10, 7 * 6 + y2 + inicioy2 + 170)
          contexto2.lineTo(x2 + iniciox2 + referencia3d[i][1] + 10, -16 * 6 + y2 + inicioy2 + 170)

          contexto2.stroke();
          contexto2.closePath();

        }

      }



      //FURCAS SUPERIORES tabla3
      for (let i = 0; i < furca1i.length; i++) {
        //FURCA 3 
        if (!implante3[i] && !dientes2i[i][1]) {
          if (furca3i[i] === 1) {
            contexto2.stroke();
            contexto2.closePath();

            contexto2.beginPath();
            contexto2.arc(x2 + iniciox2 + referencia3i[i][1], alturayFurca2, 10, 0, 2 * Math.PI);
            contexto2.fillStyle = 'white';
            contexto2.fill();
            contexto2.stroke();
            contexto2.closePath();

            contexto2.beginPath();
            contexto2.strokeStyle = 'green';
            contexto2.lineWidth = 3;
            contexto2.arc(x2 + iniciox2 + referencia3i[i][1], alturayFurca2, 10, 0, 2 * Math.PI)
            contexto2.stroke();
            contexto2.closePath();

          }
          if (furca3i[i] == 2) {

            contexto2.stroke();
            contexto2.closePath();
            contexto2.strokeStyle = 'green';
            contexto2.beginPath();
            contexto2.arc(x2 + iniciox2 + referencia3i[i][1], alturayFurca2, 10, 0, 2 * Math.PI);
            contexto2.fillStyle = 'white';
            contexto2.fill();
            contexto2.stroke();
            contexto2.closePath();
            contexto2.beginPath();

            contexto2.arc(x2 + iniciox2 + referencia3i[i][1], alturayFurca2, 10, 0, 2 * Math.PI)
            contexto2.stroke();
            contexto2.closePath();
            contexto2.beginPath();

            contexto2.lineTo(x2 + iniciox2 + referencia3i[i][1], 3)
            contexto2.lineTo(x2 + iniciox2 + referencia3i[i][1], 23)
            contexto2.stroke();
            contexto2.closePath();


          }
          if (furca3i[i] == 3) {

            contexto2.stroke();
            contexto2.closePath();
            contexto2.strokeStyle = 'green';
            contexto2.beginPath();
            contexto2.arc(x2 + iniciox2 + referencia3i[i][1], alturayFurca2, 10, 0, 2 * Math.PI);
            contexto2.fillStyle = 'white';
            contexto2.fill();
            contexto2.stroke();
            contexto2.closePath();
            contexto2.beginPath();

            contexto2.arc(x2 + iniciox2 + referencia3i[i][1], alturayFurca2, 10, 0, 2 * Math.PI)
            contexto2.stroke();
            contexto2.closePath();
            contexto2.stroke();
            contexto2.closePath();
            contexto2.strokeStyle = 'green';
            contexto2.beginPath();

            contexto2.arc(x2 + iniciox2 + referencia3i[i][1], alturayFurca2, 10, 0, 2 * Math.PI)
            contexto2.stroke();
            contexto2.closePath();
            contexto2.beginPath();

            contexto2.lineTo(x2 + iniciox2 + referencia3i[i][1], 3)
            contexto2.lineTo(x2 + iniciox2 + referencia3i[i][1], 23)
            contexto2.stroke();
            contexto2.closePath();
            contexto2.beginPath();

            contexto2.lineTo(x2 + iniciox2 + referencia3i[i][1] - 10, alturayFurca2)
            contexto2.lineTo(x2 + iniciox2 + referencia3i[i][1] + 10, alturayFurca2)
            contexto2.stroke();
            contexto2.closePath();


          }
        }

        //FURCA4
        if (!implante4[i] && !dientes2d[i][1]) {
          if (furca3d[i] === 1) {
            contexto2.stroke();
            contexto2.closePath();

            contexto2.beginPath();
            contexto2.arc(x2 + iniciox2 + referencia3d[i][1], alturayFurca2, 10, 0, 2 * Math.PI);
            contexto2.fillStyle = 'white';
            contexto2.fill();
            contexto2.stroke();
            contexto2.closePath();

            contexto2.beginPath();
            contexto2.strokeStyle = 'green';
            contexto2.lineWidth = 3;
            contexto2.arc(x2 + iniciox2 + referencia3d[i][1], alturayFurca2, 10, 0, 2 * Math.PI)
            contexto2.stroke();
            contexto2.closePath();

          }
          if (furca3d[i] == 2) {

            contexto2.stroke();
            contexto2.closePath();
            contexto2.strokeStyle = 'green';
            contexto2.beginPath();
            contexto2.arc(x2 + iniciox2 + referencia3d[i][1], alturayFurca2, 10, 0, 2 * Math.PI);
            contexto2.fillStyle = 'white';
            contexto2.fill();
            contexto2.stroke();
            contexto2.closePath();
            contexto2.beginPath();

            contexto2.arc(x2 + iniciox2 + referencia3d[i][1], alturayFurca2, 10, 0, 2 * Math.PI)
            contexto2.stroke();
            contexto2.closePath();
            contexto2.beginPath();

            contexto2.lineTo(x2 + iniciox2 + referencia3d[i][1], 3)
            contexto2.lineTo(x2 + iniciox2 + referencia3d[i][1], 23)
            contexto2.stroke();
            contexto2.closePath();


          }
          if (furca3d[i] == 3) {

            contexto2.stroke();
            contexto2.closePath();
            contexto2.strokeStyle = 'green';
            contexto2.beginPath();
            contexto2.arc(x2 + iniciox2 + referencia3d[i][1], alturayFurca2, 10, 0, 2 * Math.PI);
            contexto2.fillStyle = 'white';
            contexto2.fill();
            contexto2.stroke();
            contexto2.closePath();
            contexto2.beginPath();

            contexto2.arc(x2 + iniciox2 + referencia3d[i][1], alturayFurca2, 10, 0, 2 * Math.PI)
            contexto2.stroke();
            contexto2.closePath();
            contexto2.stroke();
            contexto2.closePath();
            contexto2.strokeStyle = 'green';
            contexto2.beginPath();

            contexto2.arc(x2 + iniciox2 + referencia3d[i][1], alturayFurca2, 10, 0, 2 * Math.PI)
            contexto2.stroke();
            contexto2.closePath();
            contexto2.beginPath();

            contexto2.lineTo(x2 + iniciox2 + referencia3d[i][1], 3)
            contexto2.lineTo(x2 + iniciox2 + referencia3d[i][1], 23)
            contexto2.stroke();
            contexto2.closePath();
            contexto2.beginPath();

            contexto2.lineTo(x2 + iniciox2 + referencia3d[i][1] - 10, alturayFurca2)
            contexto2.lineTo(x2 + iniciox2 + referencia3d[i][1] + 10, alturayFurca2)
            contexto2.stroke();
            contexto2.closePath();


          }
        }
      }

      //FURCAS TABLA 4
      for (let i = 0; i < furca1i.length; i++) {
        //FURCA 4i 
        if (!implante3[i] && !dientes2i[i][1]) {
          if (furca4i[i] === 1) {
            contexto2.stroke();
            contexto2.closePath();

            contexto2.beginPath();
            contexto2.arc(x2 + iniciox2 + referencia3i[i][1], alturayFurca2 + 270, 10, 0, 2 * Math.PI);
            contexto2.fillStyle = 'white';
            contexto2.fill();
            contexto2.stroke();
            contexto2.closePath();

            contexto2.beginPath();
            contexto2.strokeStyle = 'green';
            contexto2.lineWidth = 3;
            contexto2.arc(x2 + iniciox2 + referencia3i[i][1], alturayFurca2 + 270, 10, 0, 2 * Math.PI)
            contexto2.stroke();
            contexto2.closePath();

          }
          if (furca4i[i] == 2) {

            contexto2.stroke();
            contexto2.closePath();
            contexto2.strokeStyle = 'green';
            contexto2.beginPath();
            contexto2.arc(x2 + iniciox2 + referencia3i[i][1], alturayFurca2 + 270, 10, 0, 2 * Math.PI);
            contexto2.fillStyle = 'white';
            contexto2.fill();
            contexto2.stroke();
            contexto2.closePath();
            contexto2.beginPath();

            contexto2.arc(x2 + iniciox2 + referencia3i[i][1], alturayFurca2 + 270, 10, 0, 2 * Math.PI)
            contexto2.stroke();
            contexto2.closePath();
            contexto2.beginPath();

            contexto2.lineTo(x2 + iniciox2 + referencia3i[i][1], 270 + 3)
            contexto2.lineTo(x2 + iniciox2 + referencia3i[i][1], 23 + 270)
            contexto2.stroke();
            contexto2.closePath();


          }
          if (furca4i[i] == 3) {

            contexto2.stroke();
            contexto2.closePath();
            contexto2.strokeStyle = 'green';
            contexto2.beginPath();
            contexto2.arc(x2 + iniciox2 + referencia3i[i][1], alturayFurca2 + 270, 10, 0, 2 * Math.PI);
            contexto2.fillStyle = 'white';
            contexto2.fill();
            contexto2.stroke();
            contexto2.closePath();
            contexto2.beginPath();

            contexto2.arc(x2 + iniciox2 + referencia3i[i][1], alturayFurca2 + 270, 10, 0, 2 * Math.PI)
            contexto2.stroke();
            contexto2.closePath();
            contexto2.stroke();
            contexto2.closePath();
            contexto2.strokeStyle = 'green';
            contexto2.beginPath();

            contexto2.arc(x2 + iniciox2 + referencia3i[i][1], alturayFurca2 + 270, 10, 0, 2 * Math.PI)
            contexto2.stroke();
            contexto2.closePath();
            contexto2.beginPath();

            contexto2.lineTo(x2 + iniciox2 + referencia3i[i][1], 3 + 270)
            contexto2.lineTo(x2 + iniciox2 + referencia3i[i][1], 23 + 270)
            contexto2.stroke();
            contexto2.closePath();
            contexto2.beginPath();

            contexto2.lineTo(x2 + iniciox2 + referencia3i[i][1] - 10, alturayFurca2 + 270)
            contexto2.lineTo(x2 + iniciox2 + referencia3i[i][1] + 10, alturayFurca2 + 270)
            contexto2.stroke();
            contexto2.closePath();


          }
        }

        //FURCA 4d 
        if (!implante4[i] && !dientes2d[i][1]) {
          if (furca4d[i] === 1) {
            contexto2.stroke();
            contexto2.closePath();

            contexto2.beginPath();
            contexto2.arc(x2 + iniciox2 + referencia3d[i][1], alturayFurca2 + 270, 10, 0, 2 * Math.PI);
            contexto2.fillStyle = 'white';
            contexto2.fill();
            contexto2.stroke();
            contexto2.closePath();

            contexto2.beginPath();
            contexto2.strokeStyle = 'green';
            contexto2.lineWidth = 3;
            contexto2.arc(x2 + iniciox2 + referencia3d[i][1], alturayFurca2 + 270, 10, 0, 2 * Math.PI)
            contexto2.stroke();
            contexto2.closePath();

          }
          if (furca4d[i] == 2) {

            contexto2.stroke();
            contexto2.closePath();
            contexto2.strokeStyle = 'green';
            contexto2.beginPath();
            contexto2.arc(x2 + iniciox2 + referencia3d[i][1], alturayFurca2 + 270, 10, 0, 2 * Math.PI);
            contexto2.fillStyle = 'white';
            contexto2.fill();
            contexto2.stroke();
            contexto2.closePath();
            contexto2.beginPath();

            contexto2.arc(x2 + iniciox2 + referencia3d[i][1], alturayFurca2 + 270, 10, 0, 2 * Math.PI)
            contexto2.stroke();
            contexto2.closePath();
            contexto2.beginPath();

            contexto2.lineTo(x2 + iniciox2 + referencia3d[i][1], 270 + 3)
            contexto2.lineTo(x2 + iniciox2 + referencia3d[i][1], 23 + 270)
            contexto2.stroke();
            contexto2.closePath();


          }
          if (furca4d[i] == 3) {

            contexto2.stroke();
            contexto2.closePath();
            contexto2.strokeStyle = 'green';
            contexto2.beginPath();
            contexto2.arc(x2 + iniciox2 + referencia3d[i][1], alturayFurca2 + 270, 10, 0, 2 * Math.PI);
            contexto2.fillStyle = 'white';
            contexto2.fill();
            contexto2.stroke();
            contexto2.closePath();
            contexto2.beginPath();

            contexto2.arc(x2 + iniciox2 + referencia3d[i][1], alturayFurca2 + 270, 10, 0, 2 * Math.PI)
            contexto2.stroke();
            contexto2.closePath();
            contexto2.stroke();
            contexto2.closePath();
            contexto2.strokeStyle = 'green';
            contexto2.beginPath();

            contexto2.arc(x2 + iniciox2 + referencia3d[i][1], alturayFurca2 + 270, 10, 0, 2 * Math.PI)
            contexto2.stroke();
            contexto2.closePath();
            contexto2.beginPath();

            contexto2.lineTo(x2 + iniciox2 + referencia3d[i][1], 3 + 270)
            contexto2.lineTo(x2 + iniciox2 + referencia3d[i][1], 23 + 270)
            contexto2.stroke();
            contexto2.closePath();
            contexto2.beginPath();

            contexto2.lineTo(x2 + iniciox2 + referencia3d[i][1] - 10, alturayFurca2 + 270)
            contexto2.lineTo(x2 + iniciox2 + referencia3d[i][1] + 10, alturayFurca2 + 270)
            contexto2.stroke();
            contexto2.closePath();


          }
        }
      }


      //DIBUJA LA LINEA azul 3i
      contexto2.beginPath();
      for (let i = 0; i < mar1i.length; i++) {
        if (!dientes2i[i][1]) {
          contexto2.strokeStyle = 'blue';

          contexto2.lineTo(x2 + iniciox2 + referencia3i[i][0], -diff3i[i][0] * 6 + y2 + inicioy2)
          contexto2.lineTo(x2 + iniciox2 + referencia3i[i][1], -diff3i[i][1] * 6 + y2 + inicioy2)
          contexto2.lineTo(x2 + iniciox2 + referencia3i[i][2], -diff3i[i][2] * 6 + y2 + inicioy2)
        }
        else {
          contexto2.stroke();
          contexto2.closePath();
          contexto2.beginPath();


        }


      }
      contexto2.stroke();
      contexto2.closePath();
      contexto2.beginPath();

      //DIBUJA LINEA azul 3D
      contexto2.beginPath();
      for (let i = 0; i < mar1i.length; i++) {
        if (!dientes2d[i][1]) {
          contexto2.strokeStyle = 'blue';

          contexto2.lineTo(x2 + iniciox2 + referencia3d[i][0], -diff3d[i][0] * 6 + y2 + inicioy2)
          contexto2.lineTo(x2 + iniciox2 + referencia3d[i][1], -diff3d[i][1] * 6 + y2 + inicioy2)
          contexto2.lineTo(x2 + iniciox2 + referencia3d[i][2], -diff3d[i][2] * 6 + y2 + inicioy2)
        }
        else {
          contexto2.stroke();
          contexto2.closePath();
          contexto2.beginPath();


        }


      }
      contexto2.stroke();
      contexto2.closePath();


      //DIBUJA LA LINEA azul 4i
      contexto2.beginPath();
      for (let i = 0; i < mar1i.length; i++) {
        if (!dientes2i[i][1]) {
          contexto2.strokeStyle = 'blue';

          contexto2.lineTo(x2 + iniciox2 + referencia3i[i][0], diff4i[i][0] * 6 + y2 + inicioy3 + 110)
          contexto2.lineTo(x2 + iniciox2 + referencia3i[i][1], diff4i[i][1] * 6 + y2 + inicioy3 + 110)
          contexto2.lineTo(x2 + iniciox2 + referencia3i[i][2], diff4i[i][2] * 6 + y2 + inicioy3 + 110)
        }
        else {
          contexto2.stroke();
          contexto2.closePath();
          contexto2.beginPath();


        }


      }
      contexto2.stroke();
      contexto2.closePath();

      //DIBUJA LINEA azul 4D
      contexto2.beginPath();
      for (let i = 0; i < mar1i.length; i++) {
        if (!dientes2d[i][1]) {
          contexto2.strokeStyle = 'blue';

          contexto2.lineTo(x2 + iniciox2 + referencia3d[i][0], diff4d[i][0] * 6 + y2 + inicioy3 + 110)
          contexto2.lineTo(x2 + iniciox2 + referencia3d[i][1], diff4d[i][1] * 6 + y2 + inicioy3 + 110)
          contexto2.lineTo(x2 + iniciox2 + referencia3d[i][2], diff4d[i][2] * 6 + y2 + inicioy3 + 110)
        }
        else {
          contexto2.stroke();
          contexto2.closePath();
          contexto2.beginPath();


        }


      }
      contexto2.stroke();
      contexto2.closePath();



      //dibuja linea ROJA 3i
      contexto2.beginPath();
      for (let i = 0; i < mar1i.length; i++) {
        if (!dientes2i[i][1]) {
          contexto2.strokeStyle = 'red';
          contexto2.lineWidth = 3;
          contexto2.lineTo(x2 + iniciox2 + referencia3i[i][0], mar3i[i][0] * 6 + y2 + inicioy2)
          contexto2.lineTo(x2 + iniciox2 + referencia3i[i][1], mar3i[i][1] * 6 + y2 + inicioy2)
          contexto2.lineTo(x2 + iniciox2 + referencia3i[i][2], mar3i[i][2] * 6 + y2 + inicioy2)
        }
        else {
          contexto2.stroke();
          contexto2.closePath();
          contexto2.beginPath();


        }


      }
      contexto2.stroke();
      contexto2.closePath();

      //dibuja linea ROJA 3d
      contexto2.beginPath();
      for (let i = 0; i < mar1d.length; i++) {
        if (!dientes2d[i][1]) {
          contexto2.strokeStyle = 'red';
          contexto2.lineWidth = 3;
          contexto2.lineTo(x2 + iniciox2 + referencia3d[i][0], mar3d[i][0] * 6 + y2 + inicioy2)
          contexto2.lineTo(x2 + iniciox2 + referencia3d[i][1], mar3d[i][1] * 6 + y2 + inicioy2)
          contexto2.lineTo(x2 + iniciox2 + referencia3d[i][2], mar3d[i][2] * 6 + y2 + inicioy2)
        }
        else {
          contexto2.stroke();
          contexto2.closePath();
          contexto2.beginPath();


        }


      }

      contexto2.stroke();
      contexto2.closePath();


      //dibuja linea ROJA 4i
      contexto2.beginPath();

      for (let i = 0; i < mar1i.length; i++) {
        if (!dientes2i[i][1]) {
          contexto2.strokeStyle = 'red';
          contexto2.lineWidth = 3;
          contexto2.lineTo(x2 + iniciox2 + referencia3i[i][0], -mar4i[i][0] * 6 + y2 + inicioy3 + 110)
          contexto2.lineTo(x2 + iniciox2 + referencia3i[i][1], -mar4i[i][1] * 6 + y2 + inicioy3 + 110)
          contexto2.lineTo(x2 + iniciox2 + referencia3i[i][2], -mar4i[i][2] * 6 + y2 + inicioy3 + 110)
        }
        else {
          contexto2.stroke();
          contexto2.closePath();
          contexto2.beginPath();


        }


      }
      contexto2.stroke();
      contexto2.closePath();

      //dibuja linea ROJA 4d
      contexto2.beginPath();
      for (let i = 0; i < mar1i.length; i++) {
        if (!dientes2d[i][1]) {
          contexto2.strokeStyle = 'red';
          contexto2.lineWidth = 3;
          contexto2.lineTo(x2 + iniciox2 + referencia3d[i][0], -mar4d[i][0] * 6 + y2 + inicioy3 + 110)
          contexto2.lineTo(x2 + iniciox2 + referencia3d[i][1], -mar4d[i][1] * 6 + y2 + inicioy3 + 110)
          contexto2.lineTo(x2 + iniciox2 + referencia3d[i][2], -mar4d[i][2] * 6 + y2 + inicioy3 + 110)
        }
        else {
          contexto2.stroke();
          contexto2.closePath();
          contexto2.beginPath();


        }


      }
      contexto2.stroke();
      contexto2.closePath();






      // Pinta el área entre las dos líneas 3I
      contexto2.beginPath();
      contexto2.moveTo(x2 + iniciox2 + referencia3i[0][0], -diff3i[0][0] * 6 + y2 + inicioy2);
      for (let i = 0; i < mar1i.length; i++) {
        if (!dientes2i[i][1]) {
          contexto2.lineTo(x2 + iniciox2 + referencia3i[i][0], -diff3i[i][0] * 6 + y2 + inicioy2);
          contexto2.lineTo(x2 + iniciox2 + referencia3i[i][1], -diff3i[i][1] * 6 + y2 + inicioy2);
          contexto2.lineTo(x2 + iniciox2 + referencia3i[i][2], -diff3i[i][2] * 6 + y2 + inicioy2);
        }
        else {
          contexto2.lineTo(x2 + iniciox2 + referencia3i[i][0], y2 + inicioy2);
          contexto2.lineTo(x2 + iniciox2 + referencia3i[i][1], y2 + inicioy2);
          contexto2.lineTo(x2 + iniciox2 + referencia3i[i][2], y2 + inicioy2);

        }
      }
      for (let i = mar1i.length - 1; i >= 0; i--) {
        if (!dientes2i[i][1]) {
          contexto2.lineTo(x2 + iniciox2 + referencia3i[i][2], mar3i[i][2] * 6 + y2 + inicioy2);
          contexto2.lineTo(x2 + iniciox2 + referencia3i[i][1], mar3i[i][1] * 6 + y2 + inicioy2);
          contexto2.lineTo(x2 + iniciox2 + referencia3i[i][0], mar3i[i][0] * 6 + y2 + inicioy2);
        }
        else {
          contexto2.lineTo(x2 + iniciox2 + referencia3i[i][2], y2 + inicioy2);
          contexto2.lineTo(x2 + iniciox2 + referencia3i[i][1], y2 + inicioy2);
          contexto2.lineTo(x2 + iniciox2 + referencia3i[i][0], y2 + inicioy2);

        }
      }
      contexto2.closePath();
      contexto2.fillStyle = 'rgba(51, 240, 255, 0.5)'; // Color de relleno
      contexto2.fill();


      // Pinta el área entre las dos líneas 3d
      contexto2.beginPath();
      contexto2.moveTo(x2 + iniciox2 + referencia3d[0][0], -diff3d[0][0] * 6 + y2 + inicioy2);
      for (let i = 0; i < mar1i.length; i++) {
        if (!dientes2d[i][1]) {
          contexto2.lineTo(x2 + iniciox2 + referencia3d[i][0], -diff3d[i][0] * 6 + y2 + inicioy2);
          contexto2.lineTo(x2 + iniciox2 + referencia3d[i][1], -diff3d[i][1] * 6 + y2 + inicioy2);
          contexto2.lineTo(x2 + iniciox2 + referencia3d[i][2], -diff3d[i][2] * 6 + y2 + inicioy2);
        }
        else {
          contexto2.lineTo(x2 + iniciox2 + referencia3d[i][0], -diff3d[i][0] * 0 + y2 + inicioy2);
          contexto2.lineTo(x2 + iniciox2 + referencia3d[i][1], -diff3d[i][1] * 0 + y2 + inicioy2);
          contexto2.lineTo(x2 + iniciox2 + referencia3d[i][2], -diff3d[i][2] * 0 + y2 + inicioy2);
        }
      }
      for (let i = mar1i.length - 1; i >= 0; i--) {
        if (!dientes2d[i][1]) {
          contexto2.lineTo(x2 + iniciox2 + referencia3d[i][2], mar3d[i][2] * 6 + y2 + inicioy2);
          contexto2.lineTo(x2 + iniciox2 + referencia3d[i][1], mar3d[i][1] * 6 + y2 + inicioy2);
          contexto2.lineTo(x2 + iniciox2 + referencia3d[i][0], mar3d[i][0] * 6 + y2 + inicioy2);
        }
        else {
          contexto2.lineTo(x2 + iniciox2 + referencia3d[i][2], mar3d[i][2] * 0 + y2 + inicioy2);
          contexto2.lineTo(x2 + iniciox2 + referencia3d[i][1], mar3d[i][1] * 0 + y2 + inicioy2);
          contexto2.lineTo(x2 + iniciox2 + referencia3d[i][0], mar3d[i][0] * 0 + y2 + inicioy2);
        }
      }
      contexto2.closePath();
      contexto2.fillStyle = 'rgba(51, 240, 255, 0.5)'; // Color de relleno
      contexto2.fill();



      // Pinta el área entre las dos líneas 4I
      contexto2.beginPath();
      contexto2.moveTo(x2 + iniciox2 + referencia3i[0][0], diff4i[0][0] * 6 + y2 + inicioy3 + 110);
      for (let i = 0; i < mar1i.length; i++) {
        if (!dientes2i[i][1]) {
          contexto2.lineTo(x2 + iniciox2 + referencia3i[i][0], diff4i[i][0] * 6 + y2 + inicioy3 + 110);
          contexto2.lineTo(x2 + iniciox2 + referencia3i[i][1], diff4i[i][1] * 6 + y2 + inicioy3 + 110);
          contexto2.lineTo(x2 + iniciox2 + referencia3i[i][2], diff4i[i][2] * 6 + y2 + inicioy3 + 110);
        }
        else {
          contexto2.lineTo(x2 + iniciox2 + referencia3i[i][0], y2 + inicioy3 + 110);
          contexto2.lineTo(x2 + iniciox2 + referencia3i[i][1], y2 + inicioy3 + 110);
          contexto2.lineTo(x2 + iniciox2 + referencia3i[i][2], y2 + inicioy3 + 110);

        }
      }
      for (let i = mar1i.length - 1; i >= 0; i--) {
        if (!dientes2i[i][1]) {
          contexto2.lineTo(x2 + iniciox2 + referencia3i[i][2], -mar4i[i][2] * 6 + y2 + inicioy3 + 110);
          contexto2.lineTo(x2 + iniciox2 + referencia3i[i][1], -mar4i[i][1] * 6 + y2 + inicioy3 + 110);
          contexto2.lineTo(x2 + iniciox2 + referencia3i[i][0], -mar4i[i][0] * 6 + y2 + inicioy3 + 110);
        }
        else {
          contexto2.lineTo(x2 + iniciox2 + referencia3i[i][2], y2 + inicioy3 + 110);
          contexto2.lineTo(x2 + iniciox2 + referencia3i[i][1], y2 + inicioy3 + 110);
          contexto2.lineTo(x2 + iniciox2 + referencia3i[i][0], y2 + inicioy3 + 110);

        }
      }
      contexto2.closePath();
      contexto2.fillStyle = 'rgba(51, 240, 255, 0.5)'; // Color de relleno
      contexto2.fill();


      // Pinta el área entre las dos líneas 2d
      contexto2.beginPath();
      contexto2.moveTo(x2 + iniciox2 + referencia3d[0][0], diff4d[0][0] * 6 + y2 + inicioy3 + 110);
      for (let i = 0; i < mar1i.length; i++) {
        if (!dientes2d[i][1]) {
          contexto2.lineTo(x2 + iniciox2 + referencia3d[i][0], diff4d[i][0] * 6 + y2 + inicioy3 + 110);
          contexto2.lineTo(x2 + iniciox2 + referencia3d[i][1], diff4d[i][1] * 6 + y2 + inicioy3 + 110);
          contexto2.lineTo(x2 + iniciox2 + referencia3d[i][2], diff4d[i][2] * 6 + y2 + inicioy3 + 110);
        }
        else {
          contexto2.lineTo(x2 + iniciox2 + referencia3d[i][0], y2 + inicioy3 + 110);
          contexto2.lineTo(x2 + iniciox2 + referencia3d[i][1], y2 + inicioy3 + 110);
          contexto2.lineTo(x2 + iniciox2 + referencia3d[i][2], y2 + inicioy3 + 110);

        }
      }
      for (let i = mar1i.length - 1; i >= 0; i--) {
        if (!dientes2d[i][1]) {
          contexto2.lineTo(x2 + iniciox2 + referencia3d[i][2], -mar4d[i][2] * 6 + y2 + inicioy3 + 110);
          contexto2.lineTo(x2 + iniciox2 + referencia3d[i][1], -mar4d[i][1] * 6 + y2 + inicioy3 + 110);
          contexto2.lineTo(x2 + iniciox2 + referencia3d[i][0], -mar4d[i][0] * 6 + y2 + inicioy3 + 110);
        }
        else {
          contexto2.lineTo(x2 + iniciox2 + referencia3d[i][2], y2 + inicioy3 + 110);
          contexto2.lineTo(x2 + iniciox2 + referencia3d[i][1], y2 + inicioy3 + 110);
          contexto2.lineTo(x2 + iniciox2 + referencia3d[i][0], y2 + inicioy3 + 110);

        }
      }
      contexto2.closePath();
      contexto2.fillStyle = 'rgba(51, 240, 255, 0.5)'; // Color de relleno
      contexto2.fill();





    }
  },
    [contexto2, imagen2, dientes2i, dientes2d, mar3i, dibujo1i, mar3d, diff3i, diff3d, furca3i, implante3, furca3d, mar4i, mar4d, diff4i, diff4d, furca4i, furca4d])




  //variables calculables

  const [psMax, setpsMax] = useState(0)

  const updatepsMax = (ps) => {
    let max = 0
    for (let i = 0; i < ps.length; i++) {
      if (ps[i][0] > max) max = ps[i][0]
      if (ps[i][1] > max) max = ps[i][1]
      if (ps[i][2] > max) max = ps[i][2]
    }
    return max;
  }

  const updatepsMin = (ps) => {
    let min = 1000
    for (let i = 0; i < ps.length; i++) {
      if (ps[i][0] < min) min = ps[i][0]
      if (ps[i][1] < min) min = ps[i][1]
      if (ps[i][2] < min) min = ps[i][2]
    }
    return min;
  }

  useEffect(() => {
    let max = 0;
    max = Math.max(max, updatepsMax(prof1i));
    max = Math.max(max, updatepsMax(prof1d));
    max = Math.max(max, updatepsMax(prof2i));
    max = Math.max(max, updatepsMax(prof2d));
    setpsMax(max);
  }, [prof1i, prof1d, prof2i, prof2d]);

  const [psMax2, setpsMax2] = useState(0)

  useEffect(() => {
    let max = 0;
    max = Math.max(max, updatepsMax(prof3i));
    max = Math.max(max, updatepsMax(prof3d));
    max = Math.max(max, updatepsMax(prof4i));
    max = Math.max(max, updatepsMax(prof4d));
    setpsMax2(max);
  }, [prof3i, prof3d, prof4i, prof4d]);

  const [nicMax, setnicMax] = useState(0)
  const [nicMin, setnicMin] = useState(0)

  useEffect(() => {
    let max = 0;
    let min = Infinity;
    max = Math.max(max, updatepsMax(diff1i));
    max = Math.max(max, updatepsMax(diff1d));
    max = Math.max(max, updatepsMax(diff2i));
    max = Math.max(max, updatepsMax(diff2d));
    max = Math.max(max, updatepsMax(diff3i));
    max = Math.max(max, updatepsMax(diff3d));
    max = Math.max(max, updatepsMax(diff4i));
    max = Math.max(max, updatepsMax(diff4d));
    setnicMax(max);

    min = Math.min(min, updatepsMin(diff1i));
    min = Math.min(min, updatepsMin(diff1d));
    min = Math.min(min, updatepsMin(diff2i));
    min = Math.min(min, updatepsMin(diff2d));
    min = Math.min(min, updatepsMin(diff3i));
    min = Math.min(min, updatepsMin(diff3d));
    min = Math.min(min, updatepsMin(diff4i));
    min = Math.min(min, updatepsMin(diff4d));
    if (min < 0) { setnicMin(0) }
    else {
      setnicMin(min);
    }


  }, [diff1i, diff1d, diff2i, diff2d, diff3i, diff3d, diff4i, diff4d])


  const [cantDientes, setcantDientes] = useState(0)

  const contarDientes = (dientes) => {
    let cantidad = 0
    for (let i = 0; i < dientes1i.length; i++) {
      if (!dientes[i][1])
        cantidad++
    }
    return cantidad
  }
  useEffect(() => {
    let cantidad = 0
    cantidad = cantidad + contarDientes(dientes1i) + contarDientes(dientes1d) + contarDientes(dientes2i) + contarDientes(dientes2d)
    setcantDientes(cantidad)

  }, [dientes1i, dientes1d, dientes2i, dientes2d])

  //contar dientes nic >=1
  const [cantDientesNIC, setcantDientesNIC] = useState(0)
  const [porcentajeAfectados, setporcentajeAfectados] = useState(0)

  const contarDientesAfectados = (dientes, nic, nic2) => {
    let cantidad = 0
    for (let i = 0; i < dientes1i.length; i++) {
      if (!dientes[i][1] && (nic[i][0] >= 1 || nic[i][1] >= 1 || nic[i][2] >= 1 || nic2[i][0] >= 1 || nic2[i][1] >= 1 || nic2[i][2] >= 1 ))
        cantidad++
    }
    return cantidad
  }
  useEffect(() => {
    let cantidad = 0
    let porcentaje = 0
    cantidad = cantidad
      + contarDientesAfectados(dientes1i, diff1i,diff2i) 
      + contarDientesAfectados(dientes1d, diff1d,diff2d) 
      + contarDientesAfectados(dientes2i, diff3i,diff4i) 
      + contarDientesAfectados(dientes2d, diff3d,diff4d) 
    setcantDientesNIC(cantidad)
    porcentaje = ((cantDientesNIC / cantDientes) * 100).toFixed(2)
    setporcentajeAfectados(porcentaje)


  }, [dientes1i, dientes1d, dientes2i, dientes2d, diff1i, diff1d, diff2i, diff2d, diff3i, diff3d, diff4i, diff4d, cantDientesNIC, cantDientes])

  const [porcentajeSangre, setporcentajeSangre] = useState(0)
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

  useEffect(() => {
    let cantidad = 0
    let porcentaje = 0
    cantidad = cantidad
      + contarSangre(dientes1i, san1i) + contarSangre(dientes1i, san2i)
      + contarSangre(dientes1d, san1d) + contarSangre(dientes1d, san2d)
      + contarSangre(dientes2i, san3i) + contarSangre(dientes2i, san4i)
      + contarSangre(dientes2d, san3d) + contarSangre(dientes2i, san4d)
    porcentaje = ((cantidad / (cantDientes * 6)) * 100).toFixed(2)
    setporcentajeSangre(porcentaje)


  }, [dientes1i, dientes1d, dientes2i, dientes2d, san1i, san1d, san2i, san2d, san3i, san3d, san4i, san4d, cantDientes])




  //Logica para la bd
  const { createPeriodontograma } = usePeriodontograma();
  const navigate = useNavigate();
  const params = useParams();
  const {
    register,
    setValue,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    try {
      createPeriodontograma({
        ...data,
      });


      navigate("/");
    } catch (error) {
      console.log(error);
      // window.location.href = "/";
    }
  };
  const periodontogramaData = {
    dientes1i: [[18, false], [17, false], [16, false], [15, false], [14, false], [13, false], [12, false], [11, false]],
    movilidad1: [0, 0, 0, 0, 0, 0, 0, 0],
    implante1: [false, false, false, false, false, false, false, false],
    san1i: [
      [false, false, false],
      [false, false, false],
      [false, false, false],
      [false, false, false],
      [false, false, false],
      [false, false, false],
      [false, false, false],
      [false, false, false]
    ]
  };
  const patientData = {
    patient: patient,
    dientes1i: dientes1i,
    dientes1d: dientes1d,
    dientes2i: dientes2i,
    dientes2d: dientes2d,

    movilidad1: movilidad1,
    movilidad2: movilidad2,
    movilidad3: movilidad3,
    movilidad4: movilidad4,

    implante1: implante1,
    implante2: implante2,
    implante3: implante3,
    implante4: implante4,

    furca1i: furca1i,
    furca1d: furca1d,
    furca2i: furca2i,
    furca2d: furca2d,
    furca3i: furca3i,
    furca3d: furca3d,
    furca4i: furca4i,
    furca4d: furca4d,

    san1i: san1i,
    san1d: san1d,
    san2i: san2i,
    san2d: san2d,
    san3i: san3i,
    san3d: san3d,
    san4i: san4i,
    san4d: san4d,

    placa1i: placa1i,
    placa1d: placa1d,
    placa2i: placa2i,
    placa2d: placa2d,
    placa3i: placa3i,
    placa3d: placa3d,
    placa4i: placa4i,
    placa4d: placa4d,

    mar1i: mar1i,
    mar1d: mar1d,
    mar2i: mar2i,
    mar2d: mar2d,
    mar3i: mar3i,
    mar3d: mar3d,
    mar4i: mar4i,
    mar4d: mar4d,

    prof1i: prof1i,
    prof1d: prof1d,
    prof2i: prof2i,
    prof2d: prof2d,
    prof3i: prof3i,
    prof3d: prof3d,
    prof4i: prof4i,
    prof4d: prof4d,

    diff1i: diff1i,
    diff1d: diff1d,
    diff2i: diff2i,
    diff2d: diff2d,
    diff3i: diff3i,
    diff3d: diff3d,
    diff4i: diff4i,
    diff4d: diff4d,

    car1i: car1i,
    car1d: car1d,
    car2i: car2i,
    car2d: car2d,
    car3i: car3i,
    car3d: car3d,
    car4i: car4i,
    car4d: car4d,

    res1i: res1i,
    res1d: res1d,
    res2i: res2i,
    res2d: res2d,
    res3i: res3i,
    res3d: res3d,
    res4i: res4i,
    res4d: res4d,

    sup1i: sup1i,
    sup1d: sup1d,
    sup2i: sup2i,
    sup2d: sup2d,
    sup3i: sup3i,
    sup3d: sup3d,
    sup4i: sup4i,
    sup4d: sup4d,

  };
  useEffect(() => {
    const patientData = {
      patient: patient,
      dientes1i: dientes1i,
      dientes1d: dientes1d,
      dientes2i: dientes2i,
      dientes2d: dientes2d,

      movilidad1: movilidad1,
      movilidad2: movilidad2,
      movilidad3: movilidad3,
      movilidad4: movilidad4,

      implante1: implante1,
      implante2: implante2,
      implante3: implante3,
      implante4: implante4,

      furca1i: furca1i,
      furca1d: furca1d,
      furca2i: furca2i,
      furca2d: furca2d,
      furca3i: furca3i,
      furca3d: furca3d,
      furca4i: furca4i,
      furca4d: furca4d,

      san1i: san1i,
      san1d: san1d,
      san2i: san2i,
      san2d: san2d,
      san3i: san3i,
      san3d: san3d,
      san4i: san4i,
      san4d: san4d,

      placa1i: placa1i,
      placa1d: placa1d,
      placa2i: placa2i,
      placa2d: placa2d,
      placa3i: placa3i,
      placa3d: placa3d,
      placa4i: placa4i,
      placa4d: placa4d,

      mar1i: mar1i,
      mar1d: mar1d,
      mar2i: mar2i,
      mar2d: mar2d,
      mar3i: mar3i,
      mar3d: mar3d,
      mar4i: mar4i,
      mar4d: mar4d,

      prof1i: prof1i,
      prof1d: prof1d,
      prof2i: prof2i,
      prof2d: prof2d,
      prof3i: prof3i,
      prof3d: prof3d,
      prof4i: prof4i,
      prof4d: prof4d,

      diff1i: diff1i,
      diff1d: diff1d,
      diff2i: diff2i,
      diff2d: diff2d,
      diff3i: diff3i,
      diff3d: diff3d,
      diff4i: diff4i,
      diff4d: diff4d,

      car1i: car1i,
      car1d: car1d,
      car2i: car2i,
      car2d: car2d,
      car3i: car3i,
      car3d: car3d,
      car4i: car4i,
      car4d: car4d,

      res1i: res1i,
      res1d: res1d,
      res2i: res2i,
      res2d: res2d,
      res3i: res3i,
      res3d: res3d,
      res4i: res4i,
      res4d: res4d,

      sup1i: sup1i,
      sup1d: sup1d,
      sup2i: sup2i,
      sup2d: sup2d,
      sup3i: sup3i,
      sup3d: sup3d,
      sup4i: sup4i,
      sup4d: sup4d,
    };

  }, [patient, dientes1i,
    dientes1d,
    dientes2i,
    dientes2d,

    movilidad1,
    movilidad2,
    movilidad3,
    movilidad4,

    implante1,
    implante2,
    implante3,
    implante4,

    furca1i,
    furca1d,
    furca2i,
    furca2d,
    furca3i,
    furca3d,
    furca4i,
    furca4d,

    san1i,
    san1d,
    san2i,
    san2d,
    san3i,
    san3d,
    san4i,
    san4d,

    placa1i,
    placa1d,
    placa2i,
    placa2d,
    placa3i,
    placa3d,
    placa4i,
    placa4d,

    mar1i,
    mar1d,
    mar2i,
    mar2d,
    mar3i,
    mar3d,
    mar4i,
    mar4d,

    prof1i,
    prof1d,
    prof2i,
    prof2d,
    prof3i,
    prof3d,
    prof4i,
    prof4d,

    diff1i,
    diff1d,
    diff2i,
    diff2d,
    diff3i,
    diff3d,
    diff4i,
    diff4d,
    car1i, car1d, car2i, car2d, car3i, car3d, car4i, car4d,
    res1i, res1d, res2i, res2d, res3i, res3d, res4i, res4d,
    sup1i, sup1d, sup2i, sup2d, sup3i, sup3d, sup4i, sup4d,
  ]);

  return (
    <>

      <div className="mb-3 " style={{ color: 'black ', display: 'flex', flexWrap: 'wrap', justifyContent: 'center', }}>

        <div className="w-4/5" style={{ width: "80%" }}>
          <Subtitulo>PERIODONTOGRAMA</Subtitulo>
          <OfficialCard>

            <h1 className="text-xl font-bold" style={{ paddingBottom: "30px" }}>Información</h1>
            <Fila>
              <Textorosa>Nombre:</Textorosa>
              <h1 className="text-xs block my-1  font-roboto">{paciente.nomPac} {paciente.apellidoPac}</h1>
            </Fila>

            <Fila>
              <Textorosa>RUT:</Textorosa>
              <h1 className="text-xs block my-1  font-roboto">{paciente.rutPac}</h1>
            </Fila>
            <Fila>
              <Textorosa>Nacionalidad:</Textorosa>
              <h1 className="text-xs block my-1  font-roboto">{paciente.nacionalidadPac}</h1>
            </Fila>
            <Fila>
              <Textorosa>Fecha de nacimiento:</Textorosa>
              <h1 className="text-xs block my-1  font-roboto"> {new Date(paciente.fecNacPac).toLocaleDateString('es-ES', {
                year: 'numeric',
                month: '2-digit',
                day: '2-digit',
              })}</h1>
            </Fila>
            <Fila>
              <Textorosa>Género:</Textorosa>
              <h1 className="text-xs block my-1  font-roboto">{paciente.sexo}</h1>
            </Fila>



          </OfficialCard>
        </div>

        <div className="flex flex-row" style={{ justifyContent: 'center' }}>


          {/*PRIMERA TABLA IZQUIERDA-----------------------------------------------------------   */}
          <div className=" rounded w-1/3 my-10" style={{ boxSizing: 'border-box' }}>

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

                {/*caries 1 izquierda------------------------------------------------------   */}

                <tr>
                  <th style={{ textAlign: 'right', padding: '2px', width: '12.5%', fontWeight: 'bold', fontSize: '1.2em' }}>{nombres1[8]}</th>
                  {car1i.map((innersan1i, index) => (
                    dientes1i[index][1] ? (
                      <th key={index} className="border-black border rounded">
                        <div></div>
                      </th>
                    ) : (
                      <th key={index} className="border-black border rounded">
                        {innersan1i.map((san, index2) => (
                          <MiniBlack key={`${index}-${index2}`} onClick={() => cambioCar1i(index, index2)}>
                            {san}
                          </MiniBlack>
                        ))}
                      </th>
                    )
                  ))}
                </tr>

                {/*restauracion 1 izquierda------------------------------------------------------   */}

                <tr>
                  <th style={{ textAlign: 'right', padding: '2px', width: '12.5%', fontWeight: 'bold', fontSize: '1.2em' }}>{nombres1[9]}</th>
                  {res1i.map((innersan1i, index) => (
                    dientes1i[index][1] ? (
                      <th key={index} className="border-black border rounded">
                        <div></div>
                      </th>
                    ) : (
                      <th key={index} className="border-black border rounded">
                        {innersan1i.map((san, index2) => (
                          <MiniPurple key={`${index}-${index2}`} onClick={() => cambioRes1i(index, index2)}>
                            {san}
                          </MiniPurple>
                        ))}
                      </th>
                    )
                  ))}
                </tr>

                {/*supuracion 1 izquierda------------------------------------------------------   */}

                <tr>
                  <th style={{ textAlign: 'right', padding: '2px', width: '12.5%', fontWeight: 'bold', fontSize: '1.2em' }}>{nombres1[10]}</th>
                  {sup1i.map((innersan1i, index) => (
                    dientes1i[index][1] ? (
                      <th key={index} className="border-black border rounded">
                        <div></div>
                      </th>
                    ) : (
                      <th key={index} className="border-black border rounded">
                        {innersan1i.map((san, index2) => (
                          <MiniYellow key={`${index}-${index2}`} onClick={() => cambioSup1i(index, index2)}>
                            {san}
                          </MiniYellow>
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
                            {prof < 0 ? (0) : (prof)}

                          </span>
                        ))
                      )}
                    </th>
                  ))}
                </tr>


              </tbody>
            </table>
          </div>

          {/*primera TABLA DERECHA--------------------------------------------------   */}

          <div className="rounded w-1/3 my-10 " style={{ boxSizing: 'border-box' }}>
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

                {/*caries 1 derecha------------------------------------------------------   */}

                <tr>
                  <th style={{ textAlign: 'right', padding: '2px', width: '12.5%', fontWeight: 'bold', fontSize: '1.2em' }}></th>
                  {car1d.map((innersan1i, index) => (
                    dientes1d[index][1] ? (
                      <th key={index} className="border-black border rounded">
                        <div></div>
                      </th>
                    ) : (
                      <th key={index} className="border-black border rounded">
                        {innersan1i.map((san, index2) => (
                          <MiniBlack key={`${index}-${index2}`} onClick={() => cambioCar1d(index, index2)}>
                            {san}
                          </MiniBlack>
                        ))}
                      </th>
                    )
                  ))}
                </tr>

                {/*restauracion 1 derecha------------------------------------------------------   */}

                <tr>
                  <th style={{ textAlign: 'right', padding: '2px', width: '12.5%', fontWeight: 'bold', fontSize: '1.2em' }}></th>
                  {res1d.map((innersan1i, index) => (
                    dientes1d[index][1] ? (
                      <th key={index} className="border-black border rounded">
                        <div></div>
                      </th>
                    ) : (
                      <th key={index} className="border-black border rounded">
                        {innersan1i.map((san, index2) => (
                          <MiniPurple key={`${index}-${index2}`} onClick={() => cambioRes1d(index, index2)}>
                            {san}
                          </MiniPurple>
                        ))}
                      </th>
                    )
                  ))}
                </tr>

                {/*supuracion 1 derecha------------------------------------------------------   */}

                <tr>
                  <th style={{ textAlign: 'right', padding: '2px', width: '12.5%', fontWeight: 'bold', fontSize: '1.2em' }}></th>
                  {sup1d.map((innersan1i, index) => (
                    dientes1d[index][1] ? (
                      <th key={index} className="border-black border rounded">
                        <div></div>
                      </th>
                    ) : (
                      <th key={index} className="border-black border rounded">
                        {innersan1i.map((san, index2) => (
                          <MiniYellow key={`${index}-${index2}`} onClick={() => cambioSup1d(index, index2)}>
                            {san}
                          </MiniYellow>
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
                            {prof < 0 ? (0) : (prof)}
                          </span>
                        ))
                      )}
                    </th>
                  ))}
                </tr>



              </tbody>
            </table>
          </div>
        </div>

        {/*IMAGEN 1-----------------------------------------------------------   */}
        <div className="flex flex-row" style={{ justifyContent: 'center' }}>
          <div style={{
            display: 'flex',
            flexDirection: 'row', // Agrega esta propiedad para que los canvas se alineen horizontalmente
            justifyContent: 'center',
            width: '100%', // Establece el ancho del contenedor al 100% del padre
            height: 300, // Establece el alto del contenedor
            marginLeft: '-60px'
          }}>
            <canvas id="canvas" width={2000} height={300} /> {/* Establece el alto del primer canvas */}
          </div>
        </div>


        <div className="flex flex-row" style={{ justifyContent: 'center' }}>



          {/*SEGUNDA TABLA IZQUIERDA-----------------------------------------------------------   */}
          <div className="rounded w-1/3 my-10 -mx-3" style={{ boxSizing: 'border-box' }}>

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
                            {prof < 0 ? (0) : (prof)}
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


                {/*caries 2 izquierda------------------------------------------------------   */}

                <tr>
                  <th style={{ textAlign: 'right', padding: '2px', width: '12.5%', fontWeight: 'bold', fontSize: '1.2em' }}>{nombres1[8]}</th>
                  {car2i.map((innersan1i, index) => (
                    dientes1i[index][1] ? (
                      <th key={index} className="border-black border rounded">
                        <div></div>
                      </th>
                    ) : (
                      <th key={index} className="border-black border rounded">
                        {innersan1i.map((san, index2) => (
                          <MiniBlack key={`${index}-${index2}`} onClick={() => cambioCar2i(index, index2)}>
                            {san}
                          </MiniBlack>
                        ))}
                      </th>
                    )
                  ))}
                </tr>

                {/*restauracion 1 izquierda------------------------------------------------------   */}

                <tr>
                  <th style={{ textAlign: 'right', padding: '2px', width: '12.5%', fontWeight: 'bold', fontSize: '1.2em' }}>{nombres1[9]}</th>
                  {res2i.map((innersan1i, index) => (
                    dientes1i[index][1] ? (
                      <th key={index} className="border-black border rounded">
                        <div></div>
                      </th>
                    ) : (
                      <th key={index} className="border-black border rounded">
                        {innersan1i.map((san, index2) => (
                          <MiniPurple key={`${index}-${index2}`} onClick={() => cambioRes2i(index, index2)}>
                            {san}
                          </MiniPurple>
                        ))}
                      </th>
                    )
                  ))}
                </tr>

                {/*supuracion 1 izquierda------------------------------------------------------   */}

                <tr>
                  <th style={{ textAlign: 'right', padding: '2px', width: '12.5%', fontWeight: 'bold', fontSize: '1.2em' }}>{nombres1[10]}</th>
                  {sup2i.map((innersan1i, index) => (
                    dientes1i[index][1] ? (
                      <th key={index} className="border-black border rounded">
                        <div></div>
                      </th>
                    ) : (
                      <th key={index} className="border-black border rounded">
                        {innersan1i.map((san, index2) => (
                          <MiniYellow key={`${index}-${index2}`} onClick={() => cambioSup2i(index, index2)}>
                            {san}
                          </MiniYellow>
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



              </tbody>
            </table>
          </div >


          {/*SEGUNDA TABLA DERECHA-----------------------------------------------------------   */}
          <div className="rounded w-1/3 my-10 " style={{ boxSizing: 'border-box' }}>

            {/*cabecera dela segunda tabla derecha------------------------------------------------   */}

            <table style={{ tableLayout: 'fixed', width: '100%' }}>
              <thead>
                <tr>
                  <th style={{ padding: '2px', width: '15.5%' }}></th></tr>
              </thead>
              <tbody>

                {/*NIC tabla 1 derecha-------------------------------------------   */}

                <tr>
                  <th style={{ padding: '2px', width: '12.5%', fontWeight: 'bold', fontSize: '1.2em' }}></th>

                  {diff2d.map((innernicf2d, index) => (
                    <th key={index} className="border-black border bg-slate-200" style={{ padding: '2px', width: '12.5%' }}>
                      {dientes1d[index][1] ? (
                        <div></div>
                      ) : (
                        innernicf2d.map((prof, index2) => (
                          <span
                            key={`${index}-${index2}`}
                            style={{ width: '30%', display: 'inline-block', textAlign: "center", fontSize: '12px' }}
                          >
                            {prof < 0 ? (0) : (prof)}
                          </span>
                        ))
                      )}
                    </th>
                  ))}
                </tr>

                {/*margen gingival tabla 2 derecha------------------------------------------------------   */}

                <tr>
                  <th style={{ padding: '2px', width: '12.5%', fontWeight: 'bold', fontSize: '1.2em' }}></th>

                  {mar2d.map((innermar2d, index) => (
                    <th key={index} className="border-black border" style={{ padding: '2px', width: '12.5%' }}>
                      {dientes1d[index][1] ? (
                        <div></div>
                      ) : (
                        innermar2d.map((margen, index2) => (
                          <input
                            key={`${index}-${index2}`}
                            style={{ width: '30%', height: '20px', fontSize: '12px', textAlign: "center" }}
                            value={margen}
                            onChange={(e) => cambioMar2d(e, index, index2)}
                            onFocus={(e) => e.target.value = ''}
                          />
                        ))
                      )}
                    </th>
                  ))}
                </tr>

                {/*profundidad al sondaje tabla 2 DERECHA------------------------------------------   */}

                <tr>
                  <th style={{ padding: '2px', width: '12.5%', fontWeight: 'bold', fontSize: '1.2em' }}></th>

                  {prof2d.map((innerprof2d, index) => (
                    <th key={index} className="border-black border" style={{ padding: '2px', width: '12.5%' }}>
                      {dientes1d[index][1] ? (
                        <div></div>
                      ) : (
                        innerprof2d.map((prof, index2) => (

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
                            onChange={(e) => cambioProf2d(e, index, index2)}
                            onFocus={(e) => e.target.value = ''}
                          />
                        ))
                      )}
                    </th>
                  ))}
                </tr>
                {/*sangrado al sondaje 2 derecha------------------------------------------------------   */}

                <tr>
                  <th style={{ padding: '2px', width: '12.5%', fontWeight: 'bold', fontSize: '1.2em' }}></th>
                  {san2d.map((innersan2d, index) => (
                    dientes1d[index][1] ? (
                      <th key={index} className="border-black border rounded">
                        <div></div>
                      </th>
                    ) : (
                      <th key={index} className="border-black border rounded">
                        {innersan2d.map((san, index2) => (
                          <MiniRed key={`${index}-${index2}`} onClick={() => cambioSan2d(index, index2)}>
                            {san}
                          </MiniRed>
                        ))}
                      </th>
                    )
                  ))}
                </tr>

                {/*placa tabla 2 derecha------------------------------------------------------   */}

                <tr>
                  <th style={{ padding: '2px', width: '12.5%', fontWeight: 'bold', fontSize: '1.2em' }}></th>
                  {placa2d.map((innerplaca2d, index) => (
                    dientes1d[index][1] ? (
                      <th key={index} className="border-black border rounded">
                        <div></div>
                      </th>
                    ) : (
                      <th key={index} className="border-black border rounded">
                        {innerplaca2d.map((placa, index2) => (

                          <MiniBlue key={`${index}-${index2}`} onClick={() => cambioPlaca2d(index, index2)}>{placa}</MiniBlue>

                        ))}
                      </th>
                    )
                  ))}
                </tr>



                {/*caries 2 derecha------------------------------------------------------   */}

                <tr>
                  <th style={{ textAlign: 'right', padding: '2px', width: '12.5%', fontWeight: 'bold', fontSize: '1.2em' }}></th>
                  {car2d.map((innersan1i, index) => (
                    dientes1d[index][1] ? (
                      <th key={index} className="border-black border rounded">
                        <div></div>
                      </th>
                    ) : (
                      <th key={index} className="border-black border rounded">
                        {innersan1i.map((san, index2) => (
                          <MiniBlack key={`${index}-${index2}`} onClick={() => cambioCar2d(index, index2)}>
                            {san}
                          </MiniBlack>
                        ))}
                      </th>
                    )
                  ))}
                </tr>

                {/*restauracion 2 derecha------------------------------------------------------   */}

                <tr>
                  <th style={{ textAlign: 'right', padding: '2px', width: '12.5%', fontWeight: 'bold', fontSize: '1.2em' }}></th>
                  {res2d.map((innersan1i, index) => (
                    dientes1d[index][1] ? (
                      <th key={index} className="border-black border rounded">
                        <div></div>
                      </th>
                    ) : (
                      <th key={index} className="border-black border rounded">
                        {innersan1i.map((san, index2) => (
                          <MiniPurple key={`${index}-${index2}`} onClick={() => cambioRes2d(index, index2)}>
                            {san}
                          </MiniPurple>
                        ))}
                      </th>
                    )
                  ))}
                </tr>

                {/*supuracion 2 derecha------------------------------------------------------   */}

                <tr>
                  <th style={{ textAlign: 'right', padding: '2px', width: '12.5%', fontWeight: 'bold', fontSize: '1.2em' }}></th>
                  {sup2d.map((innersan1i, index) => (
                    dientes1d[index][1] ? (
                      <th key={index} className="border-black border rounded">
                        <div></div>
                      </th>
                    ) : (
                      <th key={index} className="border-black border rounded">
                        {innersan1i.map((san, index2) => (
                          <MiniYellow key={`${index}-${index2}`} onClick={() => cambioSup2d(index, index2)}>
                            {san}
                          </MiniYellow>
                        ))}
                      </th>
                    )
                  ))}
                </tr>


                {/*FURCA 2 derecha------------------------------------------------------   */}

                <tr>
                  <th style={{ textAlign: 'right', padding: '2px', width: '12.5%', fontWeight: 'bold', fontSize: '1.2em' }}></th>
                  {furca2d.map((innerfurca2d, index) =>
                  (((dientes1d[index][1] || implante2[index]) || dientes1d[index][0] < 24 || dientes1d[index][0] === 25) ? (
                    <th key={index} className="border-black border rounded">
                      <div></div>
                    </th>
                  ) : (
                    <th key={index} className="border-black border rounded " style={{ fontWeight: 'bold', fontSize: '1.2em', maxHeight: '3px' }}>
                      {innerfurca2d.map((san, index2) => (
                        <FurcaButton key={`${index}-${index2}`} onClick={() => { cambiofurca2d(index, index2) }}>{san}</FurcaButton>

                      ))}
                    </th>
                  )
                  ))}
                </tr>



              </tbody>
            </table>

          </div >
        </div>

        {/*datos calculados----------------------------------------------------------   
        <div className="bg-slate-100 text-black max-w-md w-full p-10 rounded-md mt-3 mb-1" style={{ minWidth: "80%", boxShadow: '5px 5px 10px rgba(0, 0 , 0, 0.5)' }}>
          <h1>Mayor PS superior: {psMax}mm</h1>
          <h1>Mayor PS inferior: {psMax2}mm</h1>
          <h1>Rango de NIC:({nicMin}-{nicMax}) mm</h1>

          {cantDientes == 1 ? (<h1>Cantidad de dientes: {cantDientes} unidad</h1>
          ) : (<h1>Cantidad de dientes: {cantDientes} unidades</h1>
          )}

          {cantDientesNIC == 1 ? (
            <h1>Cantidad de dientes con NIC  &ge; 1: {cantDientesNIC} unidad</h1>
          ) : (
            <h1>Cantidad de dientes con NIC  &ge; 1: {cantDientesNIC} unidades</h1>
          )}



          <h1>Porcentaje de dientes afectados: {porcentajeAfectados}%</h1>
          <h1>Porcentaje de sangrado: {porcentajeSangre}%</h1>


        </div>*/}
        <OfficialCard>
          <div className="grid grid-cols-3 gap-6">
            <div className="flex flex-col gap-2">
              <div className="flex gap-2">
                <Textorosa>Mayor PS superior:</Textorosa>
                <Textonegro>{psMax} mm</Textonegro>
              </div>
              <div className="flex gap-2">
                <Textorosa>Mayor PS inferior:</Textorosa>
                <Textonegro>{psMax2} mm</Textonegro>
              </div>
            </div>
            <div className="flex flex-col gap-2">
              <div className="flex gap-2">
                {cantDientes == 1 ? (
                  <>
                    <Textorosa>Cantidad de dientes:</Textorosa>
                    <Textonegro>{cantDientes} unidad</Textonegro>
                  </>
                ) : (
                  <>
                    <Textorosa>Cantidad de dientes:</Textorosa>
                    <Textonegro>{cantDientes} unidades</Textonegro>
                  </>

                )}

              </div>
              <div className="flex gap-2">
                {cantDientesNIC == 1 ? (
                  <>
                  <Textorosa>Cantidad de dientes con NIC  &ge; 1:</Textorosa>
                  <Textonegro>{cantDientesNIC} unidad</Textonegro>
                  </>
            
                ) : (
                  <>
                  <Textorosa>N° dientes con NIC  &ge; 1:</Textorosa>
                  <Textonegro> {cantDientesNIC} unidades</Textonegro>
                  </>
                 
                )}
                
              </div>
            </div>
            <div className="flex flex-col gap-2">
              <div className="flex gap-2">
                <Textorosa>Porcentaje de dientes afectados: </Textorosa>
                <Textonegro> {porcentajeAfectados}% </Textonegro>
              </div>
              <div  className="flex gap-2">
                <Textorosa>Porcentaje de sangrado:</Textorosa>
                <Textonegro>{porcentajeSangre}%</Textonegro>
              </div>
            </div>
          </div>
        </OfficialCard>


        <div className="flex flex-row" style={{ justifyContent: 'center' }}>
          {/*TERCERA TABLA IZQUIERDA-----------------------------------------------------------   */}
          <div className=" rounded w-1/3 my-10" style={{ boxSizing: 'border-box' }}>

            {/*cabecera dela tercera tabla-----------------------------------------------------------   */}

            <table style={{ tableLayout: 'fixed', width: '100%' }}>
              <thead>

                <tr>
                  <th style={{ padding: '2px', width: '15.5%' }}></th>

                  {dientes2i.map((dientes2i, index) => (

                    <th key={index} className="border-black border rounded " style={{ fontWeight: 'bold', fontSize: '1.2em' }}>
                      <DienteLock onClick={() => { cambioDientes2i(index) }}>{dientes2i}</DienteLock>
                    </th>
                  ))}
                </tr>
                {/*<Dientes1iFunction arreglo = {dientes1i} funcion={cambioDientes1i}></Dientes1iFunction>*/}

              </thead>

              {/*movilidad 3-----------------------------------------------------------   */}
              <tbody>
                <tr>
                  <th style={{ textAlign: 'right', padding: '2px', width: '12.5%', fontWeight: 'bold', fontSize: '1.2em' }}>{nombres1[0]}</th>

                  {movilidad3.map((movilidad, index) => (
                    <th key={index} className="border-black border " style={{ padding: '2px', width: '12.5%' }} >

                      {dientes2i[index][1] ? (
                        <div></div>
                      ) :
                        (
                          <input
                            style={{ width: '80%', height: '20px', fontSize: '12px', textAlign: "center" }}
                            value={movilidad}
                            onChange={(e) => cambioMovilidad3(e, index)}
                            onFocus={(e) => e.target.value = ''}
                          />

                        )}
                    </th>
                  ))}
                </tr>

                {/*Implante3-----------------------------------------------------------   */}

                <tr>
                  <th style={{ textAlign: 'right', padding: '2px', width: '12.5%', fontWeight: 'bold', fontSize: '1.2em' }}>{nombres1[1]}</th>
                  {implante3.map((implante, index) => (
                    <th key={index} className="border-black border rounded ">
                      {dientes2i[index][1] ? (
                        <div></div>
                      ) :
                        (<Red onClick={() => { cambioImplante3(index) }}>{implante}</Red>)
                      }

                    </th>
                  ))}
                </tr>
                {/*Furca 3 izquierda-----------------------------------------------------------   */}

                <tr style={{ height: '2px', margin: 0 }}>
                  <th style={{ textAlign: 'right', padding: '2px', width: '12.5%', fontWeight: 'bold', fontSize: '1.2em' }}>{nombres1[2]}</th>
                  {furca3i.map((furca3i, index) => (

                    <th key={index} className="border-black border rounded " style={{ fontWeight: 'bold', fontSize: '1.2em', maxHeight: '3px' }}>
                      {((dientes2i[index][1] || implante3[index]) || dientes2i[index][0] <= 45) ? (
                        <div></div>
                      ) :
                        (
                          <FurcaButton onClick={() => { cambiofurca3i(index) }}>{furca3i}</FurcaButton>

                        )
                      }

                    </th>
                  ))}
                </tr>


                {/*sangrado al sondaje 3 izquierda------------------------------------------------------   */}

                <tr>
                  <th style={{ textAlign: 'right', padding: '2px', width: '12.5%', fontWeight: 'bold', fontSize: '1.2em' }}>{nombres1[3]}</th>
                  {san3i.map((innersan3i, index) => (
                    dientes2i[index][1] ? (
                      <th key={index} className="border-black border rounded">
                        <div></div>
                      </th>
                    ) : (
                      <th key={index} className="border-black border rounded">
                        {innersan3i.map((san, index2) => (
                          <MiniRed key={`${index}-${index2}`} onClick={() => cambioSan3i(index, index2)}>
                            {san}
                          </MiniRed>
                        ))}
                      </th>
                    )
                  ))}
                </tr>


                {/*placa tabla 3 izquierda------------------------------------------------------   */}

                <tr>
                  <th style={{ textAlign: 'right', padding: '2px', width: '12.5%', fontWeight: 'bold', fontSize: '1.2em' }}>{nombres1[4]}</th>
                  {placa3i.map((innerplaca1i, index) => (
                    dientes2i[index][1] ? (
                      <th key={index} className="border-black border rounded">
                        <div></div>
                      </th>
                    ) : (
                      <th key={index} className="border-black border rounded">
                        {innerplaca1i.map((placa, index2) => (

                          <MiniBlue key={`${index}-${index2}`} onClick={() => cambioPlaca3i(index, index2)}>{placa}</MiniBlue>

                        ))}
                      </th>
                    )
                  ))}
                </tr>

                {/*caries 3 izquierda------------------------------------------------------   */}

                <tr>
                  <th style={{ textAlign: 'right', padding: '2px', width: '12.5%', fontWeight: 'bold', fontSize: '1.2em' }}>{nombres1[8]}</th>
                  {car3i.map((innersan1i, index) => (
                    dientes2i[index][1] ? (
                      <th key={index} className="border-black border rounded">
                        <div></div>
                      </th>
                    ) : (
                      <th key={index} className="border-black border rounded">
                        {innersan1i.map((san, index2) => (
                          <MiniBlack key={`${index}-${index2}`} onClick={() => cambioCar3i(index, index2)}>
                            {san}
                          </MiniBlack>
                        ))}
                      </th>
                    )
                  ))}
                </tr>

                {/*restauracion 3 izquierda------------------------------------------------------   */}

                <tr>
                  <th style={{ textAlign: 'right', padding: '2px', width: '12.5%', fontWeight: 'bold', fontSize: '1.2em' }}>{nombres1[9]}</th>
                  {res3i.map((innersan1i, index) => (
                    dientes2i[index][1] ? (
                      <th key={index} className="border-black border rounded">
                        <div></div>
                      </th>
                    ) : (
                      <th key={index} className="border-black border rounded">
                        {innersan1i.map((san, index2) => (
                          <MiniPurple key={`${index}-${index2}`} onClick={() => cambioRes3i(index, index2)}>
                            {san}
                          </MiniPurple>
                        ))}
                      </th>
                    )
                  ))}
                </tr>

                {/*supuracion 3 izquierda------------------------------------------------------   */}

                <tr>
                  <th style={{ textAlign: 'right', padding: '2px', width: '12.5%', fontWeight: 'bold', fontSize: '1.2em' }}>{nombres1[10]}</th>
                  {sup3i.map((innersan1i, index) => (
                    dientes2i[index][1] ? (
                      <th key={index} className="border-black border rounded">
                        <div></div>
                      </th>
                    ) : (
                      <th key={index} className="border-black border rounded">
                        {innersan1i.map((san, index2) => (
                          <MiniYellow key={`${index}-${index2}`} onClick={() => cambioSup3i(index, index2)}>
                            {san}
                          </MiniYellow>
                        ))}
                      </th>
                    )
                  ))}
                </tr>


                {/*margen gingival tabla 3 izquierda------------------------------------------------------   */}

                <tr>
                  <th style={{ textAlign: 'right', padding: '2px', width: '12.5%', fontWeight: 'bold', fontSize: '1.2em' }}>{nombres1[5]}</th>

                  {mar3i.map((innermar1i, index) => (
                    <th key={index} className="border-black border" style={{ padding: '2px', width: '12.5%' }}>
                      {dientes2i[index][1] ? (
                        <div></div>
                      ) : (
                        innermar1i.map((margen, index2) => (
                          <input
                            key={`${index}-${index2}`}
                            style={{ width: '30%', height: '20px', fontSize: '12px', textAlign: "center" }}
                            value={margen}
                            onChange={(e) => cambioMar3i(e, index, index2)}
                            onFocus={(e) => e.target.value = ''}
                          />
                        ))
                      )}
                    </th>
                  ))}
                </tr>

                {/*profundidad al sondaje tabla 3 izquierda-------------------------------------------   */}

                <tr>
                  <th style={{ textAlign: 'right', padding: '2px', width: '12.5%', fontWeight: 'bold', fontSize: '1.2em' }}>{nombres1[6]}</th>

                  {prof3i.map((innerprof1i, index) => (
                    <th key={index} className="border-black border" style={{ padding: '2px', width: '12.5%' }}>
                      {dientes2i[index][1] ? (
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
                            onChange={(e) => cambioProf3i(e, index, index2)}
                            onFocus={(e) => e.target.value = ''}
                          />
                        ))
                      )}
                    </th>
                  ))}
                </tr>

                {/*NIC tabla 3 izquierda-------------------------------------------   */}

                <tr>
                  <th style={{ textAlign: 'right', padding: '2px', width: '12.5%', fontWeight: 'bold', fontSize: '1.2em' }}>{nombres1[7]}</th>

                  {diff3i.map((innernicf1i, index) => (
                    <th key={index} className="border-black border bg-slate-200" style={{ padding: '2px', width: '12.5%' }}>
                      {dientes2i[index][1] ? (
                        <div></div>
                      ) : (
                        innernicf1i.map((prof, index2) => (
                          <span
                            key={`${index}-${index2}`}
                            style={{ width: '30%', display: 'inline-block', textAlign: "center", fontSize: '12px' }}
                          >
                            {prof < 0 ? (0) : (prof)}
                          </span>
                        ))
                      )}
                    </th>
                  ))}
                </tr>


              </tbody>
            </table>
          </div>

          {/*TERCERA TABLA DERECHA-----------------------------------------------------------   */}

          <div className="rounded w-1/3 my-10" style={{ boxSizing: 'border-box' }}>
            {/*cabecera dela TERCERA tabla DERECHA-----------------------------------------------------------   */}

            <table style={{ tableLayout: 'fixed', width: '100%' }}>
              <thead>

                <tr>
                  <th style={{ padding: '2px', width: '12.5%' }}></th>

                  {dientes2d.map((dientes1i, index) => (

                    <th key={index} className="border-black border rounded " style={{ fontWeight: 'bold', fontSize: '1.2em' }}>
                      <DienteLock onClick={() => { cambioDientes2d(index) }}>{dientes1i}</DienteLock>
                    </th>
                  ))}
                </tr>

              </thead>
              {/*movilidad4-----------------------------------------------------------   */}
              <tbody>
                <tr>
                  <th style={{ padding: '2px', width: '12.5%' }}></th>

                  {movilidad4.map((movilidad, index) => (
                    <th key={index} className="border-black border " style={{ padding: '2px', width: '12.5%' }} >

                      {dientes2d[index][1] ? (
                        <div></div>
                      ) :
                        (
                          <input
                            style={{ width: '80%', height: '20px', fontSize: '12px', textAlign: "center" }}
                            value={movilidad}
                            onChange={(e) => cambioMovilidad4(e, index)}
                            onFocus={(e) => e.target.value = ''}
                          />

                        )}
                    </th>
                  ))}
                </tr>
                {/*Implante 4-----------------------------------------------------------   */}

                <tr>
                  <th style={{ padding: '2px', width: '12.5%' }}></th>
                  {implante4.map((implante, index) => (
                    <th key={index} className="border-black border rounded ">
                      {dientes2d[index][1] ? (
                        <div></div>
                      ) :
                        (<Red onClick={() => { cambioImplante4(index) }}>{implante}</Red>)
                      }

                    </th>
                  ))}
                </tr>

                {/*Furca 3 derecha-----------------------------------------------------------   */}

                <tr style={{ height: '2px', margin: 0 }}>
                  <th style={{ padding: '2px', width: '12.5%', fontWeight: 'bold', fontSize: '1.2em' }}></th>
                  {furca3d.map((furca1d, index) => (

                    <th key={index} className="border-black border rounded " style={{ fontWeight: 'bold', fontSize: '1.2em', maxHeight: '3px' }}>
                      {((dientes2d[index][1] || implante4[index]) || dientes2d[index][0] < 36) ? (
                        <div></div>
                      ) :
                        (
                          <FurcaButton onClick={() => { cambiofurca3d(index) }}>{furca1d}</FurcaButton>

                        )
                      }

                    </th>
                  ))}
                </tr>

                {/*sangrado al sondaje 3 derecha------------------------------------------------------   */}

                <tr>
                  <th style={{ padding: '2px', width: '12.5%', fontWeight: 'bold', fontSize: '1.2em' }}></th>
                  {san3d.map((innersan1d, index) => (
                    dientes2d[index][1] ? (
                      <th key={index} className="border-black border rounded">
                        <div></div>
                      </th>
                    ) : (
                      <th key={index} className="border-black border rounded">
                        {innersan1d.map((san, index2) => (
                          <MiniRed key={`${index}-${index2}`} onClick={() => cambioSan3d(index, index2)}>
                            {san}
                          </MiniRed>
                        ))}
                      </th>
                    )
                  ))}
                </tr>
                {/*placa tabla 3 derecha------------------------------------------------------   */}

                <tr>
                  <th style={{ padding: '2px', width: '12.5%', fontWeight: 'bold', fontSize: '1.2em' }}></th>
                  {placa3d.map((innerplaca1d, index) => (
                    dientes2d[index][1] ? (
                      <th key={index} className="border-black border rounded">
                        <div></div>
                      </th>
                    ) : (
                      <th key={index} className="border-black border rounded">
                        {innerplaca1d.map((placa, index2) => (

                          <MiniBlue key={`${index}-${index2}`} onClick={() => cambioPlaca3d(index, index2)}>{placa}</MiniBlue>

                        ))}
                      </th>
                    )
                  ))}
                </tr>


                {/*caries 3 derecha------------------------------------------------------   */}

                <tr>
                  <th style={{ textAlign: 'right', padding: '2px', width: '12.5%', fontWeight: 'bold', fontSize: '1.2em' }}></th>
                  {car3d.map((innersan1i, index) => (
                    dientes2d[index][1] ? (
                      <th key={index} className="border-black border rounded">
                        <div></div>
                      </th>
                    ) : (
                      <th key={index} className="border-black border rounded">
                        {innersan1i.map((san, index2) => (
                          <MiniBlack key={`${index}-${index2}`} onClick={() => cambioCar3d(index, index2)}>
                            {san}
                          </MiniBlack>
                        ))}
                      </th>
                    )
                  ))}
                </tr>

                {/*restauracion 3 derecha------------------------------------------------------   */}

                <tr>
                  <th style={{ textAlign: 'right', padding: '2px', width: '12.5%', fontWeight: 'bold', fontSize: '1.2em' }}></th>
                  {res3d.map((innersan1i, index) => (
                    dientes2d[index][1] ? (
                      <th key={index} className="border-black border rounded">
                        <div></div>
                      </th>
                    ) : (
                      <th key={index} className="border-black border rounded">
                        {innersan1i.map((san, index2) => (
                          <MiniPurple key={`${index}-${index2}`} onClick={() => cambioRes3d(index, index2)}>
                            {san}
                          </MiniPurple>
                        ))}
                      </th>
                    )
                  ))}
                </tr>

                {/*supuracion 3 derecha------------------------------------------------------   */}

                <tr>
                  <th style={{ textAlign: 'right', padding: '2px', width: '12.5%', fontWeight: 'bold', fontSize: '1.2em' }}></th>
                  {sup3d.map((innersan1i, index) => (
                    dientes2d[index][1] ? (
                      <th key={index} className="border-black border rounded">
                        <div></div>
                      </th>
                    ) : (
                      <th key={index} className="border-black border rounded">
                        {innersan1i.map((san, index2) => (
                          <MiniYellow key={`${index}-${index2}`} onClick={() => cambioSup3d(index, index2)}>
                            {san}
                          </MiniYellow>
                        ))}
                      </th>
                    )
                  ))}
                </tr>


                {/*margen gingival tabla 3 derecha--------------------------------------------------   */}

                <tr>
                  <th style={{ padding: '2px', width: '12.5%', fontWeight: 'bold', fontSize: '1.2em' }}></th>

                  {mar3d.map((innermar1d, index) => (
                    <th key={index} className="border-black border" style={{ padding: '2px', width: '12.5%' }}>
                      {dientes2d[index][1] ? (
                        <div></div>
                      ) : (
                        innermar1d.map((margen, index2) => (
                          <input
                            key={`${index}-${index2}`}
                            style={{ width: '30%', height: '20px', fontSize: '12px', textAlign: "center" }}
                            value={margen}
                            onChange={(e) => cambioMar3d(e, index, index2)}
                            onFocus={(e) => e.target.value = ''}
                          />
                        ))
                      )}
                    </th>
                  ))}
                </tr>
                {/*profundidad al sondaje tabla 3 DERECHA------------------------------------------   */}

                <tr>
                  <th style={{ padding: '2px', width: '12.5%', fontWeight: 'bold', fontSize: '1.2em' }}></th>

                  {prof3d.map((innerprof1d, index) => (
                    <th key={index} className="border-black border" style={{ padding: '2px', width: '12.5%' }}>
                      {dientes2d[index][1] ? (
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
                            onChange={(e) => cambioProf3d(e, index, index2)}
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

                  {diff3d.map((innernicf1d, index) => (
                    <th key={index} className="border-black border bg-slate-200" style={{ padding: '2px', width: '12.5%' }}>
                      {dientes2d[index][1] ? (
                        <div></div>
                      ) : (
                        innernicf1d.map((prof, index2) => (
                          <span
                            key={`${index}-${index2}`}
                            style={{ width: '30%', display: 'inline-block', textAlign: "center", fontSize: '12px' }}
                          >
                            {prof < 0 ? (0) : (prof)}
                          </span>
                        ))
                      )}
                    </th>
                  ))}
                </tr>



              </tbody>
            </table>
          </div>

        </div>
        {/*IMAGEN 12----------------------------------------------------------   */}
        <div className="flex flex-row" style={{ justifyContent: 'center' }}>
          <div style={{
            display: 'flex',
            flexDirection: 'row', // Agrega esta propiedad para que los canvas se alineen horizontalmente
            justifyContent: 'center',
            width: '100%', // Establece el ancho del contenedor al 100% del padre
            height: 300, // Establece el alto del contenedor
            marginLeft: '-60px'
          }}>
            <canvas id="canvas2" width={2000} height={300} /> {/* Establece el alto del primer canvas */}
          </div>
        </div>


        <div className="flex flex-row" style={{ justifyContent: 'center' }}>



          {/*CUARTA TABLA IZQUIERDA-----------------------------------------------------------   */}
          <div className="rounded w-1/3 my-10 -mx-3" style={{ boxSizing: 'border-box' }}>

            {/*cabecera dela CUARTA tabla IZQUIERDA-----------------------------------------------------------   */}

            <table style={{ tableLayout: 'fixed', width: '100%' }}>
              <thead>
                <tr>
                  <th style={{ padding: '2px', width: '15.5%' }}></th></tr>
              </thead>

              <tbody>
                {/*NIC tabla 4 izquierda-------------------------------------------   */}

                <tr>
                  <th style={{ textAlign: 'right', padding: '2px', width: '12.5%', fontWeight: 'bold', fontSize: '1.2em' }}>{nombres1[7]}</th>

                  {diff4i.map((innernicf2i, index) => (
                    <th key={index} className="border-black border bg-slate-200" style={{ padding: '2px', width: '12.5%' }}>
                      {dientes2i[index][1] ? (
                        <div></div>
                      ) : (
                        innernicf2i.map((prof, index2) => (
                          <span
                            key={`${index}-${index2}`}
                            style={{ width: '30%', display: 'inline-block', textAlign: "center", fontSize: '12px' }}
                          >
                            {prof < 0 ? (0) : (prof)}
                          </span>
                        ))
                      )}
                    </th>
                  ))}
                </tr>

                {/*margen gingival tabla 4 IZQUIERDA------------------------------------------------------   */}

                <tr>
                  <th style={{ textAlign: 'right', padding: '2px', width: '12.5%', fontWeight: 'bold', fontSize: '1.2em' }}>{nombres1[5]}</th>

                  {mar4i.map((innermar2i, index) => (
                    <th key={index} className="border-black border" style={{ padding: '2px', width: '12.5%' }}>
                      {dientes2i[index][1] ? (
                        <div></div>
                      ) : (
                        innermar2i.map((margen, index2) => (
                          <input
                            key={`${index}-${index2}`}
                            style={{ width: '30%', height: '20px', fontSize: '12px', textAlign: "center" }}
                            value={margen}
                            onChange={(e) => cambioMar4i(e, index, index2)}
                            onFocus={(e) => e.target.value = ''}
                          />
                        ))
                      )}
                    </th>
                  ))}
                </tr>
                {/*profundidad al sondaje tabla 4 izquierda-------------------------------------------   */}

                <tr>
                  <th style={{ textAlign: 'right', padding: '2px', width: '12.5%', fontWeight: 'bold', fontSize: '1.2em' }}>{nombres1[6]}</th>

                  {prof4i.map((innerprof2i, index) => (
                    <th key={index} className="border-black border" style={{ padding: '2px', width: '12.5%' }}>
                      {dientes2i[index][1] ? (
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
                            onChange={(e) => cambioProf4i(e, index, index2)}
                            onFocus={(e) => e.target.value = ''}
                          />
                        ))
                      )}
                    </th>
                  ))}
                </tr>

                {/*sangrado al sondaje 4 izquierda------------------------------------------------------   */}

                <tr>
                  <th style={{ textAlign: 'right', padding: '2px', width: '12.5%', fontWeight: 'bold', fontSize: '1.2em' }}>{nombres1[3]}</th>
                  {san4i.map((innersan2i, index) => (
                    dientes2i[index][1] ? (
                      <th key={index} className="border-black border rounded">
                        <div></div>
                      </th>
                    ) : (
                      <th key={index} className="border-black border rounded">
                        {innersan2i.map((san, index2) => (
                          <MiniRed key={`${index}-${index2}`} onClick={() => cambioSan4i(index, index2)}>
                            {san}
                          </MiniRed>
                        ))}
                      </th>
                    )
                  ))}
                </tr>
                {/*placa tabla 4 izquierda------------------------------------------------------   */}

                <tr>
                  <th style={{ textAlign: 'right', padding: '2px', width: '12.5%', fontWeight: 'bold', fontSize: '1.2em' }}>{nombres1[4]}</th>
                  {placa4i.map((innerplaca2i, index) => (
                    dientes2i[index][1] ? (
                      <th key={index} className="border-black border rounded">
                        <div></div>
                      </th>
                    ) : (
                      <th key={index} className="border-black border rounded">
                        {innerplaca2i.map((placa, index2) => (

                          <MiniBlue key={`${index}-${index2}`} onClick={() => cambioPlaca4i(index, index2)}>{placa}</MiniBlue>

                        ))}
                      </th>
                    )
                  ))}
                </tr>


                {/*caries 4 izquierda------------------------------------------------------   */}

                <tr>
                  <th style={{ textAlign: 'right', padding: '2px', width: '12.5%', fontWeight: 'bold', fontSize: '1.2em' }}>{nombres1[8]}</th>
                  {car4i.map((innersan1i, index) => (
                    dientes2i[index][1] ? (
                      <th key={index} className="border-black border rounded">
                        <div></div>
                      </th>
                    ) : (
                      <th key={index} className="border-black border rounded">
                        {innersan1i.map((san, index2) => (
                          <MiniBlack key={`${index}-${index2}`} onClick={() => cambioCar4i(index, index2)}>
                            {san}
                          </MiniBlack>
                        ))}
                      </th>
                    )
                  ))}
                </tr>

                {/*restauracion 4 izquierda------------------------------------------------------   */}

                <tr>
                  <th style={{ textAlign: 'right', padding: '2px', width: '12.5%', fontWeight: 'bold', fontSize: '1.2em' }}>{nombres1[9]}</th>
                  {res4i.map((innersan1i, index) => (
                    dientes2i[index][1] ? (
                      <th key={index} className="border-black border rounded">
                        <div></div>
                      </th>
                    ) : (
                      <th key={index} className="border-black border rounded">
                        {innersan1i.map((san, index2) => (
                          <MiniPurple key={`${index}-${index2}`} onClick={() => cambioRes4i(index, index2)}>
                            {san}
                          </MiniPurple>
                        ))}
                      </th>
                    )
                  ))}
                </tr>

                {/*supuracion 4 izquierda------------------------------------------------------   */}

                <tr>
                  <th style={{ textAlign: 'right', padding: '2px', width: '12.5%', fontWeight: 'bold', fontSize: '1.2em' }}>{nombres1[10]}</th>
                  {sup4i.map((innersan1i, index) => (
                    dientes2i[index][1] ? (
                      <th key={index} className="border-black border rounded">
                        <div></div>
                      </th>
                    ) : (
                      <th key={index} className="border-black border rounded">
                        {innersan1i.map((san, index2) => (
                          <MiniYellow key={`${index}-${index2}`} onClick={() => cambioSup4i(index, index2)}>
                            {san}
                          </MiniYellow>
                        ))}
                      </th>
                    )
                  ))}
                </tr>

                {/*Furca 4 izquierda-----------------------------------------------------------   */}

                <tr style={{ height: '2px', margin: 0 }}>
                  <th style={{ textAlign: 'right', padding: '2px', width: '12.5%', fontWeight: 'bold', fontSize: '1.2em' }}>{nombres1[2]}</th>
                  {furca4i.map((furca1i, index) => (

                    <th key={index} className="border-black border rounded " style={{ fontWeight: 'bold', fontSize: '1.2em', maxHeight: '3px' }}>
                      {((dientes2i[index][1] || implante3[index]) || dientes2i[index][0] <= 45) ? (
                        <div></div>
                      ) :
                        (
                          <FurcaButton onClick={() => { cambiofurca4i(index) }}>{furca1i}</FurcaButton>

                        )
                      }

                    </th>
                  ))}
                </tr>



              </tbody>
            </table>
          </div >


          {/*CUARTA TABLA DERECHA-----------------------------------------------------------   */}
          <div className="rounded w-1/3 my-10 " style={{ boxSizing: 'border-box' }}>

            {/*cabecera dela cuarta tabla derecha------------------------------------------------   */}

            <table style={{ tableLayout: 'fixed', width: '100%' }}>
              <thead>
                <tr>
                  <th style={{ padding: '2px', width: '15.5%' }}></th></tr>
              </thead>
              <tbody>

                {/*NIC tabla 4 derecha-------------------------------------------   */}

                <tr>
                  <th style={{ padding: '2px', width: '12.5%', fontWeight: 'bold', fontSize: '1.2em' }}></th>

                  {diff4d.map((innernicf2d, index) => (
                    <th key={index} className="border-black border bg-slate-200" style={{ padding: '2px', width: '12.5%' }}>
                      {dientes2d[index][1] ? (
                        <div></div>
                      ) : (
                        innernicf2d.map((prof, index2) => (
                          <span
                            key={`${index}-${index2}`}
                            style={{ width: '30%', display: 'inline-block', textAlign: "center", fontSize: '12px' }}
                          >
                            {prof < 0 ? (0) : (prof)}
                          </span>
                        ))
                      )}
                    </th>
                  ))}
                </tr>

                {/*margen gingival tabla 4 derecha------------------------------------------------------   */}

                <tr>
                  <th style={{ padding: '2px', width: '12.5%', fontWeight: 'bold', fontSize: '1.2em' }}></th>

                  {mar4d.map((innermar2d, index) => (
                    <th key={index} className="border-black border" style={{ padding: '2px', width: '12.5%' }}>
                      {dientes2d[index][1] ? (
                        <div></div>
                      ) : (
                        innermar2d.map((margen, index2) => (
                          <input
                            key={`${index}-${index2}`}
                            style={{ width: '30%', height: '20px', fontSize: '12px', textAlign: "center" }}
                            value={margen}
                            onChange={(e) => cambioMar4d(e, index, index2)}
                            onFocus={(e) => e.target.value = ''}
                          />
                        ))
                      )}
                    </th>
                  ))}
                </tr>

                {/*profundidad al sondaje tabla 4 DERECHA------------------------------------------   */}

                <tr>
                  <th style={{ padding: '2px', width: '12.5%', fontWeight: 'bold', fontSize: '1.2em' }}></th>

                  {prof4d.map((innerprof2d, index) => (
                    <th key={index} className="border-black border" style={{ padding: '2px', width: '12.5%' }}>
                      {dientes2d[index][1] ? (
                        <div></div>
                      ) : (
                        innerprof2d.map((prof, index2) => (

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
                            onChange={(e) => cambioProf4d(e, index, index2)}
                            onFocus={(e) => e.target.value = ''}
                          />
                        ))
                      )}
                    </th>
                  ))}
                </tr>

                {/*sangrado al sondaje 4 derecha------------------------------------------------------   */}

                <tr>
                  <th style={{ padding: '2px', width: '12.5%', fontWeight: 'bold', fontSize: '1.2em' }}></th>
                  {san4d.map((innersan2d, index) => (
                    dientes2d[index][1] ? (
                      <th key={index} className="border-black border rounded">
                        <div></div>
                      </th>
                    ) : (
                      <th key={index} className="border-black border rounded">
                        {innersan2d.map((san, index2) => (
                          <MiniRed key={`${index}-${index2}`} onClick={() => cambioSan4d(index, index2)}>
                            {san}
                          </MiniRed>
                        ))}
                      </th>
                    )
                  ))}
                </tr>

                {/*placa tabla 4 derecha------------------------------------------------------   */}

                <tr>
                  <th style={{ padding: '2px', width: '12.5%', fontWeight: 'bold', fontSize: '1.2em' }}></th>
                  {placa4d.map((innerplaca2d, index) => (
                    dientes2d[index][1] ? (
                      <th key={index} className="border-black border rounded">
                        <div></div>
                      </th>
                    ) : (
                      <th key={index} className="border-black border rounded">
                        {innerplaca2d.map((placa, index2) => (

                          <MiniBlue key={`${index}-${index2}`} onClick={() => cambioPlaca4d(index, index2)}>{placa}</MiniBlue>

                        ))}
                      </th>
                    )
                  ))}
                </tr>



                {/*caries 4 derecha------------------------------------------------------   */}

                <tr>
                  <th style={{ textAlign: 'right', padding: '2px', width: '12.5%', fontWeight: 'bold', fontSize: '1.2em' }}></th>
                  {car4d.map((innersan1i, index) => (
                    dientes2d[index][1] ? (
                      <th key={index} className="border-black border rounded">
                        <div></div>
                      </th>
                    ) : (
                      <th key={index} className="border-black border rounded">
                        {innersan1i.map((san, index2) => (
                          <MiniBlack key={`${index}-${index2}`} onClick={() => cambioCar4d(index, index2)}>
                            {san}
                          </MiniBlack>
                        ))}
                      </th>
                    )
                  ))}
                </tr>

                {/*restauracion 4 derecha------------------------------------------------------   */}

                <tr>
                  <th style={{ textAlign: 'right', padding: '2px', width: '12.5%', fontWeight: 'bold', fontSize: '1.2em' }}></th>
                  {res4d.map((innersan1i, index) => (
                    dientes2d[index][1] ? (
                      <th key={index} className="border-black border rounded">
                        <div></div>
                      </th>
                    ) : (
                      <th key={index} className="border-black border rounded">
                        {innersan1i.map((san, index2) => (
                          <MiniPurple key={`${index}-${index2}`} onClick={() => cambioRes4d(index, index2)}>
                            {san}
                          </MiniPurple>
                        ))}
                      </th>
                    )
                  ))}
                </tr>

                {/*supuracion 3 derecha------------------------------------------------------   */}

                <tr>
                  <th style={{ textAlign: 'right', padding: '2px', width: '12.5%', fontWeight: 'bold', fontSize: '1.2em' }}></th>
                  {sup4d.map((innersan1i, index) => (
                    dientes2d[index][1] ? (
                      <th key={index} className="border-black border rounded">
                        <div></div>
                      </th>
                    ) : (
                      <th key={index} className="border-black border rounded">
                        {innersan1i.map((san, index2) => (
                          <MiniYellow key={`${index}-${index2}`} onClick={() => cambioSup4d(index, index2)}>
                            {san}
                          </MiniYellow>
                        ))}
                      </th>
                    )
                  ))}
                </tr>

                {/*Furca 4 derecha-----------------------------------------------------------   */}

                <tr style={{ height: '2px', margin: 0 }}>
                  <th style={{ padding: '2px', width: '12.5%', fontWeight: 'bold', fontSize: '1.2em' }}></th>
                  {furca4d.map((furca1d, index) => (

                    <th key={index} className="border-black border rounded " style={{ fontWeight: 'bold', fontSize: '1.2em', maxHeight: '3px' }}>
                      {((dientes2d[index][1] || implante4[index]) || dientes2d[index][0] < 36) ? (
                        <div></div>
                      ) :
                        (
                          <FurcaButton onClick={() => { cambiofurca4d(index) }}>{furca1d}</FurcaButton>

                        )
                      }

                    </th>
                  ))}
                </tr>



              </tbody>
            </table>

          </div >
        </div>

        <div className="flex flex-row mb-16" style={{ justifyContent: 'center', color: "white" }}>
          <Button2 onClick={() => onSubmit(patientData)}>Guardar Periodontograma</Button2>
        </div>






      </div >


    </>
  )
}

export default PeriogramaPage