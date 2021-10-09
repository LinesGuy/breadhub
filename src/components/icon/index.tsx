import { FunctionalComponent, h } from "preact";
import style from "./style.css";

interface Props {
  iconUrl: string;
  pageUrl: string;
  text: string;
}

const Icon: FunctionalComponent<Props> = (props: Props) => {
  return (
    <a class={style.icon} href={props.pageUrl}>
      <img src={props.iconUrl}/>
      <div class={style.iconText}>{props.text}</div>
    </a>
  );
};

export default Icon;
