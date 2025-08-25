import type { IHabit } from "../state/HabitContext";

interface Props {
  habit: IHabit;
}

const HabitItem: React.FC<Props> = ({ habit }) => {
  return (
    <div>
      <p>{habit.name}</p>
      <span>{habit.completed ? "completed" : "incomplete"}</span>
      <input type="checkbox" name="completed" id="completed" />
    </div>
  );
};
export default HabitItem;
