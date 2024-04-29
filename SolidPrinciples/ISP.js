// Bad example: Passing unnecessary props to component
function UserProfile(props) {
  return (
    <div>
      <h1>{props.user.name}</h1>
      <img src={props.user.avatar} alt="User Avatar" />
      <p>{props.user.bio}</p>
      <p>{props.user.email}</p>
    </div>
  );
}
// Good example: Segregating props into smaller components
function UserBio(props) {
  return (
    <div>
      <h1>{props.user.name}</h1>
      <img src={props.user.avatar} alt="User Avatar" />
      <p>{props.user.bio}</p>
    </div>
  );
}
function UserContact(props) {
  return <p>{props.user.email}</p>;
}
