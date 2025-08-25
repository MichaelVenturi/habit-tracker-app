import { useContext } from "react";
import HabitContext from "../state/HabitContext";
import HabitItem from "./HabitItem";

const HabitList = () => {
  const { habits } = useContext(HabitContext);
  return (
    <div>
      {habits.map((h) => (
        <HabitItem key={h.id} habit={h} />
      ))}
    </div>
  );
};
export default HabitList;
