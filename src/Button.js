import "./Button.css";

function Button(props) {
  console.log(props.buttonText);
  const whenButtonPressed = () => {
    alert("This takes you to the page that we can show insulin levels");
  };

  return (
    <>
      <button className="btn" onClick={whenButtonPressed}>
        {props.buttonText}
      </button>
    </>
  );
}

export default Button;
