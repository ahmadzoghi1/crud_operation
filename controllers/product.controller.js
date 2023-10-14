const Note = require("../models/Products");


// fetch
module.exports.findsingle = async (req, res) => {

    const notes = await Note.findOne(req.id);
    res.json(notes);

}


// // delete data
module.exports.deletesingle = async (req, res) => {
    // const { name, description, price, quantity, category } = req.body;



    let note = await Note.deleteOne(req.id);
    res.json({ note });
    res.send("Deleted " + req.id);


};
// // update data
module.exports.updatesingle = async (req, res) => {
    const { name, description, price, quantity, category } = req.body;

    const newNote = {};
    if (name) {
        newNote.name = name;
    }

    if (description) {
        newNote.description = description;
    }

    if (price) {
        newNote.price = price;
    }
    if (quantity) {
        newNote.quantity = quantity;
    }
    if (category) {
        newNote.category = category;
    }
    //    find note by id
    let note = await Note.findOne(req.id);
    // console.log(note);
    if (!note) {
        return res.status(404).send("not found data");
    }

    note = await Note.findOneAndUpdate(req.id, { $set: newNote }, { new: true });
    res.json({ note });


};
// // delete all data
module.exports.deleteevery = async (req, res) => {



    const notes = await Note.deleteMany();
    // res.json(notes);
    res.json({ message: "All Products deleted successfully" })



};
// get all the notes and find product by name
module.exports.find = async (req, res) => {

    const { name } = req.query;
    if (name) {


        const notes = await Note.find({ name: { $regex: name } });
        res.json(notes);

    } else {
        const result = await Note.find()
        res.json(result);
    }

}
// add data
module.exports.add = async (req, res) => {

    const { name, description, price, quantity, category } = req.body;

    const note = new Note({
        name, description, price, quantity, category
    });
    const savednote = await note.save();
    res.json(savednote);

}


