import { useState } from 'react';
import './App.css';
import RemindersList from './components/RemindersList';
import Reminder from './models/reminderModel';

function App() {
  const [reminders, setReminders] = useState<Reminder[]>([])

  return (
    <div className="App">
      <RemindersList reminders={reminders}></RemindersList>
    </div>
  );
}

export default App;
