import classes from "./about.module.scss";

const cards = [
  {
    icon: "/r33d.svg",
    number: "5,700",
    text: "Service Ceiling",
  },
  {
    icon: "/r33d.svg",
    number: "160",
    text: "Communication Range",
  },
  {
    icon: "/r33d.svg",
    number: "220",
    text: "Maximum Speed",
  },
  {
    icon: "/r33d.svg",
    number: "56",
    text: "Flight Endurance",
  },
];

function About() {
  return (
    <div className="container-lg">
      <div className={classes.about}>
        <div className={classes.list}>
          {cards.map((card, index) => (
            <div key={index} className={classes.card}>
              <div className={classes.icon}>
                <img src={card.icon} alt="" />
              </div>
              <h2>{card.number}</h2>
              <p>{card.text}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default About;
