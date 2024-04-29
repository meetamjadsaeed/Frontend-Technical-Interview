// Parent component
class Button extends React.Component {
  render() {
    return <button>{this.props.label}</button>;
  }
}
// Child component
class CustomButton extends Button {
  render() {
    return (
      <button style={{ backgroundColor: "green" }}>{this.props.label}</button>
    );
  }
}
