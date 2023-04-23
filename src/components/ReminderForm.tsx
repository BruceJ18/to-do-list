import React, { useState } from "react";


interface Props {
    onAddReminder: (title: string) => void;
}

const ReminderForm = ({ onAddReminder } : Props): JSX.Element => {
    const [title, setTitle] = useState('');

    const submitForm = (event: React.FormEvent) => {
        event.preventDefault;
        if (!title) return;
        onAddReminder(title);
        setTitle('');
    }

  return (
    <form onSubmit={submitForm}>
      <label htmlFor="title"></label>
      <input value={title} onChange={event => setTitle(event.target.value)} id="title" type="text" className="form-control" />
      <button type="submit" className="btn btn-primary my-3 rounded-pill">Add Reminder</button>
    </form>
  );
};

export default ReminderForm;
