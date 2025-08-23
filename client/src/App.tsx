import "./App.css";
import AddHabitForm from "./components/AddHabitForm";
import HabitList from "./components/HabitList";
import { HabitProvider } from "./state/HabitContext";

function App() {
  return (
    <HabitProvider>
      <div>
        <h1>Habit Tracker</h1>
        <AddHabitForm />
        <HabitList />
      </div>
    </HabitProvider>
  );
}

export default App;
