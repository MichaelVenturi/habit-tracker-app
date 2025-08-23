import { useState, useContext } from "react";
import HabitContext from "../state/HabitContext";
const AddHabitForm = () => {
  const [formData, setFormData] = useState("");
  const { addHabit } = useContext(HabitContext);

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    addHabit(formData);
  };
  return (
    <div>
      <form onSubmit={onSubmit}>
        <input type="text" value={formData} placeholder="habit" onChange={(e) => setFormData(e.target.value)} />
        <button type="submit">Add</button>
      </form>
    </div>
  );
};
export default AddHabitForm;
