 
const express = require('express');
const app = express();
const connection = require('./src/database/db')
const port = 3001;
app.listen(port, () => {
  console.log(`Server listening at http://localhost:${port}`);
});
app.get('/users', (req, res) => {
  const sql = 'SELECT * FROM users';
  connection.query(sql, (err, results) => {
    if (err) {
      console.error('Error executing query:', err);
      return;
    }
    res.json(results);
  });
});
app.post('/users', (req, res) => {
const data = { name:"bunds2",password:12345,contact:"+94710985702",email:"bunds2@gmail.com" };
connection.query('INSERT INTO users SET ?', data, (error, results) => {
  if (error) {
    console.error('Error inserting data:', error);
    res.status(500).json({ error: 'Error inserting data' });
  } else {
    console.log('Data inserted successfully!');
    res.status(200).json({ message: 'Data inserted successfully' });
  }
});
});