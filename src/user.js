const mysql = require("mysql");
const Promise = require("bluebird");
Promise.promisifyAll(require("mysql/lib/Connection").prototype);

const dbinfo = {
  host: "localhost",
  user: "root",
  password: "cdac",
  database: "js",
};

async function connectionCheck() {
  const connection = mysql.createConnection(dbinfo);
  await connection.connectAsync();
  console.log("Connection Success");
  await connection.endAsync();
}

connectionCheck();

async function inputData(emp) {
  const connection = mysql.createConnection(dbinfo);
  await connection.connectAsync();

  let sql = `insert into emp(id ,name ,email , mobile , password) values(?,?,?,?,?)`;
  connection.queryAsync(sql, [
    // emp.id,
    emp.name,
    emp.email,
    emp.mobile,
    emp.password,
  ]);

  console.log("Data addition Success");
  await connection.endAsync();
}

let emp = {
  id: 01,
  name: "Rakesh",
  email: "Rakesh123@.com",
  mobile: "907561187",
  password: "123456845",
};

inputData();

// module.exports = { selectAllUser };
