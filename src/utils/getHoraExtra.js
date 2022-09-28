export default function getHoraExtra(day) {
    const timestampEntryTime = new Date(`${day.day}T${day.entryTime}:00`).getTime()
    const timestampExitTime = new Date(`${day.day}T${day.exitTime}:00`).getTime()

    return (((timestampExitTime-timestampEntryTime) / 1000 / 60 / 60) - day.hours)   
}