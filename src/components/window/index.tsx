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
    const [loaded, setLoaded] = useState(0)
    const myIframe = <iframe src={props.iframeUrl} width="100%" height={height - 24} class={style.windowIframe} onLoad={() => {setLoaded(1); console.log("asdf")}}></iframe>
  return (
    loaded == 1 ? 
    <div class={style.window} style={{width: width, height: height, left: x, top: y}}>
        <div class={style.windowHeader}>
            <img src="./assets/images/interrogation_mark.png"/>Muh header
        </div>
        {myIframe}
    </div> : myIframe
  );
};

export default Window;
