import React from "react";
import Image from "../Image/image";
import "./Coloana1.scss";
import Canvas from "../Canvas/canvas";

export type Coloana1Props = {};

const Coloana1: React.FC<Coloana1Props> = (props) => {
  const drawPipe1 = (context: CanvasRenderingContext2D) => {
    //coloana-contactor => schimbator de caldura - GAZ SARAC
    //orizontala
    context.fillStyle = "#FFEA00";
    context.fillRect(360, 5, 100, 10);
    //verticala
    context.fillRect(460, 5, 10, 40);
    //orizontala
    context.fillRect(460, 45, 40, 10);
    context.save();
  };

  const drawPipe2 = (context: CanvasRenderingContext2D) => {
    //coloana-contactor => schimbator de caldura - TEG SARAC
    //orizontala
    context.fillStyle = "#9fe855";
    context.fillRect(380, 45, 50, 10);
    //verticala
    context.fillRect(430, 45, 10, 70);
    //orizontala
    context.fillRect(430, 110, 70, 10);
    context.save();
  };

  const drawPipe3 = (context: CanvasRenderingContext2D) => {
    //schimbator-de-caldura => iesire - GAZ SARAC
    context.fillStyle = "#FFEA00";

    //orizontala
    context.fillRect(540, 85, 200, 10);
    //verticala
    context.fillRect(730, 0, 10, 95);
    //orizontala
    context.fillRect(740, 0, 900, 10);
    context.save();
  };

  const drawPipe4 = (context: CanvasRenderingContext2D) => {
    //schimbator-de-caldura => pompe - GAZ SARAC
    context.fillStyle = "#9fe855";

    //orizontala
    context.fillRect(540, 15, 150, 10);
    //verticala stanga
    context.fillRect(580, 15, 10, 165);
    //verticala dreapta
    context.fillRect(690, 15, 10, 190);
    //orizontala
    context.fillRect(580, 180, 20, 10);
    context.save();
  };

  const drawPipe5 = (context: CanvasRenderingContext2D) => {
    //pompe => Cooler - GAZ SARAC
    context.fillStyle = "#9fe855";

    //verticala stanga
    context.fillRect(605, 190, 10, 150);
    //verticala dreapta
    context.fillRect(705, 190, 10, 150);
    //orizontala
    context.fillRect(560, 330, 150, 10);
    context.save();
  };

  const drawPipe6 = (context: CanvasRenderingContext2D) => {
    //coloana contactor => intrare - GAZ MURDAR
    context.fillStyle = "#e1a322";

    //orizontala
    context.fillRect(50, 197, 250, 10);
    context.save();
  };

  const drawPipe7 = (context: CanvasRenderingContext2D) => {
    //coloana contactor => VB - APA
    context.fillStyle = "#1918ad";

    //orizontala
    context.fillRect(80, 250, 265, 10);
    //verticala
    context.fillRect(80, 260, 10, 450);
    //orizontala - iesire
    context.fillRect(20, 360, 180, 10);
    //verticala
    context.fillRect(190, 350, 10, 10);
    //orizontala
    context.fillRect(90, 700, 1600, 10);
    //verticala colt dreapta
    context.fillRect(1690, 80, 10, 630);
    //orizontala
    context.fillRect(1170, 80, 520, 10);
    //verticala intrare refierbator
    context.fillRect(1170, 80, 10, 100);

    context.fillStyle = "#0c5714";
    //orizontala refierbator - filtru jos
    context.fillRect(1070, 190, 70, 10);

    //verticala in sus refierbator
    context.fillRect(1070, 70, 10, 120);

     //orizontala refierbator - filtru jos
     context.fillRect(1070, 60, 660, 10);

     //verticala in sus refierbator
    context.fillRect(1720, 60, 10, 580);

    //orizontala refierbator - filtru jos
    context.fillRect(1300, 640, 430, 10);
    context.save();
  };

  const drawPipe8 = (context: CanvasRenderingContext2D) => {
    // VB => filtre - TEG MURDAR
    context.fillStyle = "#0c5714";

    //verticala
    context.fillRect(230, 350, 10, 330);
    //orizontala
    context.fillRect(230, 400, 70, 10);
    //orizontala
    context.fillRect(230, 450, 120, 10);
    //orizontala
    context.fillRect(230, 520, 70, 10);
     //orizontala
     context.fillRect(230, 680, 700, 10);
      //orizontala
      context.fillRect(930, 600, 120, 10);
     //verticala teg murdar spre filtru 1
    context.fillRect(930, 610, 10, 80);
    //filtru 1 - filtru 2
     //orizontala intre filtre din dreapta jos
     context.fillRect(1100, 600, 20, 10);
     //verticala teg murdar spre filtru 1
    context.fillRect(1110, 610, 10, 10);
    //orizontala intre filtre din dreapta jos

    //filtru 2 - filtru 3
    //orizontala intre filtre din dreapta jos
    context.fillRect(1200, 620, 40, 10);
    //verticala teg murdar spre filtru 3
   context.fillRect(1110, 610, 10, 10);
   //orizontala intre filtre din dreapta jos
    context.fillRect(1110, 620, 40, 10);
    //verticala teg murdar spre filtru 3
   context.fillRect(1235, 620, 10, 30);
    context.save();
  };

  const drawPipe9 = (context: CanvasRenderingContext2D) => {
    //coloana contactor => intrare - GAZ MURDAR
    context.fillStyle = "#0c5714";

    //orizontala
    context.fillRect(379, 200, 50, 10);
    //verticala
    context.fillRect(420, 210, 10, 80);
    //orizontala
    context.fillRect(230, 285, 200, 10);
    context.save();
  };

  const drawPipe10 = (context: CanvasRenderingContext2D) => {
    //cooler => pompe - TEG SARAC
    context.fillStyle = "#9fe855";

    //orizontala
    context.fillRect(470, 370, 50, 10);
    //verticala stanga
    context.fillRect(460, 370, 10, 220);
    //orizontala
    context.fillRect(460, 520, 230, 10);
    //orizontala
    context.fillRect(460, 590, 150, 10);
    //verticala dreapta
    context.fillRect(690, 520, 10, 100);

    //pompe jos => schimbator de caldura TEG-TEG
    //verticala pompa stanga jos
    context.fillRect(635, 610, 10, 40);
    //orizontala pompa dreapta jos
    context.fillRect(720, 610, 90, 10);
    //orizontala pompa stanga jos
    context.fillRect(635, 650, 170, 10);
    //verticala pompa dreapta jos
    context.fillRect(800, 560, 10, 100);

    // pompa dreapta jos => schimbator de caldura TEG-TEG
    //orizontala pompa dreapta jos spre schimbator de caldura TEG-TEG
    context.fillRect(800, 550, 250, 10);
    //verticala spre schimbator de caldura TEG-TEG - 1
    context.fillRect(1050, 550, 10, 50);

    //verticala spre schimbator de caldura TEG-TEG - 2 din schimbator 1
    context.fillRect(1090, 610, 10, 50);
    //orizontala spre schimbator de caldura TEG-TEG - 2 din schimbator 1
    context.fillRect(1100, 650, 40, 10);
    //verticala spre schimbator de caldura TEG-TEG - 2 din schimbator 1
    context.fillRect(1130, 580, 10, 70);
    //orizontala spre schimbator de caldura TEG-TEG - 2 din schimbator 1
    context.fillRect(1130, 580, 60, 10);
    //verticala spre schimbator de caldura TEG-TEG - 2 din schimbator 1
    context.fillRect(1190, 580, 10, 100);

    //orizontala spre schimbator de caldura TEG-TEG - 3 din schimbator 2
    context.fillRect(1190, 670, 30, 10);
    //verticala spre schimbator de caldura TEG-TEG - 2 din schimbator 1
    context.fillRect(1220, 580, 10, 100);
    //orizontala spre schimbator de caldura TEG-TEG - 3 din schimbator 2
    context.fillRect(1220, 580, 70, 10);
    //verticala spre schimbator de caldura TEG-TEG - 2 din schimbator 1
    context.fillRect(1280, 580, 10, 100);

    // schimbator de caldura 3 dreapta jos => acumulator
    //orizontala sschimbator de caldura 3 dreapta jos => acumulator
    context.fillRect(1280, 680, 50, 10);
    //verticala schimbator de caldura 3 dreapta jos => acumulator
    context.fillRect(1320, 510, 10, 180);
    //orizontala schimbator de caldura 3 dreapta jos => acumulator
    context.fillRect(1000, 500, 330, 10);
    //verticala schimbator de caldura 3 dreapta jos => acumulator
    context.fillRect(1000, 370, 10, 130);

    // chimicale => acumlator
    context.fillStyle = "#a118b3";
    //orizontala chimicale => acumlator
    context.fillRect(1070, 480, 320, 10);
    //verticala
    context.fillRect(1060, 340, 10, 150);

    // pompa dreapta jos colt => chimicale
    context.fillRect(1500, 490, 10, 120);
    //orizontala
    context.fillRect(1500, 610, 50, 10);
    //orizontala
    context.fillRect(1440, 490, 60, 10);

    //ventilator => camera de ardere
    context.fillStyle = "#3f3e3f";
    context.fillRect(1510, 310, 80, 10);

    // camera de ardere => refierbator
    context.fillStyle = "#ce1200";
    context.fillRect(1240, 300, 60, 10);
    context.save();
  };

  return (
    <div className="coloana1">
      <Image
        image="Coloana contactor.png"
        altText="Coloana contactor"
        componentClassName="ColoanaContactor-Component"
        imageClassName="ColoanaContactor-Image"
        value={200}
        unit={"rot/min"}
        showComponentName
        onTop
        componentName={"Coloana contactor"}
      />
      <Canvas draw={drawPipe1} style={{ position: "absolute" }} />
      <Canvas draw={drawPipe2} style={{ position: "absolute" }} />
      <Canvas draw={drawPipe6} style={{ position: "absolute" }} />
      <Canvas draw={drawPipe7} style={{ position: "absolute" }} />
      <Canvas draw={drawPipe8} style={{ position: "absolute" }} />
      <Canvas draw={drawPipe9} style={{ position: "absolute" }} />
      <Canvas draw={drawPipe10} style={{ position: "absolute" }} />
      <img src="arrow.png" className="arrow" id="arrow1"/>
      <Image
        image="Schimbator-de-caldura.png"
        altText="Schimbator de caldura"
        componentClassName="Schimbator-de-caldura-Component"
        imageClassName="Schimbator-de-caldura-Image"
        value={200}
        unit={"rot/min"}
        showComponentName
        componentName={"Schimbator de caldura"}
        onTop={true}
      />
      <Canvas draw={drawPipe3} style={{ position: "absolute" }} />
      <Canvas draw={drawPipe4} style={{ position: "absolute" }} />
      <Canvas draw={drawPipe5} style={{ position: "absolute" }} />
      <Image
        image="Pompa.png"
        altText="Pompa"
        componentClassName="Pompa1-Component"
        imageClassName="Pompa-Image"
        value={200}
        unit={"rot/min"}
        showComponentName
        componentName={"Pompa"}
        onTop={true}
      />
      <Image
        image="Pompa.png"
        altText="Pompa"
        componentClassName="Pompa2-Component"
        imageClassName="Pompa-Image"
        value={200}
        unit={"rot/min"}
        showComponentName
        componentName={"Pompa"}
        onTop={true}
      />
      <Image
        image="Separator-trifazic-VB.png"
        altText="VB"
        componentClassName="VB-Component"
        imageClassName="VB-Image"
        value={200}
        unit={"rot/min"}
        showComponentName
        componentName={"VB"}
        onTop={true}
      />
      <Image
        image="Cooler.png"
        altText="SchimbatorCaldura"
        componentClassName="Cooler-Component"
        imageClassName="Cooler-Image"
        value={200}
        unit={"rot/min"}
        showComponentName
        componentName={"Cooler"}
        onTop={true}
      />
      <Image
        image="Filtru.png"
        altText="Filtru"
        componentClassName="Filtru1-Component"
        imageClassName="Filtru-Image"
        value={200}
        unit={"rot/min"}
        showComponentName
        componentName={"Filtru 1"}
        onTop={true}
      />
      <Image
        image="Filtru.png"
        altText="Filtru"
        componentClassName="Filtru2-Component"
        imageClassName="Filtru-Image"
        value={200}
        unit={"rot/min"}
        showComponentName
        componentName={"Filtru 2"}
        onTop={true}
      />
      <Image
        image="Filtru.png"
        altText="Filtru"
        componentClassName="Filtru3-Component"
        imageClassName="Filtru-Image"
        value={200}
        unit={"rot/min"}
        showComponentName
        componentName={"Filtru"}
        onTop={true}
      />
      <Image
        image="Pompa.png"
        altText="Pompa"
        componentClassName="Pompa3-Component"
        imageClassName="PompaInvers-Image"
        value={200}
        unit={"rot/min"}
        showComponentName
        componentName={"Pompa"}
        onTop={true}
      />
      <Image
        image="Pompa.png"
        altText="Pompa"
        componentClassName="Pompa4-Component"
        imageClassName="PompaInvers-Image"
        value={200}
        unit={"rot/min"}
        showComponentName
        componentName={"Pompa"}
        onTop={true}
      />
    </div>
  );
};

export default Coloana1;
