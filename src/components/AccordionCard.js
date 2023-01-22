import React, { useState } from "react";
import styles from "./AccordionCard.module.css";

export default function AccordionCard({ title, text }) {
  const [isVisible, setIsVisible] = useState(false);

  return (
    <div className={styles.cardContainer}>
      <div
        onClick={() => {
          setIsVisible(!isVisible);
        }}
      >
        {title}
        {isVisible ? <p>{text}</p> : null}
      </div>
    </div>
  );
}
