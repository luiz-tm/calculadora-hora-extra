import './Table.css'
import days from '../../data/days'

export default function Table() {
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

    return (
        <table className="table mt-4">
            <tbody>
                <tr className="thead">
                    <td>Dia</td>
                    <td>Jornada</td>
                    <td>Horário Entrada</td>
                    <td>Horário Saída</td>
                    <td>Horas</td>
                    <td>Valor</td>
                </tr>
                {
                days.map((day) => {
                    return (
                        <tr key={day.day}>
                            <td>{day.day}</td>
                            <td>{day.hours}h</td>
                            <td>{day.entryTime}</td>
                            <td>{day.exitTime}</td>
                            <td>{getHoraExtra(day).toFixed(2)}</td>
                            <td>R$ {getValorHoraExtra(day).toFixed(2)}</td>
                        </tr>
                    )
                })
                }
            </tbody>
        </table>
    )
}