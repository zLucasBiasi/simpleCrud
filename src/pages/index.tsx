import { TaskCard } from "../components/TaskCard";
import { HomeTemplate } from "../template/Home/home";

export default function Home() {
  return (
    <>
      <HomeTemplate>
        <TaskCard task="Tirar o lixo" />
      </HomeTemplate>
    </>
  );
}
