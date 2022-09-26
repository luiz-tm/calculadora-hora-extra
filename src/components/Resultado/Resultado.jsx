import days from "../../data/days"

export default function Resultado(props) {
    const nome = localStorage.getItem('funcionario')
    const diaria = localStorage.getItem('diaria')

    const getHoraExtra = (day) => {
        const entryTime = day.entryTime;
        const exitTime = day.exitTime;
        const hours = day.hours;

        const timestampEntryTime = new Date(`${day.day}T${entryTime}:00`).getTime()
        const timestampExitTime = new Date(`${day.day}T${exitTime}:00`).getTime()

        return (((timestampExitTime-timestampEntryTime) / 1000 / 60 / 60) - hours)   
    }

    const getValorHoraExtra = (day) => {
        const diaria = Number(localStorage.getItem('diaria'))
        return getHoraExtra(day) * ( diaria / day.hours )
    }

    const getFullValue = () => {
        let acc = 0;
        days.map((day) => {
            acc += getValorHoraExtra(day)
        })
        return acc.toFixed(2);
    }

    const getFullHours = () => {
        let acc = 0;
        days.map((day) => {
            acc += getHoraExtra(day)
        })
        return acc.toFixed(2);
    }

    return (
        <div className="mt-4">
            <h2>O funcionário {nome ? nome : 'Não definido'} possui diária de R$ {diaria ? diaria : 0},00.</h2>
            <h2>O valor total de hora extra é: R$ {getFullValue().replace('.', ',')}</h2>
            <h2>O funcionário fez {getFullHours()}h(s) extra(s).</h2>
        </div>
    )
}