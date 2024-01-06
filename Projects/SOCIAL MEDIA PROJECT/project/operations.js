const mysql = require('mysql2');

const connection = mysql.createPool({
    host: '127.0.0.1',
    user: 'root',
    password: '97056@Dileep',
    database: 'social_meadia'
}).promise();

async function readPosts() {
    try {
        const output = await connection.query("SELECT * FROM posts");
        return output[0];
    } catch (error) {
        console.error("Error reading posts:", error);
    }
}

readPosts().then(result => {
    console.log(result);
}).catch(error => {
    console.error("Error:", error);
});
