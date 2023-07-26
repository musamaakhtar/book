import bcrypt from 'bcryptjs'
import registeringUser from '../Schemas/Auth.js';
export const register = async (req, res) => {
    try {
        const { fullName, email, password, phoneNumber } = req.body;
        registeringUser.findOne({ email: email }, (err, data) => {
            if (data) {
                res.json({ message: "Email already exist" });
            }
            else {
                var salt = bcrypt.genSaltSync(10);
                const hashPassword = bcrypt.hashSync(password, salt);
                const register = new registeringUser({ fullName, email, hashPassword, phoneNumber });
                register.save();
                console.log(register, "this one sending data");
                res.status(200).json({ message: "user registered", data: req.body });
            }
        })
    }
    catch (err) {
        res.status(404).json({ message: "sever error" })
    }
}
export const login = async (req, res) => {
    try {
        const { email, password } = req.body
        console.log(email, password, "password")
        registeringUser.findOne({ email: email }, (err, data) => {
            if (data) {
                const pass = bcrypt.compareSync(password, data.hashPassword)
                console.log(pass);
                if (pass) {

                    res.json({ message: "Login Successfull", data: data })
                    console.log("success")
                }
                else {
                    res.json({ message: "incorrect password" })
                    console.log("inco")

                }
            }
            else {
                res.json({ message: "user not registered" })
                console.log("reg")

            }
        })

    }
    catch (err) {
        res.json({ message: "server error" })
        console.log("error in login", err)
    }
}
 