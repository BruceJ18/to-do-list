import Reminder from "../models/reminderModel";


interface ReminderListProps {
    reminders: Reminder[];
}

const RemindersList = ({ reminders } : ReminderListProps) => {
  return (
    <ul>
        {reminders.map(reminder => <li key={reminder.id}>{reminder.title}</li>)}
    </ul>
  )
}

export default RemindersList