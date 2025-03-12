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
import { Textonegro } from "../components/ui/Textonegro";

export function VerExamen() {
  const location = useLocation();
  const { periodontograma, paciente } = location.state;
  const patient = ""

  //DATOS PRIMERAS 2 TABLAS --------------------------------------------------------------------------
  const nombres1 = ["Movilidad", "Implante", "Furca", "B.O.P.", "Placa", "M.G.", "P.S.", "N.I.C.", "C.R.", "R.M.A", "Sup."]

  const dientes1i = periodontograma.dientes1i;
  const dientes1d = periodontograma.dientes1d;
  const dientes2i = periodontograma.dientes2i;
  const dientes2d = periodontograma.dientes2d;

  const movilidad1 = periodontograma.movilidad1;
  const movilidad2 = periodontograma.movilidad2;
  const movilidad3 = periodontograma.movilidad3;
  const movilidad4 = periodontograma.movilidad4;

  const implante1 = periodontograma.implante1;
  const implante2 = periodontograma.implante2;
  const implante3 = periodontograma.implante3;
  const implante4 = periodontograma.implante4;

  const furca1i = periodontograma.furca1i;
  const furca1d = periodontograma.furca1d;
  const furca2i = periodontograma.furca2i;
  const furca2d = periodontograma.furca2d;
  const furca3i = periodontograma.furca3i;
  const furca3d = periodontograma.furca3d;
  const furca4i = periodontograma.furca4i;
  const furca4d = periodontograma.furca4d;

  const san1i = periodontograma.san1i;
  const san1d = periodontograma.san1d;
  const san2i = periodontograma.san2i;
  const san2d = periodontograma.san2d;
  const san3i = periodontograma.san3i;
  const san3d = periodontograma.san3d;
  const san4i = periodontograma.san4i;
  const san4d = periodontograma.san4d;

  const placa1i = periodontograma.placa1i;
  const placa1d = periodontograma.placa1d;
  const placa2i = periodontograma.placa2i;
  const placa2d = periodontograma.placa2d;
  const placa3i = periodontograma.placa3i;
  const placa3d = periodontograma.placa3d;
  const placa4i = periodontograma.placa4i;
  const placa4d = periodontograma.placa4d;

  const mar1i = periodontograma.mar1i;
  const mar1d = periodontograma.mar1d;
  const mar2i = periodontograma.mar2i;
  const mar2d = periodontograma.mar2d;
  const mar3i = periodontograma.mar3i;
  const mar3d = periodontograma.mar3d;
  const mar4i = periodontograma.mar4i;
  const mar4d = periodontograma.mar4d;

  const prof1i = periodontograma.prof1i;
  const prof1d = periodontograma.prof1d;
  const prof2i = periodontograma.prof2i;
  const prof2d = periodontograma.prof2d;
  const prof3i = periodontograma.prof3i;
  const prof3d = periodontograma.prof3d;
  const prof4i = periodontograma.prof4i;
  const prof4d = periodontograma.prof4d;

  const diff1i = periodontograma.diff1i;
  const diff1d = periodontograma.diff1d;
  const diff2i = periodontograma.diff2i;
  const diff2d = periodontograma.diff2d;
  const diff3i = periodontograma.diff3i;
  const diff3d = periodontograma.diff3d;
  const diff4i = periodontograma.diff4i;
  const diff4d = periodontograma.diff4d;

  const car1i = periodontograma.car1i;
  const car1d = periodontograma.car1d;
  const car2i = periodontograma.car2i;
  const car2d = periodontograma.car2d;
  const car3i = periodontograma.car3i;
  const car3d = periodontograma.car3d;
  const car4i = periodontograma.car4i;
  const car4d = periodontograma.car4d;

  const res1i = periodontograma.res1i;
  const res1d = periodontograma.res1d;
  const res2i = periodontograma.res2i;
  const res2d = periodontograma.res2d;
  const res3i = periodontograma.res3i;
  const res3d = periodontograma.res3d;
  const res4i = periodontograma.res4i;
  const res4d = periodontograma.res4d;

  const sup1i = periodontograma.sup1i;
  const sup1d = periodontograma.sup1d;
  const sup2i = periodontograma.sup2i;
  const sup2d = periodontograma.sup2d;
  const sup3i = periodontograma.sup3i;
  const sup3d = periodontograma.sup3d;
  const sup4i = periodontograma.sup4i;
  const sup4d = periodontograma.sup4d;


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


  const [cantDientesNIC, setcantDientesNIC] = useState(0)
  const [porcentajeAfectados, setporcentajeAfectados] = useState(0)

  const contarDientesAfectados = (dientes, nic) => {
    let cantidad = 0
    for (let i = 0; i < dientes1i.length; i++) {
      if (!dientes[i][1] && (nic[i][0] >= 1 || nic[i][1] >= 1 || nic[i][2] >= 1))
        cantidad++
    }
    return cantidad
  }
  useEffect(() => {
    let cantidad = 0
    let porcentaje = 0
    cantidad = cantidad
      + contarDientesAfectados(dientes1i, diff1i) + contarDientesAfectados(dientes1i, diff2i)
      + contarDientesAfectados(dientes1d, diff1d) + contarDientesAfectados(dientes1d, diff2d)
      + contarDientesAfectados(dientes2i, diff3i) + contarDientesAfectados(dientes2i, diff4i)
      + contarDientesAfectados(dientes2d, diff3d) + contarDientesAfectados(dientes2i, diff4d)
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





  return (
    <>

      <div className="mb-3 " style={{ color: 'black ', display: 'flex', flexWrap: 'wrap', justifyContent: 'center', }}>

        <div className="w-4/5" style={{ width: "80%" }}>
          <Subtitulo>VISUALIZAR PERIODONTOGRAMA</Subtitulo>
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
            <Fila>
              <Textorosa>Fecha del exámen:</Textorosa>
              <h1 className="text-xs block my-1  font-roboto"> {new Date(periodontograma.createdAt).toLocaleDateString('es-ES', {
                year: 'numeric',
                month: '2-digit',
                day: '2-digit',
              })}</h1>
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

        {/*datos calculados----------------------------------------------------------   */}
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
                <Textonegro>{cantDientesNIC} unidades</Textonegro>
              </div>
              <div className="flex gap-2">
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








      </div >


    </>
  )
}

