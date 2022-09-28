export default function getHoraExtra(day) {
    const entryTime = day.entryTime;
    const exitTime = day.exitTime;
    const hours = day.hours;

    const timestampEntryTime = new Date(`${day.day}T${entryTime}:00`).getTime()
    const timestampExitTime = new Date(`${day.day}T${exitTime}:00`).getTime()

    return (((timestampExitTime-timestampEntryTime) / 1000 / 60 / 60) - hours)   
}