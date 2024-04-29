// Bad example: Component tightly coupled to data fetching
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
// Good example: Component using dependency injection
class UserProfile extends React.Component {
  render() {
    const { user } = this.props;
    return (
      <div>
        <h1>{user.name}</h1>
        <img src={user.avatar} alt="User Avatar" />
        <p>{user.bio}</p>
        <p>{user.email}</p>
      </div>
    );
  }
}
