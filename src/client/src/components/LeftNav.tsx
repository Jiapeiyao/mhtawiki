import { mergeStyles, Nav } from "@fluentui/react";
import { useNavigate } from 'react-router-dom'
import * as React from "react";

const leftNavClassName = mergeStyles({
  width: '270px',
});

export function LeftNav() {

  const navigate = useNavigate();
  return <Nav
    className={leftNavClassName}
    groups={[
      {
        name: 'MR 7 Quests',
        links: [
          {
            name: "quest0",
            url: "/quest/3947346213",
          },
          {
            name: "quest1",
            url: "/quest/1283712931",
          }
        ]
      },
      {
        name: "MR 8 Quests",
        links: [
          {
            name: "quest2",
            url: "/quest/91730811203",
          },
          {
            name: "quest4",
            url: "/quest/09889789678",
          },
        ],
      }
    ]}
    onLinkClick={(event, item) => {
      if (item && event) {
        event.preventDefault();
        navigate(item.url);
      }
    }}
  />;
}