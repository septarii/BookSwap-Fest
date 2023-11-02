const { Sequelize, DataTypes } = require("sequelize");

const database = new Sequelize("datepersoane", "root", "", {
  dialect: "mysql",
  host: "localhost",
  logging: false,
  define: {
    charset: "utf8",
    collate: "utf8_general_ci",
    timestamps: true,
  },
});

const personDb = database.define("persoane", {
  Id: {
    type: DataTypes.BIGINT,
    primaryKey: true,
    autoIncrement: true,
    allowNull: false,
  },
  lName: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  fName: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  telephone: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  email: {
    type: DataTypes.STRING,
    allowNull: false,
  },
});

function resetDatabase() {
  return database
    .sync({ force: true })
    .then(() => {
      return "succes!";
    })
    .catch((reason) => {
      return "eroare";
    });
}

function insertPerson(person) {
  return personDb
    .create(person)
    .then(() => {
      return "succes!";
    })
    .catch((err) => {
      console.log(err);
      return "eroare!";
    });
}

module.exports = {
  resetDatabase,
  insertPerson,
};
