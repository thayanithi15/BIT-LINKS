import React, { useState } from "react";
import ScheduleNetwork from "./ScheduleNetwork";

export default function ParentComponent() {
  const [viewPerson, setViewPerson] = useState(false);

  const onViewPersonToggle = (newViewPerson) => {
    setViewPerson(newViewPerson);
  };

  return (
    <div>
      <ScheduleNetwork onViewPersonToggle={onViewPersonToggle} />
    </div>
  );
}
