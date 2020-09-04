const Promise = require("bluebird");
const mysql = require("mysql");

Promise.promisifyAll(require("mysql/lib/Connection").prototype);
Promise.promisifyAll(require("mysql/lib/Pool").prototype);

const DB_CONFIG = {
    host: "localhost",
    user: "root",
    password: "tejaswini",
    database: "schoollogin",
};

let addUser = async (input) => {
    const connection = mysql.createConnection(DB_CONFIG);
    await connection.connectAsync();

    let sql =
        "insert into logindata (Username, Email, Password, Mobile) values (?, ?, ?, ?)";
    await connection.queryAsync(sql, [
        input.username,
        input.email,
        input.password,
        input.mobile,
    ]);

    await connection.endAsync();
};

let authenticateUser = async (input) => {
    const connection = mysql.createConnection(DB_CONFIG);
    await connection.connectAsync();

    let sql = "select * from logindata where Username=? and Password=?";
    const results = await connection.queryAsync(sql, [
        input.username,
        input.password,
    ]);

    await connection.endAsync();

    if (results.length === 0) {
        throw new Error("Invalid Credentials");
    }
};
/*
let forgetPass = async (input) => {
    const connection = mysql.createConnection(DB_CONFIG);
    await connection.connectAsync();

    sql = "UPDATE logindata SET Password = ? where Email = ? ";
    let result = await connection.queryAsync(sql, [
        input.password,
        input.email]);

    await connection.endAsync();
    return result;
}
*/
module.exports = { addUser, authenticateUser };
