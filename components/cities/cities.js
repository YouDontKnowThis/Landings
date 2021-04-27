import Image from "next/image";
import City from "./city/city";
import classes from "./cities.module.scss";

function Cities() {
  return (
    <div className="container">
      <div className={classes.content}>
        <div className={classes.title}>
          <h2>Discover the touch of nature</h2>
          <Image src="/images/accessoirs/plan.png" width={26} height={26} />
        </div>
        <div className={classes.list}>
          <City src="/images/cities/paris.jpg" name="Paris" />
          <City src="/images/cities/london.jpg" name="London" />
          <City src="/images/cities/bali.jpg" name="Bali" />
          <City src="/images/cities/roma.jpg" name="Roma" />
        </div>
      </div>
    </div>
  );
}

export default Cities;
