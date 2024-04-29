// Decorator function
function withLogger(Component) {
  return function (props) {
    console.log("Component is rendered:", Component.name);
    return <Component {...props} />;
  };
}
// Usage
const MyComponent = () => {
  return <div>Hello World</div>;
};
const EnhancedComponent = withLogger(MyComponent);
// Render EnhancedComponent instead of MyComponent
