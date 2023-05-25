// We import other components to be able to use them inside of this component
import ImageOne from "../images/icon1.png";
import ImageTwo from "../images/icon2.png"
import ImageThree from "../images/icon3.png";
import ImageFour from "../images/icon4.png";



function Mainpart() {
  return (
    <div className="mainpart">
    
    <section>
    <img src={ImageOne} alt="logo" />
    <h3>Declarative</h3>
    <p>React makes it painless to create interactive UIs.</p>
    </section>

    <section>
    <img src={ImageTwo} alt="logo" />
    <h3>Components</h3>
    <p>Build incapsulated components that manage their state.</p>
    </section>

    <section>
      <img src={ImageThree} alt="logo" />
      <h3>Single-Way</h3>
      <p>A set of immutable values are passed to the components.</p>
      </section>

      <section>
      <img src={ImageFour} alt="logo" />
      <h3>JSX</h3>
      <p>Statically-typed. designed to run on modern browsers.</p>
      </section>
    </div>
  );
}

export default Mainpart;