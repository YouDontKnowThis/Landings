import Image from "next/image";
import classes from "./illustration.module.scss";

const Illustration = () => {
  return (
    <div className={classes.illustration}>
      <Image
        src="/images/hero/hero.png"
        width={629.51}
        height={680.25}
        layout="responsive"
      />
    </div>
  );
};

export default Illustration;
