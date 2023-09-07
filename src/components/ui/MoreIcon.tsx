import classes from "./MoreIcon.module.scss";

const MoreIcon = ({ className }: { className?: string }) => {
  return (
    <div className={`${classes.moreIcon} ${className || ""}`}>
      <span></span>
      <span></span>
      <span></span>
    </div>
  );
};

export default MoreIcon;
