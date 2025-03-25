export default Interest = ({ data }) => {
  let { interest } = data;
  return (
    <div>
      {interest.map((i) => (
        <ul>
          <li>{i}</li>
        </ul>
      ))}
    </div>
  );
};
