import getFullValue from "../../utils/getFullValue"
import getFullHours from "../../utils/getFullHours"

export default function Resultado(props) {
    const { nome, diaria } = props;
    const funcDefined = nome && diaria;

    if(!funcDefined) {
        return (
            <h2>Inicie adicionando um funcionário</h2>
        )
    } else {
        return (
            <div className="mt-4">
                <h2>O funcionário {nome} possui diária de R$ {diaria},00.</h2>
                <h2>O valor total de hora extra é: R$ {getFullValue()}</h2>
                <h2>O funcionário fez {getFullHours()}h(s) extra.</h2>
            </div>
        )
    }
}