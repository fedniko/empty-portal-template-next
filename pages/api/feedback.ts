import type { NextApiRequest, NextApiResponse } from 'next';
import nodemailer, { Transporter } from 'nodemailer';
import SMTPTransport from 'nodemailer/lib/smtp-transport';

export default async (req: NextApiRequest, res: NextApiResponse) => {
  const { name, organization, phone } = req.body;

  try {
    const transporter: Transporter = nodemailer.createTransport({
      host: process.env.MAIL_HOST,
      port: Number(process.env.MAIL_PORT),
      secure: true,
      auth: {
        user: process.env.MAIL_USER,
        pass: process.env.MAIL_PASS,
      },
    });
    const options = {
      from: process.env.MAIL_USER,
      to: process.env.MAIL_TO,
      subject: `Новая заявка с портала от ${name}, организация: ${organization}`,
      html: `<head>
                    <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
                    <title>HTML Template</title>
                    <meta name="viewport" content="width=device-width, initial-scale=1.0">
                   </head>
                   <body style="-ms-text-size-adjust: 100%; -webkit-text-size-adjust: 100%; line-height: 100%; margin: 0; padding: 0; width: 100% !important;">
                    <table cellpadding="0" cellspacing="0" width="100%" bgcolor="#f5f5f6" style="border-collapse: collapse; mso-table-lspace: 0pt; mso-table-rspace: 0pt;">
                        <tbody>
                        <tr>
                             <td height="20" width="600" style="border-collapse: collapse;">
                             </td>
                        </tr>
                        <tr>
                            <td style="border-collapse: collapse;">
                                <table class="main table-600" cellpadding="0" cellspacing="0" width="600" align="center" style="border-collapse: collapse; mso-table-lspace: 0pt; mso-table-rspace: 0pt;">
                                    <tbody>
                                    <tr>
                                        <td class="features-td" bgcolor="ffffff" style="border-collapse: collapse; padding-bottom: 50px; padding-top: 40px;">
                                            <table class="table-600" cellpadding="0" cellspacing="0" width="600" align="center" style="border-collapse: collapse; mso-table-lspace: 0pt; mso-table-rspace: 0pt;">
                                                <tbody>
                                                <tr>
                                                    <td align="left" style="border-collapse: collapse;">
                                                        <h2 style="font-family: 'Roboto', arial, sans-serif !important; font-size: 22px; font-weight: 600; line-height: 26px; margin-bottom: 0; margin-top: 0; padding-bottom: 20px; padding-left: 20px; padding-right: 20px;">
                                                            Получена новая заявка!
                                                        </h2>
                                                        <p style="color: #000000; font-family: 'Roboto', arial, sans-serif !important; font-size: 16px; font-weight: 400; letter-spacing: 0.28px; line-height: 26px; margin-bottom: 0; margin-top: 0; padding-bottom: 20px; padding-left: 20px; padding-right: 20px;">
                                                            Организация ${organization} хочет стать партнером, свяжитесь для уточнения информации
                                                        </p>
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td style="border-collapse: collapse;">
                                                        <table class="table-600" cellpadding="0" cellspacing="0" width="600" align="right" style="border-collapse: collapse; mso-table-lspace: 0pt; mso-table-rspace: 0pt;">
                                                            <tbody>
                                                            <tr>
                                                                <td class="company-contacts-td" style="border-collapse: collapse;">
                                                                    <p style="color: #000000; font-family: 'Roboto', arial, sans-serif !important; font-size: 18px; font-style: normal; font-weight: 500; line-height: 21px; margin-bottom: 0; margin-top: 0; padding-bottom: 5px; padding-left: 20px; padding-right: 20px;" align="right">
                                                                        ${name}
                                                                    </p>
                                                                    <p style="color: #000000; font-family: 'Roboto', arial, sans-serif !important; font-size: 18px; font-style: normal; font-weight: 500; line-height: 21px; margin-bottom: 0; margin-top: 0; padding-bottom: 5px; padding-left: 20px; padding-right: 20px;" align="right">
                                                                        Организация: ${organization}
                                                                    </p>
                                                                    <p style="color: #000000; font-family: 'Roboto', arial, sans-serif !important; font-size: 18px; font-style: normal; font-weight: 500; line-height: 21px; margin-bottom: 0; margin-top: 0; padding-bottom: 20px; padding-left: 20px; padding-right: 20px;" align="right">
                                                                        Телефон: ${phone}
                                                                    </p>
                                                                </td>
                                                            </tr>
                                                            </tbody>
                                                        </table>
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td class="features-button-td" align="center" style="border-collapse: collapse; padding-top: 16px;">
                                                        <a href='tel:${phone}' style="background: #2F88F0; border: 0; border-radius: 6px; color: #FFFFFF; cursor: pointer; font-family: 'Raleway', arial, sans-serif !important; font-size: 16px; font-weight: 400; line-height: 20px; padding: 16px 45px; text-decoration: none;">Позвонить</a>
                                                    </td>
                                                </tr>
                                                </tbody>
                                            </table>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td height="20" width="600" style="border-collapse: collapse;">
                                        </td>
                                    </tr>
                                    </tbody>
                                </table>
                            </td>
                        </tr>
                        </tbody>
                    </table>
                    </body>`,
    };
    const result: SMTPTransport.SentMessageInfo = await transporter.sendMail(
      options
    );
    res.status(200).json({ status: 'success' });
  } catch (err) {
    res.status(500).json({ status: 'error' });
  }
};
