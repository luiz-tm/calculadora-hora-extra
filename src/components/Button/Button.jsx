import * as Dialog from '@radix-ui/react-dialog'
import './Button.css'
import { useState } from 'react'

export default function Button() {

    const [func, setFunc] = useState() 
    const [diaria, setDiaria] = useState()

    const [AddDia, setAddDia] = useState()
    const [AddDiaria, setAddDiaria] = useState()
    const [AddEntrada, setAddEntrada] = useState()
    const [AddSaida, setAddSaida] = useState()
 

    console.log(diaria)

    const quandoMudarNome = (e) => {
        setFunc(e.target.value)
    }

    const quandoMudarDiaria = (e) => {
        setDiaria(+e.target.value)
    }


    const AddQuandoMudarDiaria = (e) => {
        setAddDiaria(+e.target.value)
    }

    const AddQuandoMudarDia = (e) => {
        setAddDia(e.target.value)
    }

    const AddQuandoMudarHorarioEntrada = (e) => {
        setAddEntrada(e.target.value);
    }

    const AddQuandoMudarHorarioSaida = (e) => {
        setAddSaida(e.target.value);
    }


    const saveUser = () => {
        try {
            localStorage.setItem('nome', func ? func : 'Não definido');
            localStorage.setItem('diaria', diaria)

            alert('Funcionário adicionado com sucesso.')
        }
        catch(e) {
            alert('Não consegui salvar.')
        }
    }

    const saveDay = () => {
        try {
            const array = [
                {
                    dia: AddDia,
                    diaria: AddDiaria,
                    entrada: AddEntrada,
                    saida: AddSaida
                }
            ]
            localStorage.setItem('dias', JSON.stringify(array))
        } catch(e) {

        }
    }

    return (
        
        <div className="d-flex row gap-4 mt-4">

            <Dialog.Root>
                <div><Dialog.Trigger className="btn btn-success">Adicione o funcionário</Dialog.Trigger></div>
                <Dialog.Portal>
                    <Dialog.Overlay className="DialogOverlay">
                        <Dialog.Content className="DialogContent">
                            <Dialog.Title className="mb-4 DialogTitle">Adicione o funcionário</Dialog.Title>
                            <p>Digite o nome do funcionário abaixo</p>
                            <form action="/" onSubmit={saveUser}>
                                <input value={func} onChange={quandoMudarNome} placeholder="Digite o nome do funcionário" autoComplete="off" type="text" />
                                <input value={diaria} onChange={quandoMudarDiaria} placeholder="Digite a diária do funcionário" autoComplete="off" type="text" />
                                <div className="buttons mt-4">
                                    <Dialog.Close className="DialogClose">Cancelar</Dialog.Close>
                                    <button>Salvar</button>
                                </div>
                            </form>
                        </Dialog.Content>
                    </Dialog.Overlay>
                </Dialog.Portal>
            </Dialog.Root>


            <Dialog.Root>
                <div><Dialog.Trigger className="btn btn-primary">Adicione um dia</Dialog.Trigger></div>
                <Dialog.Portal>
                    <Dialog.Overlay className="DialogOverlay">
                        <Dialog.Content className="DialogContent">
                            <Dialog.Title className="mb-4 DialogTitle">Adicione um dia</Dialog.Title>
                            <form action="/" onSubmit={saveDay}>
                                <p>Complete as informações para adicionar um dia</p>

                                <p>Selecione o dia</p>
                                <input onChange={AddQuandoMudarDia} placeholder="Dia" autoComplete="off" type="date" />

                                <p>Quantas horas o funcionário trabalha por dia?</p>
                                <input onChange={AddQuandoMudarDiaria} placeholder="Horas" autoComplete="off" type="number" />

                                <p>Horário de entrada</p>
                                <input onChange={AddQuandoMudarHorarioEntrada} placeholder="Horas" autoComplete="off" type="time" />

                                <p>Horário de saída</p>
                                <input onChange={AddQuandoMudarHorarioSaida} placeholder="Horas" autoComplete="off" type="time" />

                                <div className="buttons mt-4">
                                    <Dialog.Close className="DialogClose">Cancelar</Dialog.Close>
                                    <button>Salvar</button>
                                </div>
                            </form>
                        </Dialog.Content>
                    </Dialog.Overlay>
                </Dialog.Portal>
            </Dialog.Root>
        </div>
    )
}