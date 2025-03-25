export default Profile = ({ data, setData }) => {
  const { Name, Age, Email } = data;
  const onChangeHandler = (e, item) => {
    console.log(item);
    setData((prevState) => ({
      ...prevState,
      [item]: e.target.value,
    }));
  };

  return (
    <div>
      <div>
        <label>Name : </label>
        <input
          placeholder="Please Enter your Name"
          type="text"
          value={Name}
          onChange={(e) => onChangeHandler(e, "Name")}
        />
      </div>
      <div>
        <label>Age : </label>
        <input
          placeholder="Please Enter your Age"
          type="number"
          value={Age}
          onChange={(e) => onChangeHandler(e, "Age")}
        />
      </div>
      <div>
        <label>Email : </label>
        <input
          placeholder="Please Enter your Email"
          type="email"
          value={Email}
          onChange={(e) => onChangeHandler(e, "Email")}
        />
      </div>
    </div>
  );
};
