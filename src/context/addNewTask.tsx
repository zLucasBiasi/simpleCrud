import {
  createContext,
  Dispatch,
  ReactNode,
  SetStateAction,
  useState,
} from "react";

type TaskType = { id: string; name: string | null }[];
interface addTaskType {
  list: { id: string | null; name: string | null }[];
  setList: Dispatch<SetStateAction<TaskType>>;
}

export const newTaskContext = createContext<addTaskType>({} as addTaskType);

export const NewTaskProvider = ({ children }: { children: ReactNode }) => {
  const [list, setList] = useState<TaskType>([]);

  return (
    <>
      <newTaskContext.Provider value={{ list, setList }}>
        {children}
      </newTaskContext.Provider>
    </>
  );
};
