import { FunctionalComponent, h } from "preact";
import { useEffect, useState } from "preact/hooks";
import style from "./style.css";

const Welcome: FunctionalComponent = () => {

  return (
    <div class={style.welcome}>
        <div class={style.welcomeHeader}>
            Welcome to <span style="font-weight:bold;">BreadHub<span style="color:#ffffff;">.uk</span></span>
        </div>
        <div class={style.textBox}>
            <span style="font-size: 20px;">i'm lines</span><br/>
            i do stuff and it sometimes works
            <br/><br/>
            xddxdxdx
        </div>
    </div>
  );
};

export default Welcome;
