import { useContext } from "react";
import { TaskCard } from "../components/TaskCard";
import { TaskHeader } from "../components/TaskHeader";
import { newTaskContext } from "../context/addNewTask";
import { HomeTemplate } from "../template/Home/home";

export default function Home() {
  const { list } = useContext(newTaskContext);

  return (
    <>
      <HomeTemplate>
        <TaskHeader />
        {list?.map((item, index) => (
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
