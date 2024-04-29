class SingletonComponent extends React.Component {
  constructor(props) {
    super(props);
    if (!SingletonComponent.instance) {
      SingletonComponent.instance = this;
    }
    return SingletonComponent.instance;
  }
  render() {
    return <div>Singleton Component</div>;
  }
}
