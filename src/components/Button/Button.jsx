import * as Dialog from '@radix-ui/react-dialog'
import './Button.css'
import { useState} from 'react'

export default function Button() {
    const [open, setOpen] = useState(false)

    return (
        
        <div className="d-flex row gap-4 mt-4">

            <Dialog.Root>
                <div><Dialog.Trigger className="btn btn-success">Adicione o nome</Dialog.Trigger></div>
                <Dialog.Portal>
                    <Dialog.Overlay className="DialogOverlay">
                        <Dialog.Content className="DialogContent">
                            <Dialog.Title className="mb-4 DialogTitle">Adicione o funcionário</Dialog.Title>
                            <p>Digite o nome do funcionário abaixo</p>
                            <form action="/">
                                <input placeholder="Digite o nome do funcionário" autocomplete="off" type="text" />
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
                <div><Dialog.Trigger className="btn btn-success">Adicione a diária</Dialog.Trigger></div>
                <Dialog.Portal>
                    <Dialog.Overlay className="DialogOverlay">
                        <Dialog.Content className="DialogContent">
                            <Dialog.Title className="mb-4 DialogTitle">Adicione a diária</Dialog.Title>
                            <p>Digite o valor da diária do funcionário abaixo</p>
                            <form action="/">
                                <input placeholder="Digite a diária do funcionário" autocomplete="off" type="number" />
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
                            <form action="/">
                                <p>Complete as informações para adicionar um dia</p>

                                <p>Selecione o dia</p>
                                <input placeholder="Dia" autocomplete="off" type="date" />

                                <p>Quantas horas o funcionário trabalha por dia?</p>
                                <input placeholder="Horas" autocomplete="off" type="number" />

                                <p>Horário de entrada</p>
                                <input placeholder="Horas" autocomplete="off" type="time" />

                                <p>Horário de saída</p>
                                <input placeholder="Horas" autocomplete="off" type="time" />


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