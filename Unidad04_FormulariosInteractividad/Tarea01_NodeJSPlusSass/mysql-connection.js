const mysql = require('mysql');

let connection = mysql.createConnection(
    {
      host     : 'localhost',
      user     : 'wpadmin',
      password : 'wp4dm1n',
      database : 'wordpress',
    }
);
 
/*
app.get('/damelotodo/:id', function (req, res) {
    
    connection.connect();
    var id = req.params.id;
    var queryString = 'SELECT * FROM wp_posts WHERE ID ='+id+';';

    connection.query(queryString, function(err, rows, fields) {
        if (err) throw err;
     
        for (var i in rows) {
            console.log('Post Titles: ', rows[i].post_title);
            
        }

        res.send(rows);
    });
     
    connection.end();
  });
*/
