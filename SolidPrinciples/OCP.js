// Original component
function Button(props) {
  return <button>{props.label}</button>;
}
// Extending behavior with a HOC
function withColor(ButtonComponent, color) {
  return function (props) {
    return <ButtonComponent style={{ color: color }} {...props} />;
  };
}
const RedButton = withColor(Button, "red");
const BlueButton = withColor(Button, "blue");
