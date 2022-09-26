const horarioEntrada = new Date('2022-09-26T10:00:00').getTime()
const horarioSaida = new Date('2022-09-26T17:20:00').getTime()

const horasTrabalho = 7;
const valorDiaria = 50;
const valorHora = (valorDiaria/horasTrabalho)

const getHoraExtra = (horarioEntrada, horarioSaida) => {
    return ((horarioSaida-horarioEntrada) / 1000 / 60 / 60) - horasTrabalho;
}

const getValorHoraExtra = (horas) => {
    return horas*valorHora;
}

console.log(`O valor a receber é de: R$ ${getValorHoraExtra(getHoraExtra(horarioEntrada, horarioSaida))
    .toFixed(2)
    .toLocaleString()
    .replace('.', ',')}
`)
