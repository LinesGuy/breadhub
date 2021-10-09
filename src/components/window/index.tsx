import { FunctionalComponent, h} from "preact";
import style from "./style.css";
import { useState } from "preact/hooks";

interface Props {
  windowTitle: string;
  iframeUrl: string;
  width: number;
  height: number;
  x: number;
  y: number;
}

const Window: FunctionalComponent<Props> = (props: Props) => {
    const [width, setWidth] = useState(props.width)
    const [height, setHeight] = useState(props.height)
    const [x, setX] = useState(props.x)
    const [y, setY] = useState(props.y)
  return (
    <div class={style.window} style={{width: width, height: height, left: x, top: y}}>
        <div class={style.windowHeader}>
            <img src="./assets/images/interrogation_mark.png"/>Muh header
        </div>
        <iframe src={props.iframeUrl} width="100%" height={height - 24} class={style.windowIframe}></iframe>
    </div>
  );
};

export default Window;
