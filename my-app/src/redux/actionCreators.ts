import axios from "axios"
import { Dispatch } from "react"

export function loadData() {
    return function action(dispatch: Dispatch<any>) {
        dispatch({ type: "DATA_LOADING" })
        axios.get("http://davos.science.upm.ro/~traian/web_apl/multiio/act_val.php").then(data => {
            dispatch({ type: "DATA_LOADED", payload: data.data })
        })
    }
}