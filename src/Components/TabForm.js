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

  const ActiveTabComponent = tabs[activeTab].component;
  console.log(appData);

  return (
    <div className={appData.theme === "dark" ? "dark" : "light"}>
      <div className="header-container">
        {tabs.map((t, index) => (
          <div
            onClick={() => setActiveTab(index)}
            key={index}
            className="header"
          >
            {t.name}
          </div>
        ))}
      </div>
      <div className="display-form">
        <ActiveTabComponent data={appData} setData={setAppData} />
      </div>
    </div>
  );
};

// export default TabForm;
