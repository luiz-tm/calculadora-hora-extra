import * as Dialog from '@radix-ui/react-dialog'
import './Button.css'
import { useState } from 'react'
import days from '../../data/days'

export default function Button(props) {
    const { nome, valorDiaria} = props;
    const funcDefined = nome && valorDiaria;

    const [func, setFunc] = useState('')
    const [diaria, setDiaria] = useState('')

    const [day, setDay] = useState()
    const [hours, setHours] = useState()
    const [entryTime, setEntryTime] = useState()
    const [exitTime, setExitTime] = useState()

    const saveUser = () => {
        try {
            localStorage.setItem('funcionario', func);
            localStorage.setItem('diaria', diaria);
            alert('Funcionário salvo com sucesso!')
        } catch(e) {
            alert('Houve um erro com o salvamento do funcionário.')
        }
    }

    const saveDay = (e) => {

        if (!funcDefined) 
            return alert('Você precisa cadastrar o funcionário primeiro')

        try {
            const timestampEntryTime = new Date(`${day}T${entryTime}:00`).getTime()
            const timestampExitTime = new Date(`${day}T${exitTime}:00`).getTime()

            days.push({
                day,
                hours,
                entryTime,
                exitTime,
            })
    
            localStorage.setItem('days', JSON.stringify(days))
    
            alert('Salvo com sucesso!')
        } catch(e) {
            alert('Houve um erro com o salvamento.')
        }

    }

    return (
        <div className="d-flex row gap-4 mt-4">

            <Dialog.Root>
                <div><Dialog.Trigger className="btn btn-success">{`${funcDefined ? 'Edite' : 'Adicione'} o funcionário`}</Dialog.Trigger></div>
                <Dialog.Portal>
                    <Dialog.Overlay className="DialogOverlay">
                        <Dialog.Content className="DialogContent">
                            <Dialog.Title className="mb-4 DialogTitle">{`${funcDefined ? 'Edite' : 'Adicione'} o funcionário`}</Dialog.Title>
                            <form action="/" onSubmit={saveUser}>
                                <input 
                                    value={func} 
                                    onChange={e => setFunc(e.target.value)} 
                                    placeholder="Digite o nome do funcionário" 
                                    autoComplete="off" 
                                    type="text" 
                                />

                                <input 
                                    value={diaria} 
                                    onChange={e => setDiaria(+e.target.value)} 
                                    placeholder="Digite a diária do funcionário" 
                                    autoComplete="off" 
                                    type="number" 
                                />

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
                <div>{funcDefined ? <Dialog.Trigger className="btn btn-primary">Adicione um dia</Dialog.Trigger> : ''}</div>
                <Dialog.Portal>
                    <Dialog.Overlay className="DialogOverlay">
                        <Dialog.Content className="DialogContent">
                            <Dialog.Title className="mb-4 DialogTitle">Adicione um dia</Dialog.Title>
                            <form action="/" onSubmit={saveDay}>
                                <p>Complete as informações para adicionar um dia</p>

                                <p>Selecione o dia</p>
                                <input 
                                    onChange={e => setDay(e.target.value)} 
                                    placeholder="Dia" 
                                    autoComplete="off" 
                                    type="date" 
                                />

                                <p>Quantas horas o funcionário trabalha por dia?</p>
                                <input 
                                    onChange={e => setHours(+e.target.value)}
                                    placeholder="Horas" 
                                    autoComplete="off" 
                                    type="number" 
                                />

                                <p>Horário de entrada</p>
                                <input 
                                    onChange={e => setEntryTime(e.target.value)} 
                                    placeholder="Horas" 
                                    autoComplete="off" 
                                    type="time" 
                                />

                                <p>Horário de saída</p>
                                <input 
                                    onChange={e => setExitTime(e.target.value)} 
                                    placeholder="Horas" 
                                    autoComplete="off" 
                                    type="time" 
                                />

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