import { useState } from "react";
import styles from "./Todo.module.css";

export function Todo() {
  const [text, setText] = useState("");
  const [list, setList] = useState([]);
  const [line, setLine] = useState(0);
  function addList() {
    if (text == "") return;
    setList([...list, { text, line: line }]);
    setText("");
    setLine(line + 1);
  }
  function deleteText(line) {
    setList(list.filter((item) => item.line !== line));
  }
  return (
    <div className={styles.body}>
      <div className={styles.page}>
        <div className={styles.top}>
          <input
            className={styles.input}
            value={text}
            onChange={(e) => setText(e.target.value)}
            placeholder="type something..."
            maxLength="25"
          />
          <button className={styles.button} onClick={() => addList()}>
            add
          </button>
        </div>
        <div className={styles.todo}>
          <div className={styles.header}>Todo List</div>
          {list.map((item) => (
            <div key={item.line} className={styles.text}>
              <div>{item.text}</div>
              <button
                className={styles.button}
                onClick={() => deleteText(item.line)}
              >
                delete
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
