import React from 'react'
import { useSelector } from 'react-redux'
import { MainState } from '../../models/models'
import './controlPanel.scss'

export type ControlPanelProps = {
}

type Props = ControlPanelProps & {

}

const ControlPanel: React.FC<Props> = (props) => {
    const operatingMode = useSelector((s: MainState) => s.operatingMode)
    const systemOn = useSelector((s: MainState) => s.systemOn)
    const lagare = useSelector((s: MainState) => s.lagare)
    const ventilation = useSelector((s: MainState) => s.ventilation)

    const renderMode = () => {

        return (
            <div style={{ display: "inline-flex" }}>
                <p>Manual</p>
                {operatingMode ? <img
                    src="disabled.png"
                    alt="Disabled Mode"
                    className="modFunctionareImg" /> :
                    <img
                        src="enabled.png"
                        alt="Enabled Mode"
                        className="modFunctionareImg"
                    />}
                <p>Automat</p>
                {operatingMode ? <img
                    src="enabled.png"
                    alt="Enabled Mode"
                    className="modFunctionareImg" /> :
                    <img
                        src="disabled.png"
                        alt="Disabled Mode"
                        className="modFunctionareImg"
                    />}

            </div>
        )
    }

    const renderOnOff = () => {
        return (
            <div style={{ display: "inline-flex" }}>
                <p>On</p>
                {systemOn ? <img
                    src="enabled.png"
                    alt="Enabled Mode"
                    className="modFunctionareImg" /> :
                    <img
                        src="disabled.png"
                        alt="Disabled Mode"
                        className="modFunctionareImg"
                    />}
                <p>Off</p>
                {systemOn ? <img
                    src="disabled.png"
                    alt="Disabled Mode"
                    className="modFunctionareImg" /> :
                    <img
                        src="stopped.png"
                        alt="Stopped Mode"
                        className="modFunctionareImg"
                    />}

            </div>
        )
    }

    const renderOilingIndicators = () => {
        return (
            <div style={{ display: "inline-flex" }}>
                <p>LT1</p>
                {lagare.lagar1 ? <img
                    src="enabled.png"
                    alt="Enabled Mode"
                    className="modFunctionareImg" /> :
                    <img
                        src="disabled.png"
                        alt="Disabled Mode"
                        className="modFunctionareImg"
                    />}
                <p>LT2</p>
                {lagare.lagar2 ? <img
                    src="enabled.png"
                    alt="Enabled Mode"
                    className="modFunctionareImg" /> :
                    <img
                        src="disabled.png"
                        alt="Disabled Mode"
                        className="modFunctionareImg"
                    />}
            </div>
        )
    }

    const renderVentilation = () => {
        return (
            <div style={{ display: "inline-flex" }}>
                <p>Sistemul de ventilatie</p>
                {ventilation ? <img
                    src="enabled.png"
                    alt="Enabled Mode"
                    className="modFunctionareImg" /> :
                    <img
                        src="disabled.png"
                        alt="Disabled Mode"
                        className="modFunctionareImg"
                    />}
            </div>
        )
    }


    return (
        <div className="controlPanel">
            <p>Regim de functionare</p>
            {renderMode()}
            <p>Pornire/oprire instalatie</p>
            {renderOnOff()}
            <p>Sistemul de ungere</p>
            {renderOilingIndicators()}
            {renderVentilation()}
        </div>
    )
}

export default ControlPanel