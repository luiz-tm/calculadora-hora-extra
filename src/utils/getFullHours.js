import days from "../data/days";
import getHoraExtra from "./getHoraExtra";

export default function getFullHours () {
    let acc = 0;
    days.map((day) => {
        acc += getHoraExtra(day)
    })
    return acc.toFixed(2);
}