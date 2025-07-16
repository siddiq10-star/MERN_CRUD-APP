const formModel = require("../../model/form.model");

let insert = (req, res) => {
  let { name, age, email } = req.body;
  let crud = new formModel({ name, age, email });

  crud
    .save()
    .then(() => {
      res.send({ status: 1, message: "Data Inserted Successfully" });
    })
    .catch((err) => {
      res.send({ status: 0, message: "Error while Insert", err });
    });
};

let Read = async (req, res) => {
  let readList = await formModel.find();
  res.status(200).json({ status: 1, message: "Enquiry List", data: readList });
};

let deleteData = async (req, res) => {
  let enquiryId = req.params.id;
  let deleteEnquiry = await formModel.deleteOne({ _id: enquiryId });
  res.send({
    status: 1,
    message: "Enquiry Deleted Successfully",
    id: enquiryId,
    delRes: deleteEnquiry,
  });
};

let updateData = async (req, res) => {
  let enquiryId = req.params.id;
  let { name, age, email } = req.body;
  let updateObj = {
    name,
    age,
    email,
  };

  let updateRes = await formModel.updateOne({ _id: enquiryId }, updateObj);
  res.send({ status: 1, message: "Updated Sucessfully", updateRes });
};

module.exports = { insert, Read, deleteData, updateData };
