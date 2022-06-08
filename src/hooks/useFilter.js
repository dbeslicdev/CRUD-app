import React, { useState } from "react";

export const useFilter = () => {
  const [filter, setFilter] = useState("");
  return {
    filter,
    setFilter,
  };
};
