import { NextApiRequest, NextApiResponse } from "next";
import nodemailer from "nodemailer";

const auth = {
  user: process.env.CONTACT_EMAIL,
  pass: process.env.CONTACT_PASS,
};

const transporter = nodemailer.createTransport({
  host: "smtp.zoho.com",
  port: 465,
  secure: true, //ssl
  auth,
});

class Message {
  senderName: string;
  senderEmail: string;
  content: string;

  constructor(props: Message) {
    Object.assign(this, props);
  }
}

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  const message = new Message(req.body);

  let mailOptions = {
    from: '"Contato Portfólio" <contato@henriquecouto.com.br>',
    to: "email@henriquecouto.com.br",
    subject: `Nova mensagem através do Portfólio`,
    html: `<div>
    Nome: ${message.senderName} <br/>
    Email: ${message.senderEmail} <br/>
    Mensagem: ${message.content} 
    </div>`,
  };

  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      res.status(500).json({ result: "error", error });
    } else {
      res.json({ result: "success", info: info.response });
    }
  });
};

export default handler;
