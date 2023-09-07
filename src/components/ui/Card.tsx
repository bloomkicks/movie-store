import classes from "./Card.module.scss";

const Card = ({
  children,
  className,
  ...props
}: {
  children: any;
  className?: string;
  [prop: string]: any;
}) => {
  return (
    <div {...props} className={`${classes.card} ${className || ""}`}>
      {children}
    </div>
  );
};

export default Card;
