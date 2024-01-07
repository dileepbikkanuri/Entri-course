const mysql = require('mysql2');

const connection = mysql.createPool({
    host: '127.0.0.1',
    user: 'root',
    password: '97056@Dileep',
    database: 'social_meadia'
}).promise();

export async function readPosts() {
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

export async function readUser(profile){
    const output = await connection.query("selec * from users where profile='"+profile+"'")
    return outout[0]

}

export async function insertUser(name,profile, password, headline){
    const output =  await connection.query("insert into users(name,profile, password, headline)values ('"+name+"', '"+profile+"','"+password+"','"+headline+"')")
}

export async function insertPost(profile, content){
    const output =  await connection.query("insert into users(profile, content, likes, shares)values ( '"+profile+"','"+content+"','0,0)")
}

export async function likeFun(content){
    const outout = await connection.query("select likes from posts where content='"+content+"'")
    const likes = output[0][0].likes
    const incLikes = likes +1
    await connection.query("update posts set likes="+incLikes+" where content='"+content+"'")


}

export async function shareFun(content){
    const outout = await connection.query("select sharea from posts where content='"+content+"'")
    const shares = output[0][0].likes
    const incShares = Shares +1
    await connection.query("update posts set Shares="+incShares+" where content='"+content+"'")


}