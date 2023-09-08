import classes from "./ErrorMessage.module.scss";

const ErrorMessage = ({ error }: { error: string }) => {
  return (
    <p className={classes.message}>
      Sorry, something went wrong. {error.toString()}
    </p>
  );
};

export default ErrorMessage;
