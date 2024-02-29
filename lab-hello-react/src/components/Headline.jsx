const paragraph = "You will learn how to use the most popular frontend library and become a super Ninja developer.";
const headline = "Say hello to ReactJS";
const button = "Awesome!";
function Headline() {
    return (
      <div className="headline">
        <h1>{headline}</h1>
        <p>{paragraph}</p>

        <button>{button}</button>
      </div>
    );
  }
  
  export default Headline;