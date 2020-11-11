const con = require('../dbCon');

module.exports.getAllUsers = (req,res) => {
    const query = "SELECT * from users";
    con.query(query, (err, rows) =>{
        if(err) res.status(400);
        res.status(200).render('./pages/index', {data: rows});        
    });
};//display all users

module.exports.getOneUser = (req,res) => {
    const id = req.params.id;
    const query = "SELECT* FROM users WHERE id = ?";
    con.query(query, id , (err, rows) => {
        if(err) {
            console.log(err);
        }
        else{
            res.render('./pages/editUser', {
                id : rows[0].id,
                fname : rows[0].fname,
                lname: rows[0].lname,
                email: rows[0].email,
                pNo: rows[0].pNo
            })
        }
    })
};//display one users

module.exports.getAddUserPage = (req,res) => {
    res.render('./pages/addUser');
};

module.exports.PostNewUser = (req,res) => {
    const fname = req.body.fname;
    const lname = req.body.lname;
    const email = req.body.email;
    const pNo = req.body.pNo;

    const query = "INSERT INTO users  VALUES(null,?,?,?,?)";
    con.query(query, [fname, lname, email, pNo] , (err,results) => {
        if(err) {
            console.log(err);
        }
        else{
            res.redirect("/users");
        }
    });
};//add new user 

module.exports.updateUser = (req,res) => {
    const fname = req.body.fname;
    const lname = req.body.lname;
    const email = req.body.email;
    const pNo = req.body.pNo;
    const id = req.params.id;

    const query = "UPDATE users SET fname=?, lname=?, email=?, pNo=? WHERE id = ?";
    con.query(query, [fname, lname, email, pNo,id] , (err,results) => {
        if(err) {
            console.log(err);
        }
        else{
            res.redirect("/users");
        }
    });
};//update a user 

module.exports.deleteUser = (req,res) => {
    const id = req.params.id;
    const query = "DELETE FROM users WHERE id = ?";
    con.query(query, id, (err,results) => {
        if(err) console.log(err);
        res.redirect("/users");
    })
};//delete a user