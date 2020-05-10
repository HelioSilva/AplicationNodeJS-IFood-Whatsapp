const app = require("./src/fluxo");

const sulla = require("sulla");

(async () => {
  const whatsapp = await sulla.create();
  app.main(whatsapp);
})();
