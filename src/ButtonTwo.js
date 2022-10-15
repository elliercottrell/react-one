import "./ButtonTwo.css";

function Button(props) {
  console.log(props.buttonText);
  const whenButtonPressed = () => {
    alert("This could link to some ideas for reading");
  };

  return (
    <>
      <button className="btntwo" onClick={whenButtonPressed}>
        {props.buttonText}
      </button>
    </>
  );
}

export default Button;
