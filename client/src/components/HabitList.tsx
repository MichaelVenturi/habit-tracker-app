import { useContext } from "react";
import HabitContext from "../state/HabitContext";

const HabitList = () => {
  const { habits } = useContext(HabitContext);
  return (
    <div>
      {habits.map((h) => (
        <div key={h.id}>
          <p>{h.name}</p>
        </div>
      ))}
    </div>
  );
};
export default HabitList;
