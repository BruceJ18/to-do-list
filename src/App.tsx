import { useEffect, useState } from 'react';
import './App.css';
import RemindersList from './components/RemindersList';
import Reminder from './models/reminderModel';
import reminderServices from './services/apiClient';


function App() {
  // state variables for reminders list
  const [reminders, setReminders] = useState<Reminder[]>([]);

  useEffect(() => {
    getReminders();
  }, [])

  // can not use async and await in useEffect hook
  const getReminders = async () => {
    const reminders = await reminderServices.getReminders();
    // reminders we get from the server
    setReminders(reminders);
  }

  return (
    <div className="App">
      <RemindersList reminders={reminders}></RemindersList>
    </div>
  );
}

export default App;
