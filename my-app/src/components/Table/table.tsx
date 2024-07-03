import React from "react";
import { useSelector } from "react-redux";
import { decToBinary } from "../../helpers/helpers";
import { MainState } from "../../models/models";
import "./table.scss";

export type TableProps = {};

type Props = TableProps & {};

function createData(name: string, value?: number | string, unit?: string) {
  return { name, value, unit };
}

const ParametersTable: React.FC<Props> = (props) => {
  // const data = useSelector((s: MainState) => s.plc_data)
  const PunctDeRoua = [createData("Max", -15, "°C"), createData("Curent", "-20", "°C")];
  const IntrareGazMurdar = [createData("Ideal", 15, "°C"), createData("Curent", "15", "°C")];
  const TegCurat = [createData("Max", 10, "°C"), createData("Curent", 5, "°C")];
  const Cooler = [createData("Gaz", 15, "°C"), createData("TEG", "20", "°C"), createData("Cooler", "OFF")];
  const Refierbator = [createData("Max", 204, "°C"), createData("Curent", "197", "°C")];
  const CameraDeArdere = [createData("T", 350, "°C"), createData("Vent", "ON")];

  return (
    <div>
      <div className="titleCategory">Punct de roua</div>
      <table className="dataTable">
        <tbody>
          {PunctDeRoua.map((input) => (
            <tr key={input.name}>
              <th>{input.name}</th>
              <th>{input.value}</th>
              <th>{input.unit}</th>
            </tr>
          ))}
        </tbody>
      </table>
      <div className="titleCategory">Coloana contactor</div>
      <div className="titleTable">Intrare gaz murdar</div>
      <table className="dataTable">
        <tbody>
          {IntrareGazMurdar.map((input) => (
            <tr key={input.name}>
              <th>{input.name}</th>
              <th>{input.value}</th>
              <th>{input.unit}</th>
            </tr>
          ))}
        </tbody>
      </table>
      <div className="titleTable">Intrare TEG curat</div>
      <table className="dataTable">
        <tbody>
          {TegCurat.map((input) => (
            <tr key={input.name}>
              <th>{input.name}</th>
              <th>{input.value}</th>
              <th>{input.unit}</th>
            </tr>
          ))}
        </tbody>
      </table>
      <div className="titleCategory">Cooler</div>
      <table className="dataTable">
        <tbody>
          {Cooler.map((input) => (
            <tr key={input.name}>
              <th>{input.name}</th>
              <th>{input.value}</th>
              <th>{input.unit}</th>
            </tr>
          ))}
        </tbody>
      </table>
      <div className="titleCategory">Refierbator</div>
      <table className="dataTable">
        <tbody>
          {Refierbator.map((input) => (
            <tr key={input.name}>
              <th>{input.name}</th>
              <th>{input.value}</th>
              <th>{input.unit}</th>
            </tr>
          ))}
        </tbody>
      </table>
      <div className="titleTable">Camera de ardere</div>
      <table className="dataTable">
        <tbody>
          {CameraDeArdere.map((input) => (
            <tr key={input.name}>
              <th>{input.name}</th>
              <th>{input.value}</th>
              <th>{input.unit}</th>
            </tr>
          ))}
        </tbody>
      </table>
      
    </div>
  );
};
export default ParametersTable;
