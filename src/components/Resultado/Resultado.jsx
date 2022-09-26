export default function Resultado(props) {
    const nome = localStorage.getItem('nome')
    const diaria = localStorage.getItem('diaria')
    return (
        <div className="mt-4">
            <h2>O funcionário {nome} possui diária de R$ {diaria.toLocaleString()},00.</h2>
        </div>
    )
}