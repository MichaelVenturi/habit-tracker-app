import { createContext, useState } from "react";
import { dummyHabits } from "../dummyData";

export interface IHabit {
  id: number;
  name: string;
  completed: boolean;
}

interface ContextType {
  habits: IHabit[];
  curId: number;
  addHabit: (_: string) => void;
}

const HabitContext = createContext<ContextType>({ habits: [], curId: 0, addHabit: () => {} });

interface HabitProviderProps {
  children: React.ReactNode;
}

export const HabitProvider: React.FC<HabitProviderProps> = ({ children }) => {
  const [habits, setHabits] = useState(dummyHabits);
  const [curId, setCurId] = useState(2);

  const addHabit = (habitText: string) => {
    setHabits([...habits, { id: curId + 1, name: habitText, completed: false }]);
    setCurId(curId + 1);
  };

  return <HabitContext.Provider value={{ habits, curId, addHabit }}>{children}</HabitContext.Provider>;
};

export default HabitContext;
