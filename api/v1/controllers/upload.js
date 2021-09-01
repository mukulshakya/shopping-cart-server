const multiparty = require("multiparty");
const fs = require("fs");
const axios = require("axios");
const {
  imgur: { clientId },
} = require("config");

exports.uploadFile = async (req, res) => {
  try {
    const form = new multiparty.Form();
    form.parse(req, async (err, fields, files) => {
      const path = Object.values(files)[0][0].path;
      const file = fs.readFileSync(path);

      const response = await axios({
        method: "post",
        url: "https://api.imgur.com/3/image",
        headers: {
          Authorization: "Client-ID " + clientId,
          "Content-Type": "application/json",
        },
        data: { image: file.toString("base64") },
      });

      return res.success(
        response.data.data.link,
        "Image uploaded successfully"
      );
    });
  } catch (e) {
    console.log({ e });
    return res.error(e);
  }
};
