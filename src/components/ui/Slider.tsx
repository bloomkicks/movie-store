"use client";

import { useState } from "react";
import classes from "./Slider.module.scss";

const Slider = ({
  children,
  className,
}: {
  children: any;
  className?: string;
}) => {
  const [curIndex, setCurIndex] = useState<number>(0);

  return (
    <div className={`${classes.slider} ${className || ""}`}>
      <button className={classes.nextBtn}>
        <img
          src="/icons/arrow-right.svg"
          width={11}
          height={32}
          alt="Вперед"
        />
      </button>
      <button className={classes.prevBtn}>
        <img
          src="/icons/arrow-left.svg"
          width={11}
          height={32}
          alt="Назад"
        />
      </button>
      {children}
    </div>
  );
};

export default Slider;
