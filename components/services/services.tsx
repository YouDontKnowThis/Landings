import SphereIcon from "../../objects/icons/sphere";
import Card from "../../ui/card/card";
import SmallCard from "../../ui/small-card/small-card";
import classes from "./services.module.scss";

const Services = () => {
  return (
    <section className={classes.services}>
      <div className="container_md">
        <h2>Our services</h2>
        <div className={classes.content}>
          <Card label="ui/ux" imgUrl="/images/services/ui-ux.png" />
          <Card
            label="Digital Marketing"
            imgUrl="/images/services/marketing.png"
          />
          <Card label="Brading" imgUrl="/images/services/branding.png" />
        </div>
        <SmallCard
          imgUrl="/images/services/graph.png"
          width={70.59}
          height={70.59}
          position={classes.s_card}
        />
        <SphereIcon />
      </div>
    </section>
  );
};

export default Services;
