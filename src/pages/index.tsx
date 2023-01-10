import { TaskCard } from "../components/TaskCard";
import { TaskHeader } from "../components/TaskHeader";
import { HomeTemplate } from "../template/Home/home";

export default function Home() {
  return (
    <>
      <HomeTemplate>
        <TaskHeader />
        <TaskCard task="Tirar o lixo" />
        <TaskCard task="Tirar o lixo" />
      </HomeTemplate>
    </>
  );
}
