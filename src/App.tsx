import { useEffect, useState } from 'react';
import './App.css';
import RemindersList from './components/RemindersList';
import Reminder from './models/reminderModel';
import reminderServices from './services/apiClient';
import ReminderForm from './components/ReminderForm';


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

  const removeReminder = (id: number) => {
      setReminders(reminders.filter(reminder => reminder.id !== id) );
  }

  const addReminder = async (title: string) => {
    const newReminder = await reminderServices.addReminder(title);
    setReminders([newReminder, ...reminders])

  }

  return (
    <div className="App">
      <ReminderForm onAddReminder={addReminder}/>
      <RemindersList onRemoveReminder={removeReminder} reminders={reminders}></RemindersList>
    </div>
  );
}

export default App;
