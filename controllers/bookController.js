import registeringUser from "../Schemas/Auth.js";
import registeringBook from "../Schemas/book.js";
export const createbook = async (req, res) => {
    try {
        const { title, authorName, genre, pubDate, pubHouse, pubYear, profilepic } = req.body;
        const book = new registeringBook({ title, authorName, genre, profilepic, pubDate, pubHouse, pubYear });
        book.save();
        res.json({ message: "book added", data: req.body });
    }
    catch (err) {
        res.json({ message: "server error" })
    }
}

export const getAllBooks = async (req, res) => {
    try {
        const data = await registeringBook.find({})
        res.json(data);
    }
    catch (err) {
        res.json({ message: "Server Error" });
    }
}


export const updateBookStatus = async (req, res) => {
    try {
        console.log(req.body, "========>values")
        const bookId = req.body.bookId;
        registeringBook.findOneAndUpdate({ _id: bookId },
            { $set: { status: req.body.status } }, { new: true }, (err, data) => {
                if (data) {
                    console.log(data);
                    res.json({ message: "Status updated", data: data })
                }
                else {
                    res.json({ message: "Status not updated", data: data })
                }
            })
    }
    catch (err) {
        res.json({ message: "Server Error" });
    }

}; 