import { createContext, ReactNode, useState } from "react";

interface addTaskType {}

export const addNewTask = createContext<addTaskType>({} as addTaskType);

export const newTaskProvider = ({ children }: { children: ReactNode }) => {
  return (
    <>
      <addNewTask.Provider value={""}>{children}</addNewTask.Provider>;
    </>
  );
};
