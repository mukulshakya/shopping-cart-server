module.exports = {
  db: {
    url: {
      local: "mongodb://localhost:27017/shopping-cart",
      production: "",
    },
    options: {
      keepAlive: 1000,
      useNewUrlParser: true,
      useCreateIndex: true,
      useFindAndModify: false,
      useUnifiedTopology: true,
    },
  },
  jwt: {
    secret: process.env.JWT_SECRET || "",
    options: JSON.parse(process.env.JWT_OPTIONS || {}),
  },
  imgur: {
    clientId: process.env.IMGUR_CLIENT_ID,
    clientSecret: "",
  },
};
