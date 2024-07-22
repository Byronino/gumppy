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



  //MARGEN GINGIVAL SEGUNDA TABLA IZQUIERDA
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










  //DATOS SEGUNDA TABLA DERECHA
  //MARGEN GINGIVAL SEGUNDA TABLA IZQUIERDA
  const [mar2d, setmar2d] = useState([[0, 0, 0], [0, 0, 0], [0, 0, 0], [0, 0, 0], [0, 0, 0], [0, 0, 0], [0, 0, 0], [0, 0, 0]])
  const cambioMar2d = (e, index, n) => {
    const newArray = mar2d.map((innerArray, i) => {
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
    setmar2d(newArray);
  };
  //PrOFUNDIDAD AL SONDAJE SEGUNDA TABLA DERECHA
  const [prof2d, setprof2d] = useState([[0, 0, 0], [0, 0, 0], [0, 0, 0], [0, 0, 0], [0, 0, 0], [0, 0, 0], [0, 0, 0], [0, 0, 0]])
  const cambioProf2d = (e, index, n) => {
    const newArray = prof2d.map((innerArray, i) => {
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
  const newArray = mar3i.map((innerArray, i) => {
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
  setmar3i(newArray);
};

//PrOFUNDIDAD AL SONDAJE TERCER TABLA IZQUIERDA
const [prof3i, setprof3i] = useState([[0, 0, 0], [0, 0, 0], [0, 0, 0], [0, 0, 0], [0, 0, 0], [0, 0, 0], [0, 0, 0], [0, 0, 0]])
const cambioProf3i = (e, index, n) => {
  const newArray = prof3i.map((innerArray, i) => {
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
  const newArray = mar3d.map((innerArray, i) => {
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
  setmar3d(newArray);
};

//PrOFUNDIDAD AL SONDAJE TERCER TABLA DERECHA
const [prof3d, setprof3d] = useState([[0, 0, 0], [0, 0, 0], [0, 0, 0], [0, 0, 0], [0, 0, 0], [0, 0, 0], [0, 0, 0], [0, 0, 0]])
const cambioProf3d = (e, index, n) => {
  const newArray = prof3d.map((innerArray, i) => {
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
    dientes1i: dientes1i,
    movilidad1: movilidad1,
    implante1: implante1,
    san1i: san1i
  };
  useEffect(() => {
    const patientData = {
      dientes1i: dientes1i,
      movilidad1: Number(movilidad1),
      implante1: implante1,
      san1i: san1i
    };
    
  }, [dientes1i, movilidad1, implante1, san1i]);

  return (
    <>

      <div className="mb-16 color: black border rounded bg-white" style={{ color: 'black ', display: 'flex', flexWrap: 'wrap', justifyContent: 'center', borderColor: '#fc9099', borderWidth: '10px', padding: '0' }}>
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

          {/*cabecera dela primera tabla derecha--------------------------------------------------   */}

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
        </div>

        {/*IMAGEN PREVISIONAL -----------------------------------------------------------   */}
        <div className="my-200 display-flex">
          <img src={placeholder} width="100%" height="100" />
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
                            {prof}
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

        {/*IMAGEN 2 PREVISIONAL----------------------------------------------------------   */}
        <div className="my-200 display-flex">
          <img src={borde} width="100%" height="100" />
        </div>

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

        </div>
        {/*IMAGEN 3 PREVISIONAL----------------------------------------------------------   */}
        <div className="my-200 display-flex">
          <img src={placeholder2} width="100%" height="100" />
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
                            {prof}
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



        {/**<button onClick={() => onSubmit(patientData)}>Save Patient Data</button>**/}



      </div >


    </>
  )
}

export default PeriogramaPage