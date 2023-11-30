function Player({ data }) {
  // console.log("props", props);

  const { firstName, lastName, hobbies } = data;
  const playerHobbies = hobbies.length ? (
    hobbies.map((hobby, i) => <li key={i}>{hobby}</li>)
  ) : (
    <p>No hobbies</p>
  );
  return (
    <div>
      <h3>
        {firstName} {lastName}
      </h3>
      <ul>{playerHobbies}</ul>
    </div>
  );
}

export default Player;
