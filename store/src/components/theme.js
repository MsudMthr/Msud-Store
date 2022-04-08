import React, { useState, useContext } from "react";

import { Switch } from "@headlessui/react";
import { themeContext } from "../App";

const Theme = () => {
  const [enabled, setEnabled] = useState(false);
  // const setTheme = useContext(themeContext);
  
  return (
    <Switch
      checked={enabled}
      onChange={setEnabled}
      className={`${
        enabled ? "bg-gray-700" : "bg-amber-100"
      } relative inline-flex items-center h-6 rounded-full w-11 transition-all delay-200`}
    >
      <span
        className={`${
          enabled ? "translate-x-6 bg-amber-100" : "translate-x-1 bg-gray-700"
        } inline-block w-4 h-4 transform  rounded-full transition-all delay-200`}
      />
    </Switch>
  );
};

export default Theme;
