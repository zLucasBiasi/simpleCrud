import { TaskHeader } from "../components/TaskHeader";
import { HomeTemplate } from "../template/Home/home";

export default function Home() {
  return (
    <>
      <HomeTemplate>
        <TaskHeader />
      </HomeTemplate>
    </>
  );
}
