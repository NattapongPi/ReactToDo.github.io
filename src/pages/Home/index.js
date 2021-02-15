import React, { useEffect, useState } from "react";
import styles from "./Home.module.css";
import Clock from "react-clock";
import "react-clock/dist/Clock.css";
import "../../index.css";

export function Home() {
  const [value, setValue] = useState(new Date());
  useEffect(() => {
    const interval = setInterval(() => setValue(new Date()), 1000);
    return () => {
      clearInterval(interval);
    };
  }, []);
  return (
    <div className={styles.body}>
      <Clock
        hourMarksWidth={8}
        hourMarksLength={15}
        hourHandLength={50}
        hourHandWidth={8}
        minuteMarksWidth={2}
        secondHandWidth={3}
        minuteHandLength={85}
        minuteHandWidth={5}
        secondHandLength={75}
        className="class1 class2"
        size={250}
        value={value}
      />
      <div>Created By Nattapong</div>
    </div>
  );
}
