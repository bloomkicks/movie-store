import classes from "./Card.module.scss";

const Card = ({
  children,
  className,
  component,
  ...props
}: {
  children: any;
  className?: string;
  component?: any;
  [prop: string]: any;
}) => {
  const CardComponent = component || "div";

  return (
    <CardComponent
      {...props}
      className={`${classes.card} ${className || ""}`}
    >
      {children}
    </CardComponent>
  );
};

export default Card;
