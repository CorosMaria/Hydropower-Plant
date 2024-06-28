import React from "react";
import Image from "../Image/image";
import "./Coloana2.scss";

export type Coloana2Props = {};

const Coloana2: React.FC<Coloana2Props> = (props) => {
  return (
    <div className="coloana2">
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
        componentName={"Filtru"}
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
        componentName={"Filtru"}
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
        componentName={"Filtru"}
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
