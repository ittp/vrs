// var portscanner = require("portscanner");
import portscanner from "portscanner";

let { checkPortStatus } = portscanner;
// Checks the status of a single port

export default {
  getStatus: ({ host, port }) =>
    checkPortStatus(port, host, function (error, status) {
      // Status is 'open' if currently in use or 'closed' if available
      console.log(status);
    }),
  checkPortStatus
};

// export const getStatus = {
//   CHECK_PORT_STATUS: checkPortStatus
//   // CHECK_DATE_BETWEENDATES: checkDateBetweenDates
// };

// // Find the first available port. Asynchronously checks, so first port
// // determined as available is returned.
// portscanner.findAPortNotInUse(3000, 3010, "127.0.0.1", function (_error, port) {
//   console.log("AVAILABLE PORT AT: " + port);
// });

// // Find the first port in use or blocked. Asynchronously checks, so first port
// // to respond is returned.
// portscanner.findAPortInUse(3000, 3010, "127.0.0.1", function (error, port) {
//   console.log("PORT IN USE AT: " + port);
// });

// // You can also pass array of ports to check
// portscanner.findAPortInUse([3000, 3005, 3006], "127.0.0.1", function (
//   error,
//   port
// ) {
//   console.log("PORT IN USE AT: " + port);
// });

// // And skip host param. Default is '127.0.0.1'
// portscanner.findAPortNotInUse(3000, 4000, function (error, port) {
//   console.log("PORT IN USE AT: " + port);
// });

// // And use promises
// portscanner.findAPortNotInUse(3000, 4000).then(function (port) {
//   console.log("PORT IN USE AT: " + port);
// });
