import classes from "./Tag.module.scss";

const Tag = ({ children }: { children: any }) => {
  return <div className={classes.tag}>{children}</div>;
};

export default Tag;
