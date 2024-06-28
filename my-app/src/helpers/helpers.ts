import React from "react"
import { objectData } from "../models/models"

export function isEqual(obj1: objectData, obj2: objectData) {
    return JSON.stringify(obj1) === JSON.stringify(obj2)
}

export const useDate = () => {
    const locale = 'en'
    const [today, setDate] = React.useState(new Date())

    React.useEffect(() => {
        const timer = setInterval(() => {
            setDate(new Date())
        }, 60 * 1000)
        return () => {
            clearInterval(timer)
        }
    }, [])

    const day = today.toLocaleDateString(locale, { weekday: 'long' })
    const date = `${day}, ${today.getDate()} ${today.toLocaleDateString(locale, {
        month: 'long',
    })}\n\n`

    const hour = today.getHours()
    const wish = `Buna ${(hour < 12 && 'Dimineata') || (hour < 24 && 'Seara')}! `

    const time = today.toLocaleTimeString(locale, {
        hour: 'numeric',
        hour12: true,
        minute: 'numeric',
    })

    return {
        date,
        time,
        wish,
    }
}

export const findChange = (oldObject: objectData, newObject: any) => {
    const date = new Date()
    if (JSON.stringify(oldObject) !== JSON.stringify(newObject)) {
        let i, j, len, item
        for (i = j = 0, len = Object.keys(newObject).length; j < len; i = ++j) {
            item = Object.entries(newObject)[i]
            if (JSON.stringify(item) !== JSON.stringify(Object.entries(oldObject)[i])) {
                return {
                    key: item[0],
                    value: item[1],
                    date: date.toLocaleDateString(),
                    time: date.toLocaleTimeString(),
                    type: "Informare"
                }
            }
        }
    }
}

export function convertValue(value: number | any, min: number, max: number) {
    const OldMin = -1024
    const OldMax = 1024
    const OldRange = (OldMax - OldMin)

    const NewMin = min
    const NewMax = max
    const NewRange = (NewMax - NewMin)

    const OldValue = value

    let NewValue = (((OldValue - OldMin) * NewRange) / OldRange) + NewMin
    return Math.round(NewValue)
}

export function decToBinary(n: number): any {
    // array to store binary number
    let binaryNum: number[] = new Array(16)

    // counter for binary array
    let i = 0;
    while (n > 0) {

        // storing remainder in binary array
        binaryNum[i] = n % 2;
        n = Math.floor(n / 2);
        i++;
    }
    return binaryNum
}