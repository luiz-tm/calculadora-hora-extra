import days from "../data/days";
import getValorHoraExtra from "./getValorHoraExtra";

export default function getFullValue () {
    let acc = 0;
    days.map((day) => {
        acc += getValorHoraExtra(day)
    })
    return acc.toFixed(2);
}