import classes from "./HamMenu.module.scss";

const HamMenu = ({ ...props }: any) => {
  return (
    <div {...props} className={classes.hamMenu}>
      <span></span>
      <span></span>
      <span></span>
    </div>
  );
};

export default HamMenu;
