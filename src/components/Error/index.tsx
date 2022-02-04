import { FC } from "react";
import { Alert } from "antd";
import { ErrorProps } from "./types";

const Error: FC<ErrorProps> = (props) => {
  return (
    <Alert
      message={props.title}
      description={props.description}
      type="error"
      showIcon
    />
  );
};

export default Error;
