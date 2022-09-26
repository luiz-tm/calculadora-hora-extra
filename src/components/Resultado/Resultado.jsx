export default function Resultado(props) {
    const nome = localStorage.getItem('nome')
    const diaria = localStorage.getItem('diaria')

    return (
        <div className="mt-4">
            <h2>O funcionário {nome ? nome : 'Não definido'} possui diária de R$ {diaria ? diaria : 0},00.</h2>
        </div>
    )
}