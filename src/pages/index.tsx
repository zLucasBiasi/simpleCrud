import { useContext, useEffect, useState } from "react";
import { TaskCard } from "../components/TaskCard";
import { TaskHeader } from "../components/TaskHeader";
import { LOCAL_STORAGE_KEY } from "../constants/localStorage";
import { newTaskContext } from "../context/addNewTask";
import { HomeTemplate } from "../template/Home/home";

export default function Home() {
  const { list } = useContext(newTaskContext);
  const [isHydrated, setIsHydrated] = useState(false);

  useEffect(() => {
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(list));
  }, [list]);

  useEffect(() => {
    setIsHydrated(true);
  }, []);

  return (
    <>
      <HomeTemplate>
        <TaskHeader />
        {isHydrated &&
          list?.map((item, index) => (
            <TaskCard
              key={index}
              id={item.id as string}
              task={item.name as string}
            />
          ))}
      </HomeTemplate>
    </>
  );
}
