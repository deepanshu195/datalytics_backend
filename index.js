const config = require("./server/config/config");
require("./server/dbRepository/dbInstance");
const app = require("./server/server");

console.log(config);

app.listen(config.port);
