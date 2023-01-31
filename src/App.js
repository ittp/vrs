import React from "react";
import { Row, PageHeader, Tabs } from "antd";

import TableLocal from "./pages/TableLocal";
import TableServer from "./pages/TableServer";
import TableStatus from "./pages/TableStatus";

const { TabPane } = Tabs;

var net = require("net");

let cams = [
  {
    key: 1,
    name: "",
    ip: "",
    port: "",
    lastCheck: ""
  }
];

// 109.188.143.86:4444
// 109.188.143.21:55445
// var hosts = [
//   ["109.188.143.21", 55445],
//   ["stackoverflow.com", 80],
//   ["google.com", 444]
// ];
// var cams2 = ["109.188.143.86:4444", import declarations may only appear at top level of a module['stackoverflow.com', 80], ['google.com', 444]];

// let state = [];

// hosts.forEach(function (item: any, key: any) {
//   var sock = new net.Socket();
//   sock.setTimeout(2500);
//   // let arr = item.split(':')
//   // console.log(arr)
//   sock
//     .on("connect", function () {
//       state[item] = { key: item[0], state: "up" };
//       console.log(state[item]);
//       console.log(item[0] + ":" + item[1] + " is up.");
//       sock.destroy();
//     })
//     .on("error", function (e) {
//       console.log(item[0] + ":" + item[1] + " is down: " + e.message);
//     })
//     .on("timeout", function (e) {
//       console.log(item[0] + ":" + item[1] + " is down: timeout");
//     })
//     .connect(item[1], item[0]);
// });

export default function App() {
  return (
    <>
      <PageHeader
        title={"Status"}
        tags={"Address"}
        onBack={() => {}}
        extra={1}
        footer={"Footer"}
        children=<TableStatus />
      />
    </>
  );
}

// export default function App() {
//   return (
//     <Tabs defaultActiveKey="1">
//       <TabPane tab="Table Local" key="1">
//         <TableLocal />
//       </TabPane>
//       <TabPane tab="Table Server" key="2">
//         <TableServer />
//       </TabPane>
//     </Tabs>
//   );
// }
