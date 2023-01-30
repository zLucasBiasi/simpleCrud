import {
  createContext,
  Dispatch,
  ReactNode,
  SetStateAction,
  useState,
} from "react";
import { LOCAL_STORAGE_KEY } from "../constants/localStorage";

type TaskType = { id: string; name: string | null }[];
interface addTaskType {
  list: { id: string | null; name: string | null }[];
  setList: Dispatch<SetStateAction<TaskType>>;
}

export const newTaskContext = createContext<addTaskType>({} as addTaskType);

export const NewTaskProvider = ({ children }: { children: ReactNode }) => {
  const initialState = () =>
    typeof window !== "undefined"
      ? JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY) as string)
      : [];
  const [list, setList] = useState<TaskType>(initialState);

  return (
    <newTaskContext.Provider value={{ list, setList }}>
      {children}
    </newTaskContext.Provider>
  );
};
