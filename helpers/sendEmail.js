import nodemailer from "nodemailer";

const { UKR_NET_API_KEY, UKR_NET_EMAIL } = process.env;

const nodemailerConfig = {
  host: "smtp.ukr.net",
  port: 2525,
  secure: true,
  auth: {
    user: UKR_NET_EMAIL,
    pass: UKR_NET_API_KEY,
  },
};

const transport = nodemailer.createTransport(nodemailerConfig);

const data = {
  to: "",
  subject: "test email",
  html: "<strong>test</strong>",
};

const sendEmail = async (data) => {
  const email = { ...data, from: UKR_NET_EMAIL };
  return transport.sendMail(email);
};

export default sendEmail;
