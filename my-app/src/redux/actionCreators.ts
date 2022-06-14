import axios from "axios"
import { Dispatch } from "react"
import { objectData } from "../models/models"

export function loadData() {
    return function action(dispatch: Dispatch<any>) {
        axios.get("http://davos.science.upm.ro/~traian/web_apl/multiio/act_val.php").then(data => {
            dispatch({ type: "DATA_LOADED", payload: mapData(data.data) })
        })
    }
}

function mapData(data: any) {
    const dataArray: string[] = data.split(",")
    let dataObject: objectData = {
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
    return dataObject
}

// function updatePlc(path: string, value: number) {
//     return function action(getState, dispatch: Dispatch<any>) {
//         const plc_data = getState().plc_data

//         plc_data[path] = value;

//         const queryString = Object.keys(plc_data).map(key => key.toLowerCase() + '=' + plc_data[key]).join('&');

//         axios.get("http://davos.science.upm.ro/~traian/web_apl/multiio/act_val.php?" + queryString).then(data => {
//             dispatch({ type: "DATA_LOADED", payload: mapData(data.data) })
//         })
//     }
// }

// function mapUpdateData(data: any) {
//     const dataArray: string[] = data.split(",")
//     let dataObject: any = {
//         id: parseInt(dataArray[0], 10),
//         digi: parseInt(dataArray[1], 10),
//         com: parseInt(dataArray[2], 10),
//         a0: parseInt(dataArray[3], 10),
//         a1: parseInt(dataArray[4], 10),
//         a2: parseInt(dataArray[5], 10),
//         a3: parseInt(dataArray[6], 10),
//         a4: parseInt(dataArray[7], 10),
//         a5: parseInt(dataArray[8], 10),
//         a6: parseInt(dataArray[9], 10),
//         a7: parseInt(dataArray[10], 10),
//         ao0: parseInt(dataArray[11], 10),
//         ao1: parseInt(dataArray[12], 10),
//         ao2: parseInt(dataArray[13], 10),
//         ao3: parseInt(dataArray[14], 10),
//         sid: parseInt(dataArray[15], 10)
//     }
//     return dataObject
// }