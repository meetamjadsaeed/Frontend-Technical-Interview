function ButtonFactory(type) {
  switch (type) {
    case "primary":
      return <button className="primary-button">Primary Button</button>;
    case "secondary":
      return <button className="secondary-button">Secondary Button</button>;
    default:
      return null;
  }
}
// Usage
const PrimaryButton = ButtonFactory("primary");
const SecondaryButton = ButtonFactory("secondary");
