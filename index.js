const config = require("./Server/config/config");
require("./server/dbRepository/dbInstance");
const app = require("./Server/server");

console.log(config);

app.listen(config.port);
