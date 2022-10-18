export default function getHoraExtra(day) {
    let timestampEntryTime = new Date(`${day.day}T${day.entryTime}:00`).getTime()
    let timestampExitTime = new Date(`${day.day}T${day.exitTime}:00`).getTime()

    if(timestampExitTime < timestampEntryTime) {
        timestampExitTime = timestampExitTime + 86400000
    }

    if(timestampExitTime - timestampEntryTime >= 43200000) { // Dobra
        timestampExitTime = timestampExitTime - 18000000
    }

    return (((timestampExitTime-timestampEntryTime) / 1000 / 60 / 60) - day.hours)   
}