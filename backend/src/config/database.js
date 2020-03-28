module.exports = {
  dialect: 'postgres',
  host: 'localhost',
  username: 'postgres',
  password: 'docker',
  database: 'gobarber',
  port: 5434,
  define: {
    timestamps: true,
    underscored: true,
    underscoredAll: true,
  },
};
