import { useEffect } from "react";

export default Profile = ({ data, setData, setError, showError }) => {
  const { Name, Age, Email } = data;
  const onChangeHandler = (e, item) => {
    console.log(item);
    setData((prevState) => ({
      ...prevState,
      [item]: e.target.value,
    }));
  };
  useEffect(() => {
    if (Age < 18) {
      setError((prev) => ({
        ...prev,
        ["Profile"]: true,
      }));
    } else {
      setError((prev) => ({
        ...prev,
        ["Profile"]: false,
      }));
    }
  }, [Name, Age, Email]);
  return (
    <div className="form-container">
      <div>
        <label>Name : </label>
        <input
          placeholder="Please Enter your Name"
          type="text"
          value={Name}
          onChange={(e) => onChangeHandler(e, "Name")}
        />
      </div>
      {Name.length < 3 && (
        <span style={{ fontSize: "10px", color: "red" }}>
          Please Enter full Name
        </span>
      )}
      <div>
        <label>Age : </label>
        <input
          placeholder="Please Enter your Age"
          type="number"
          value={Age}
          onChange={(e) => onChangeHandler(e, "Age")}
        />
      </div>
      {Age < 18 && (
        <span style={{ fontSize: "10px", color: "red" }}>
          Age should be above 18+
        </span>
      )}
      <div>
        <label>Email : </label>
        <input
          placeholder="Please Enter your Email"
          type="email"
          value={Email}
          onChange={(e) => onChangeHandler(e, "Email")}
        />
      </div>
      {Email.length < 3 && (
        <span style={{ fontSize: "10px", color: "red" }}>
          Please enter Valid Email
        </span>
      )}

      <div>
        {showError && <span>Please Fill the necessary in current tab</span>}
      </div>
    </div>
  );
};
