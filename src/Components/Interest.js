import { useEffect, useState } from "react";

export default Interest = ({ data }) => {
  let { interest } = data;
  const [isChecked, setIsChecked] = useState({});
  const onChangeHandler = (e) => {
    const { name, checked } = e;
    setIsChecked((prevState) => ({
      ...prevState,
      [name]: checked,
    }));
  };

  return (
    <div>
      {interest.map((i) => (
        <ul>
          <input
            type="checkbox"
            checked={isChecked.i}
            name={i}
            onChange={(e) => onChangeHandler(e)}
          />
          {i}
        </ul>
      ))}
    </div>
  );
};
