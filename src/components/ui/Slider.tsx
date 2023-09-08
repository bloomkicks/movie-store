import moveInArray from "@/utils/move-in-array";
import { useState, useEffect } from "react";
import classes from "./Slider.module.scss";

const Slider = ({
  children,
  className,
  length,
  itemWidth,
}: {
  children: any;
  className?: string;
  length: number;
  itemWidth: { mobile: number; medium: number };
}) => {
  const [isMedium, setIsMedium] = useState(false);
  const [isDesktop, setIsDesktop] = useState(false);
  const [curIndex, setCurIndex] = useState<number>(0);
  function moveHandler(isNext: boolean) {
    return () => {
      setCurIndex((prev) => moveInArray(prev, length, isNext, 3));
    };
  }

  useEffect(() => {
    setIsMedium(window.innerWidth >= 512);
    setIsDesktop(window.innerWidth >= 1200);
    window.addEventListener("resize", () => {
      setIsMedium(window.innerWidth >= 512);
      setIsDesktop(window.innerWidth >= 1200);
    });
  }, []);

  useEffect(() => {
    let interval = setInterval(() => {
      moveHandler(true)();
    }, 5000);
    return () => {
      clearInterval(interval);
    };
  }, [curIndex]);

  return (
    <div className={`${classes.slider} ${className || ""}`}>
      <button onClick={moveHandler(true)} className={classes.nextBtn}>
        <img
          src="/icons/arrow-right.svg"
          width={11}
          height={32}
          alt="Вперед"
        />
      </button>
      <button
        onClick={moveHandler(false)}
        className={classes.prevBtn}
      >
        <img
          src="/icons/arrow-left.svg"
          width={11}
          height={32}
          alt="Назад"
        />
      </button>
      <div
        className={classes.sliderScreen}
        style={{
          width:
            (isDesktop
              ? itemWidth.medium * 3 + 32
              : isMedium
              ? itemWidth.medium
              : itemWidth.mobile) + "px",
        }}
      >
        <div
          className={classes.sliderItems}
          style={{
            transform: `translateX(-${
              curIndex *
              ((isMedium ? itemWidth.medium : itemWidth.mobile) + 16)
            }px)`,
          }}
        >
          {children}
        </div>
      </div>
    </div>
  );
};

export default Slider;
