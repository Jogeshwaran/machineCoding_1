export default Settings = ({ data, setData }) => {
  let { theme } = data;
  const onChangeHandler = (e) => {
    setData((prevState) => ({
      ...prevState,
      theme: e.target.name,
    }));
  };
  return (
    <div>
      <div>
        <label>
          <input
            type="radio"
            name="dark"
            checked={theme === "dark"}
            onChange={(e) => onChangeHandler(e)}
          />
          Dark
        </label>
      </div>
      <div>
        <label>
          <input
            type="radio"
            name="light"
            checked={theme === "light"}
            onChange={(e) => onChangeHandler(e)}
          />
          Light
        </label>
      </div>
    </div>
  );
};
