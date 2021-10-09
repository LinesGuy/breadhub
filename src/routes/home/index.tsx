import { FunctionalComponent, h } from "preact";
import style from "./style.css";
import Icon from "../../components/icon"
import Window from "../../components/window"

const x = window.innerWidth / 2;
const y = window.innerHeight / 2;

const Home: FunctionalComponent = () => {
  return (
    <div class={style.home}>
      <Icon iconUrl="./assets/images/fbot.png" pageUrl="https://fbot.breadhub.uk/" text="FBot"></Icon>
      <Icon iconUrl="./assets/images/gulag.png" pageUrl="https://gulag.breadhub.uk/" text="Gulag"></Icon>
      <Icon iconUrl="./assets/images/minecraft.png" pageUrl="http://mc.breadhub.uk:8123" text="Minecraft"></Icon>
      <Icon iconUrl="./assets/images/bin.png" pageUrl="https://breadhub.uk" text="Trash"></Icon>
      <Window windowTitle="muh website" iframeUrl="http://localhost:8080/welcome" width={400} height={220} x={x - 100} y={y - 110}></Window>
    </div>
  );
};

export default Home;
