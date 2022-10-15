import "./ButtonOne.css";

function Button(props) {
  console.log(props.buttonText);
  const whenButtonPressed = () => {
    alert("This takes you to a food calc");
  };

  return (
    <>
      <button className="btnone" onClick={whenButtonPressed}>
        {props.buttonText}
      </button>
    </>
  );
}

export default Button;
