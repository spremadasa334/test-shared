const express = require('express');
const router = express.Router();
const con = require('../dbCon');

router.get('/',(req,res) => {
    const query = "SELECT * from users";
    con.query(query, (err, rows) =>{
        if(err) res.status(400);
        res.status(200).render('./pages/index', {data: rows});        
    });
});//display all users

router.get('/edit/:id',(req,res) => {
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
})//display one users

router.get('/add', (req,res) => {
    res.render('./pages/addUser');
})
router.post('/add', (req,res) => {
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

})//add new user 

router.post('/edit/:id', (req,res) => {
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
})//update a user 

router.get('/delete/:id', (req,res) => {
    const id = req.params.id;
    const query = "DELETE FROM users WHERE id = ?";
    con.query(query, id, (err,results) => {
        if(err) console.log(err);
        res.redirect("/users");
    })
})//delete a user
module.exports = router;