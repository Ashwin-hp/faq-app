import "./styles.css";
import Card from "./Card";
import data from "./data";
export default function App2() {
  return (
    <div className="main">
      <div className="heading">AVENGERS - BEST FIGHTS ! </div>
      <div>
        <h3 className="warning">WARNING </h3>
        <p className="exp">
          Some of these fights are extremely violent .Only a true Avengers fan
          will appretiate the beauty of these fights.
          <br />
          Watch these at your own risk.
        </p>
      </div>
      <div className="App2">
        {data.map((card) => (
          <Card
            id={card.id}
            title={card.title}
            link={card.link}
            img={card.img}
          />
        ))}
      </div>
    </div>
  );
}
