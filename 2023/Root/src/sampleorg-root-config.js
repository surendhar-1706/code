import { registerApplication, start } from "single-spa";

// registerApplication({
//   name: "@single-spa/welcome",
//   app: () =>
//     System.import(
//       "https://unpkg.com/single-spa-welcome/dist/single-spa-welcome.js"
//     ),
//   activeWhen: ["/"],
// });

registerApplication({
  name: "@sampleorg/fe1",
  app: () => System.import("@sampleorg/fe1"),
  activeWhen: ["/"]
});




start({
  urlRerouteOnly: true,
});
