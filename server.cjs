// server.js (backend)

const express=require('express');
const mysql = require('mysql');
const cors = require('cors');
const app = express();
const port = 8081;
app.use(express.json());
// Replace these credentials with your MySQL database credentials
const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '',
  database: 'osmosis',
});
app.use(cors());
connection.connect((err) => {
  if (err) throw err;
  console.log('Connected to the MySQL database!');
});

// Endpoint to fetch assets data from the database
app.get('/api/assets', (req, res) => {
  const query = 'SELECT * FROM assets';

  connection.query(query, (err, results) => {
    if (err) throw err;
    res.json(results);
  });
});

app.get('/api/asset1', (req, res) => {
    const query = 'SELECT * FROM assets1';
  
    connection.query(query, (err, results) => {
      if (err) throw err;
      res.json(results);
    });
  });

  app.get('/api/asset3', (req, res) => {
    const query = 'SELECT * FROM assets2';
  
    connection.query(query, (err, results) => {
      if (err) throw err;
      res.json(results);
    });
  });

app.post('/login',(req,res)=>{
    const sql="select * from users where email=? and password=?";
    connection.query(sql,[req.body.email,req.body.password],(err,data)=>{
        if(err) return res.json("Error");
        if(data.length > 0){
            return res.json("login Success")
        }
        else{
            return res.json("No record")
        }
    })
})

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
