import * as React from "react";
import { mergeStyles, Text } from "@fluentui/react";

const navBarClassName = mergeStyles({
  width: "100%",
  height: 80,
  boxShadow: "0px 1px 5px 1px rgba(0, 0, 0, 0.2)",
  display: "flex",
});

const websiteTitleClassName = mergeStyles({
  height: "100%",
  display: "flex",
  textAlign: "center",
  justifyContent: "center",
  alignItems: "center",
  paddingLeft: 42,
  fontSize: 20,
});

export function NavBar() {
  return <div className={navBarClassName}>
    <Text className={websiteTitleClassName}>Monster Hunter Wiki</Text>
  </div>;
}
