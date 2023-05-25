// We import other components to be able to use them inside of this component
import icon1 from "../images/icon1.png"
import icon2 from "../images/icon2.png"
import icon3 from "../images/icon3.png"
import icon4 from "../images/icon4.png"
import Card from './Card'


function Mainpart() {

    const cards = [
        {
            image: icon1,
            title: 'Declarative',
            text: 'React makes it painless to create interactive UIs.'
        },
        {
            image: icon2,
            title: 'Components',
            text: 'Build incapsulated components that manage their state.'
        },
        {
            image: icon3,
            title: 'Single-Way',
            text: 'A set of immutable values are passed to the components.'
        },
        {
            image: icon4,
            title: 'JSX',
            text: 'Statically-typed. designed to run on modern browsers.'
        },
    ]

  return (
    <div className="mainpart">
    
    {cards.map((card, index) => (
        <Card
          image={card.image}
          title={card.title}
          text={card.text}
        />
      ))}
    </div>
  );
}

export default Mainpart;