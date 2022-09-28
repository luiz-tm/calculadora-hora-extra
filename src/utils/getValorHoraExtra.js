import getHoraExtra from "./getHoraExtra"

export default function getValorHoraExtra(day) {
    const diaria = Number(localStorage.getItem('diaria'))
    return getHoraExtra(day) * ( diaria / day.hours )
}