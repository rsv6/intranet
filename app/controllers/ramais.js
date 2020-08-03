const fs = require("fs");

const get = (req, res) => {
    
    const data = fs.readFileSync("./app/models/db/ramais/ramais.json");
    const ramais = JSON.parse(data);
    res.render("ramais", { ramais });
}

module.exports = {
    get
}