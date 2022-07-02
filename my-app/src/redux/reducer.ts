import { findChange, decToBinary, isEqual, convertValue } from "../helpers/helpers"
import { history, MainState, objectData } from "../models/models"

export type MainActionType =
    { type: "DATA_LOADING" } |
    { type: "DATA_LOADED", payload: objectData } |
    { type: "TURN_ON" } |
    { type: "TURN_OFF" } |
    { type: "VALVE1_ONOFF", payload: boolean } |
    { type: "VALVE2_ONOFF", payload: boolean }

const DEFAULT_STATE: MainState = {
    systemOn: false,
    plc_data: {
        Remote: 1,
        Digi: 0,
        Com: 0,
        AI0: 0,
        AI1: 0,
        AI2: 0,
        AI3: 0,
        AI4: 0,
        AI5: 0,
        AI6: 0,
        AI7: 0,
        AO0: 0,
        AO1: 0,
        AO2: 0,
        AO3: 0
    },
    loading: false,
    valves: {
        valve1On: false,
        valve2On: false
    },
    history: [{
        id: 0,
        date: "5/04/2022",
        time: "11:16:02 PM",
        type: "Informare",
        component: "Instalatie",
        text: "Instalatia s-a initializat.",
    }],
    buttons: {
        B0: 0,
        B1: 0,
        B2: 0,
        B3: 0,
        B4: 0,
        B5: 0,
        B6: 0,
        B7: 0,
        B8: 0,
        B9: 0,
        B10: 0,
        B11: 0,
        B12: 0,
        B13: 0,
        B14: 0,
        B15: 0
    },
    leds: {
        C0: 0,
        C1: 0,
        C2: 0,
        C3: 0,
        C4: 0,
        C5: 0,
        C6: 0,
        C7: 0,
        C8: 0,
        C9: 0,
        C10: 0,
        C11: 0,
        C12: 0,
        C13: 0,
        C14: 0,
        C15: 0
    },
    operatingMode: false,
    lagare: {
        lagar1: false,
        lagar2: false
    },
    ventilation: false
}

export function reducer(state = { ...DEFAULT_STATE }, action: MainActionType): MainState {
    switch (action.type) {
        case "DATA_LOADING": {
            return {
                ...state,
                loading: true
            }
        }
        case "DATA_LOADED": {
            const data = action.payload
            let history: history = {
                id: 1,
                date: "",
                time: "",
                type: "Informare",
                component: "",
                text: ""
            }

            if (isEqual(data, state.plc_data)) {
                return state
            }
            else {
                const change = findChange(state.plc_data, data)
                if (change) {
                    let text = ""
                    let componenta = "Potentiometru neatribuit"
                    switch (change.key) {
                        case "AI0": {
                            text = "S-a modificat nivelul apei din baraj din " + convertValue(state.plc_data.AI0, 0, 100) + " in " + convertValue(change.value, 0, 100)
                            componenta = "Baraj"
                            break
                        }
                        case "AI1": {
                            text = "S-a modificat deschidere valvei 1 din " + convertValue(state.plc_data.AI1, 0, 100) + " in " + convertValue(change.value, 0, 100)
                            componenta = "Valva"
                            break
                        }
                        case "AI2": {
                            text = "S-a modificat temperatura angrenajului din " + convertValue(state.plc_data.AI2, 0, 100) + " in " + convertValue(change.value, 0, 100)
                            componenta = "Turbina-generator"
                            break
                        }
                        case "AI3": {
                            text = "S-a modificat consumul energetic din " + convertValue(state.plc_data.AI3, 0, 100) + " in " + convertValue(change.value, 0, 100)
                            componenta = "Consumator"
                            break
                        }
                    }
                    history = {
                        id: state.history.length,
                        date: change.date,
                        time: change.time,
                        type: change.type,
                        component: componenta,
                        text: text
                    }
                }

                if (decToBinary(data.Digi) !== decToBinary(state.plc_data.Digi)) {
                    const buttonchange = findChange(decToBinary(state.plc_data.Digi), decToBinary(data.Digi))

                    if (buttonchange) {
                        let text = "Buton neatribuit"
                        switch (buttonchange.key) {
                            case "0": {
                                if (buttonchange.value === 0) {
                                    text = "Regim de functionare manual."
                                }
                                if (buttonchange.value === 1) {
                                    text = "Regim de functionare automat."
                                }
                                break
                            }
                            case "1": {
                                if (buttonchange.value === 0) {
                                    text = "Instalatie oprita."
                                }
                                if (buttonchange.value === 1) {
                                    text = "Instalatie pornita."
                                }
                                break
                            }
                            case "2": {
                                if (buttonchange.value === 0) {
                                    text = "Valva 1 inchisa."
                                }
                                if (buttonchange.value === 1) {
                                    text = "Valva 1 deschisa."
                                }
                                break
                            }
                            case "3": {
                                if (buttonchange.value === 0) {
                                    text = "Valva 2 inchisa."
                                }
                                if (buttonchange.value === 1) {
                                    text = "Valva 2 deschisa."
                                }
                                break
                            }
                            case "4": {
                                if (buttonchange.value === 0) {
                                    text = "Sistem de ungere lagar 1 oprit."
                                }
                                if (buttonchange.value === 1) {
                                    text = "Sistem de ungere lagar 1 pornit."
                                }
                                break
                            }
                            case "5": {
                                if (buttonchange.value === 0) {
                                    text = "Sistem de ungere lagar 2 oprit."
                                }
                                if (buttonchange.value === 1) {
                                    text = "Sistem de ungere lagar 2 pornit."
                                }
                                break
                            }
                            case "6": {
                                if (buttonchange.value === 0) {
                                    text = "Sistem de vantilatie oprit."
                                }
                                if (buttonchange.value === 1) {
                                    text = "Sistem de vantilatie pornit."
                                }
                                break
                            }
                        }
                        history = {
                            id: state.history.length,
                            date: buttonchange.date,
                            time: buttonchange.time,
                            type: buttonchange.type,
                            component: "B" + buttonchange.key,
                            text: text
                        }
                    }

                }
            }

            const binaryButtonsValues = decToBinary(data.Digi)
            const buttonsArray = {
                B0: binaryButtonsValues[0],
                B1: binaryButtonsValues[1] ?? 0,
                B2: binaryButtonsValues[2] ?? 0,
                B3: binaryButtonsValues[3] ?? 0,
                B4: binaryButtonsValues[4] ?? 0,
                B5: binaryButtonsValues[5] ?? 0,
                B6: binaryButtonsValues[6] ?? 0,
                B7: binaryButtonsValues[7] ?? 0,
                B8: binaryButtonsValues[8] ?? 0,
                B9: binaryButtonsValues[9] ?? 0,
                B10: binaryButtonsValues[10] ?? 0,
                B11: binaryButtonsValues[11] ?? 0,
                B12: binaryButtonsValues[12] ?? 0,
                B13: binaryButtonsValues[13] ?? 0,
                B14: binaryButtonsValues[14] ?? 0,
                B15: binaryButtonsValues[15] ?? 0
            }

            const binaryLedsValues = decToBinary(data.Com)
            const ledsArray = {
                C0: binaryLedsValues[0],
                C1: binaryLedsValues[1] ?? 0,
                C2: binaryLedsValues[2] ?? 0,
                C3: binaryLedsValues[3] ?? 0,
                C4: binaryLedsValues[4] ?? 0,
                C5: binaryLedsValues[5] ?? 0,
                C6: binaryLedsValues[6] ?? 0,
                C7: binaryLedsValues[7] ?? 0,
                C8: binaryLedsValues[8] ?? 0,
                C9: binaryLedsValues[9] ?? 0,
                C10: binaryLedsValues[10] ?? 0,
                C11: binaryLedsValues[11] ?? 0,
                C12: binaryLedsValues[12] ?? 0,
                C13: binaryLedsValues[13] ?? 0,
                C14: binaryLedsValues[14] ?? 0,
                C15: binaryLedsValues[15] ?? 0
            }

            console.debug(ledsArray)

            return {
                ...state,
                loading: false,
                plc_data: data,
                history: [...state.history, history],
                buttons: buttonsArray,
                leds: ledsArray,
                operatingMode: buttonsArray.B0 === 1 || ledsArray.C0 === 1 ? true : false, //1-Automat, 0-Manual deci starea initiala manual 
                systemOn: buttonsArray.B1 === 1 || ledsArray.C1 === 1 ? true : false, //1-pornit, 0-oprit, deci starea initiala oprit
                valves: {
                    ...state.valves,
                    valve1On: (buttonsArray.B1 === 1 || ledsArray.C1 === 1) && (((buttonsArray.B2 === 1 || ledsArray.C2 === 1) && (buttonsArray.B0 === 0 || ledsArray.C0 === 0)) || (buttonsArray.B0 === 1 || ledsArray.C0 === 1)) ? true : false,
                    valve2On: (buttonsArray.B1 === 1 || ledsArray.C1 === 1) && (((buttonsArray.B3 === 1 || ledsArray.C3 === 1) && (buttonsArray.B0 === 0 || ledsArray.C0 === 0)) || (buttonsArray.B0 === 1 || ledsArray.C0 === 1)) ? true : false
                },
                lagare: {
                    ...state.lagare,
                    lagar1: (buttonsArray.B1 === 1 || ledsArray.C1 === 1) && (((buttonsArray.B4 === 1 || ledsArray.C4 === 1) && (buttonsArray.B0 === 0 || ledsArray.C0 === 0)) || (buttonsArray.B0 === 1 || ledsArray.C0 === 1)) ? true : false,
                    lagar2: (buttonsArray.B1 === 1 || ledsArray.C1 === 1) && (((buttonsArray.B5 === 1 || ledsArray.C5 === 1) && (buttonsArray.B0 === 0 || ledsArray.C0 === 0)) || (buttonsArray.B0 === 1 || ledsArray.C0 === 1)) ? true : false
                },
                ventilation: (buttonsArray.B1 === 1 || ledsArray.C1 === 1) && (((buttonsArray.B6 === 1 || ledsArray.C6 === 1) && (buttonsArray.B0 === 0 || ledsArray.C0 === 0)) || (buttonsArray.B0 === 1 || ledsArray.C0 === 1)) ? true : false
            }
        }
        case "VALVE1_ONOFF": {
            return {
                ...state,
                valves: {
                    ...state.valves,
                    valve1On: action.payload
                }

            }
        }

        case "VALVE2_ONOFF": {
            return {
                ...state,
                valves: {
                    ...state.valves,
                    valve2On: action.payload
                }
            }
        }
        default: return state
    }
}

function turnOnOff_Valve1(state: boolean): MainActionType {
    return { type: "VALVE1_ONOFF", payload: state }
}

function turnOnOff_Valve2(state: boolean): MainActionType {
    return { type: "VALVE2_ONOFF", payload: state }
}

export const Actions = {
    turnOnOff_Valve1,
    turnOnOff_Valve2
}

export type IActions = typeof Actions