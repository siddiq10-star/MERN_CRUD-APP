let express = require("express");
const {
  insert,
  Read,
  deleteData,
  updateData,
} = require("../../controller/web/crudController");

let crudRouter = express.Router();

crudRouter.post("/insert", insert);
crudRouter.get("/read", Read);
crudRouter.delete("/delete/:id", deleteData);
crudRouter.put("/update/:id", updateData);

module.exports = crudRouter;
