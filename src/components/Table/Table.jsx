import './Table.css'
import days from '../../data/days'
import getHoraExtra from '../../utils/getHoraExtra';
import getValorHoraExtra from '../../utils/getValorHoraExtra';

export default function Table() {

    return (
        <table className="table mt-4 overflow-auto">
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