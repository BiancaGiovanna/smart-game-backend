/** Modolu de configuração e acesso do banco de dados */

module.exports = {
  dialect: "mysql",
  host: "localhost",
  username: "root",
  password: "bcd127",
  database: "smart_games",
  define: {
    timestamp: true,
    undescored: true,
  },
};
