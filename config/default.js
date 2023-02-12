module.exports = {
  db: {
    url: {
      local: "mongodb://localhost:27017/shopping-cart",
      production: process.env.MONGODB_URI || "",
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
    options: process.env.JWT_OPTIONS ? JSON.parse(process.env.JWT_OPTIONS) : {},
  },
  imgur: {
    clientId: process.env.IMGUR_CLIENT_ID || "",
    clientSecret: "",
  },
};
