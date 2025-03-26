import React, { useState } from "react";
import Interest from "./Interest";
import Profile from "./Profile";
import Settings from "./Settings";
export default TabForm = () => {
  const [activeTab, setActiveTab] = useState(0);
  const [appData, setAppData] = useState({
    Name: "Jogesh",
    Age: 25,
    Email: "jokrish923@gmail.com",
    interest: ["cricket", "football", "react"],
    theme: "dark",
  });
  const [errorMessage, setErrorMessage] = useState({});
  const [showError, setShowError] = useState(false);
  const tabs = [
    {
      name: "Profile",
      component: Profile,
    },
    {
      name: "Interest",
      component: Interest,
    },
    {
      name: "Settings",
      component: Settings,
    },
  ];
  console.log(errorMessage[tabs[activeTab].name]);
  const onClickHandler = (index) => {
    if (!errorMessage[tabs[activeTab].name]) {
      setActiveTab(index);
      setShowError(false);
    } else {
      setShowError(true);
    }
  };

  const ActiveTabComponent = tabs[activeTab].component;
  console.log(errorMessage);

  return (
    <div className={appData.theme === "dark" ? "dark" : "light"}>
      <div className="header-container">
        {tabs.map((t, index) => (
          <div
            onClick={() => onClickHandler(index)}
            key={index}
            className="header"
          >
            {t.name}
          </div>
        ))}
      </div>
      <div className="display-form">
        <ActiveTabComponent
          data={appData}
          setData={setAppData}
          setError={setErrorMessage}
          showError={showError}
        />
      </div>
      <div>
        {activeTab === tabs.length - 1 ? <button>submit</button> : <></>}
      </div>
    </div>
  );
};

// export default TabForm;
