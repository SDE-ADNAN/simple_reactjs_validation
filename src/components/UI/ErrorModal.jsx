import React from "react";
import Card from "./Card";
import Button from "./Button";
import classes from "./ErrorModal.module.css";

const ErrorModal = (props) => {
  return (
    <>
      <div className={classes.backdrop}></div>
      <Card className={classes.modal}>
        <header className={classes.header}>
          <h1>{props.title}</h1>
        </header>
        <div className={classes.content}>
          <p>{props.message}</p>
        </div>
        <footer className={classes.actions}>
          <Button>Okay</Button>
        </footer>
      </Card>
    </>
  );
};

export default ErrorModal;
