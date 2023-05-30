import { sendMail } from "../../helpers/mailer";

export default async function (req, res) {
  const body = req.body;
  const response = await sendMail(body);

  return new Promise((resolve, reject) => {
    res.setHeader("Content-Type", "application/json");
    res.setHeader("Cache-Control", "max-age=180000");
    if (response) {
      res.status(200).end();
      resolve();
    } else {
      res.status(500).end();
      resolve();
    }
    // res.end();
  });
}
