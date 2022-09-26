import './Table.css'

export default function Table() {
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
                <tr>
                    <td>01/09/2022 (Qui)</td>
                    <td>7h</td>
                    <td>15:00</td>
                    <td>22:30</td>
                    <td>0.5h</td>
                    <td>R$ 3,57</td>
                </tr>
                <tr>
                    <td>02/09/2022 (Sex)</td>
                    <td>7h</td>
                    <td>17:00</td>
                    <td>00:30</td>
                    <td>0.5h</td>
                    <td>R$ 3,57</td>
                </tr>
            </tbody>
        </table>
    )
}