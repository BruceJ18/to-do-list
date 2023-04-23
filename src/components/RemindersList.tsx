import Reminder from "../models/reminderModel";

interface ReminderListProps {
  reminders: Reminder[];
  onRemoveReminder: (id: number) => void;
}

const RemindersList = ({ reminders, onRemoveReminder }: ReminderListProps) => {
  return (
    <ul className="list-group">
      {reminders.map((reminder) => (
        <li className="list-group-item" key={reminder.id}>
          {reminder.title}
          <button
            onClick={() => onRemoveReminder(reminder.id)}
            className="btn btn-outline-danger mx-2 rounded-pill"
          >
            Delete
          </button>
        </li>
      ))}
    </ul>
  );
};

export default RemindersList;
