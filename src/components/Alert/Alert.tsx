import MUIAlert, { AlertProps } from "@mui/material/Alert";
import React from "react";

const Alert: React.FC<AlertProps> = (props) => {
  return <MUIAlert {...props} />;
};

export default Alert;
