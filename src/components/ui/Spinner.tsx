import classes from "./Spinner.module.scss";

const Spinner = ({ className }: { className?: string }) => {
  return (
    <>
      <div className={`${classes.backdrop} ${className || ""}`}>
        <div className={classes.spinner}></div>
      </div>
    </>
  );
};

export default Spinner;
