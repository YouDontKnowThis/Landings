import classes from "./words.module.scss";

export const LiteWord = ({ word }: { word: string }) => {
  return <span className={classes.lite}>{word}</span>;
};

export const BoldWord = ({ word }: { word: string }) => {
  return <span className={classes.bold}>{word}</span>;
};

export const ColoredWord = ({ word }: { word: string }) => {
  return <span className={classes.colored}>{word}</span>;
};

export const Line = () => {
  return <span className={classes.line}></span>;
};
