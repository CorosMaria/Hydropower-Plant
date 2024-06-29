import React from "react";
import Image from "../Image/image";
import "./Coloana2.scss";

export type Coloana2Props = {};

const Coloana2: React.FC<Coloana2Props> = (props) => {
  return (
    <div className="coloana2">
       {/* schimbator de caldura - iesire - galben */}
       <img src="arrowBlack.png" className="arrow" id="arrow5"/>
       {/* schimbator de caldura TEG -TEG - pompe jos - verde deschis  */}
       <img src="arrowBlackLeft.png" className="arrow" id="arrow11"/>
       {/* Schimbatoare de caldura TEG - TEG spre refierbator - verde inchis */}
       <img src="arrow.png" className="arrow" id="arrow18"/>
       {/* Teg - teg - refierbator veriticala verde inchis */}
       <img src="arrowUp.png" className="arrow" id="arrow19"/>
       {/* apa verticala - albastru spre refierbator */}
       <img src="arrowDown.png" className="arrow" id="arrow20"/>
       {/* Chimicale spre acumulator - mov  */}
       <img src="arrowReverse.png" className="arrow" id="arrow21"/>
       {/* apa - spre refierbator orizontala */}
       <img src="arrow.png" className="arrow" id="arrow22"/>
       {/* teg murdar spre refierbator orizontala */}
       <img src="arrowReverse.png" className="arrow" id="arrow23"/>
       {/* Acumulator - separator de caldura teg - teg - verde deschis */}
       <img src="arrowBlackDown.png" className="arrow" id="arrow24"/>
      <Image
        image="Refierbator.png"
        altText="Refierbator"
        componentClassName="Refierbator-Component"
        imageClassName="Refierbator-Image"
        value={200}
        unit={"rot/min"}
        showComponentName
        componentName={"Refierbator"}
        onTop={true}
      />
        <Image
        image="Camera-de-ardere.png"
        altText="Camera-de-ardere"
        componentClassName="Camera-de-ardere-Component"
        imageClassName="Camera-de-ardere-Image"
        value={200}
        unit={"rot/min"}
        showComponentName
        componentName={"Camera-de-ardere"}
        onTop={true}
      />
       <Image
        image="Acumulator.png"
        altText="Acumulator"
        componentClassName="Acumulator-Component"
        imageClassName="Acumulator-Image"
        value={200}
        unit={"rot/min"}
      />
       <Image
        image="Ventilator.png"
        altText="Ventilator"
        componentClassName="Ventilator-Component"
        imageClassName="Ventilator-Image"
        value={200}
        unit={"rot/min"}
        showComponentName
        componentName={"Ventilator"}
        onTop={true}
      />
      <div style={{marginLeft: "330px", marginTop: "250px", position: "absolute"}}>Separator de caldura TEG-TEG</div>
       <Image
        image="Chimicale.jpg"
        altText="Chimicale"
        componentClassName="Chimicale-Component"
        imageClassName="Chimicale-Image"
        value={200}
        unit={"rot/min"}
        showComponentName
        componentName={"Chimicale"}
        onTop={true}
      />
      <Image
        image="SchimbatorCaldura.png"
        altText="Filtru"
        componentClassName="Filtru1Col2-Component"
        imageClassName="Filtru-Image"
        value={200}
        unit={"rot/min"}
        showComponentName
        componentName={"."}
        onTop={true}
      />
      
      <Image
        image="SchimbatorCaldura.png"
        altText="Filtru"
        componentClassName="Filtru2Col2-Component"
        imageClassName="Filtru-Image"
        value={200}
        unit={"rot/min"}
        showComponentName
        componentName={"."}
        onTop={true}
      />
      <Image
        image="SchimbatorCaldura.png"
        altText="Filtru"
        componentClassName="Filtru3Col2-Component"
        imageClassName="Filtru-Image"
        value={200}
        unit={"rot/min"}
        showComponentName
        componentName={"."}
        onTop={true}
      />
       <Image
        image="Pompa.png"
        altText="Pompa"
        componentClassName="Pompa1Col2-Component"
        imageClassName="Pompa-Image"
        value={200}
        unit={"rot/min"}
        showComponentName
        componentName={"Pompa"}
        onTop={true}
      />
    </div>
  );
};

export default Coloana2;
