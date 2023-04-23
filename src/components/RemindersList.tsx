import Reminder from "../models/reminderModel";


interface ReminderListProps {
    reminders: Reminder[];
}

const RemindersList = ({ reminders } : ReminderListProps) => {
  return (
    <ul className="list-group">
        {reminders.map(reminder => <li className="list-group-item" key={reminder.id}>{reminder.title}</li>)}
    </ul>
  )
}

export default RemindersList