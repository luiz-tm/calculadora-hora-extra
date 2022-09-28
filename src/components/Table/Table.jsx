import './Table.css'
import getHoraExtra from '../../utils/getHoraExtra';
import getValorHoraExtra from '../../utils/getValorHoraExtra';

export default function Table(props) {
    const { day } = props;

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
                day.map((dayObject) => {
                    return (
                        <tr key={dayObject.day}>
                            <td>{dayObject.day.split('-').reverse().join('/')}</td>
                            <td>{dayObject.hours}h</td>
                            <td>{dayObject.entryTime}</td>
                            <td>{dayObject.exitTime}</td>
                            <td>{getHoraExtra(dayObject).toFixed(2)}</td>
                            <td>R$ {getValorHoraExtra(dayObject).toFixed(2)}</td>
                        </tr>
                    )
                })
                }
            </tbody>
        </table>
    )
}