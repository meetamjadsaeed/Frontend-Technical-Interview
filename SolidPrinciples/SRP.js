// Bad example: Component handling too much responsibility
class UserProfile extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      user: null,
      loading: true,
    };
  }
  componentDidMount() {
    // Fetch user data
  }
  render() {
    // Render user profile UI
  }
}
