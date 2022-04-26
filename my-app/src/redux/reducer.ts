import { MainState, objectData } from "../models/models"

export type MainActionType =
    { type: "DATA_LOADING" } |
    { type: "DATA_LOADED", payload: string } |
    { type: "TURN_ON" } |
    { type: "TURN_OFF" } |
    { type: "VALVE1_ONOFF", payload: boolean } |
    { type: "VALVE2_ONOFF", payload: boolean } |
    { type: "VALVE3_ONOFF", payload: boolean }

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
        AO3: 0,
        Sample_nr: 1
    },
    loading: false,
    valves: {
        valve1On: true,
        valve2On: true,
        valve3On: true
    }
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
            const dataArray: string[] = data.split(",")
            const dataObject: objectData = {
                Remote: parseInt(dataArray[0], 10),
                Digi: parseInt(dataArray[1], 10),
                Com: parseInt(dataArray[2], 10),
                AI0: parseInt(dataArray[3], 10),
                AI1: parseInt(dataArray[4], 10),
                AI2: parseInt(dataArray[5], 10),
                AI3: parseInt(dataArray[6], 10),
                AI4: parseInt(dataArray[7], 10),
                AI5: parseInt(dataArray[8], 10),
                AI6: parseInt(dataArray[9], 10),
                AI7: parseInt(dataArray[10], 10),
                AO0: parseInt(dataArray[11], 10),
                AO1: parseInt(dataArray[12], 10),
                AO2: parseInt(dataArray[13], 10),
                AO3: parseInt(dataArray[14], 10),
                Sample_nr: parseInt(dataArray[15], 10)
            }
            return {
                ...state,
                loading: false,
                plc_data: dataObject
            }
        }
        case "TURN_ON": {
            return {
                ...state,
                systemOn: true
            }
        }
        case "TURN_OFF": {
            return {
                ...state,
                systemOn: false
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
        case "VALVE3_ONOFF": {
            return {
                ...state,
                valves: {
                    ...state.valves,
                    valve3On: action.payload
                }
            }
        }

        default: return state
    }
}

function turnOn(): MainActionType {
    return { type: "TURN_ON" }
}

function turnOff(): MainActionType {
    return { type: "TURN_OFF" }
}

function turnOnOff_Valve1(state: boolean): MainActionType {
    return { type: "VALVE1_ONOFF", payload: state }
}

function turnOnOff_Valve2(state: boolean): MainActionType {
    return { type: "VALVE2_ONOFF", payload: state }
}

function turnOnOff_Valve3(state: boolean): MainActionType {
    return { type: "VALVE3_ONOFF", payload: state }
}

export const Actions = {
    turnOn,
    turnOff,
    turnOnOff_Valve1,
    turnOnOff_Valve2,
    turnOnOff_Valve3
}

export type IActions = typeof Actions