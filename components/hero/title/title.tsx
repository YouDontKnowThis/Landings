import { LiteWord, BoldWord, ColoredWord, Line } from "../../../ui/words/words";

const Title = () => {
  return (
    <h1>
      Bring your
      <Line />
      <br />
      <BoldWord word="Ideas" />
      <LiteWord word="into" />
      <ColoredWord word="Reality" />
      <br />
      With us
    </h1>
  );
};

export default Title;
