const express = require("express");
const nodemailer = require("nodemailer");
const bodyParser = require("body-parser");
const dotenv = require("dotenv");
const cors = require('cors');
const path = require("path");


dotenv.config();

const app = express();
app.use(cors());
const PORT = process.env.PORT || 3001;

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use(express.static(path.join(__dirname, "public")));

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});

app.post("/send_mail", async (req, res) => {
    const { name, email, subject, message } = req.body;

    const transport = nodemailer.createTransport({
        service: 'gmail',
        auth: {
            user: process.env.SMTP_MAIL, // Use the SMTP_MAIL instead of SMTP_USER
            pass: process.env.SMTP_PASSWORD,
        }
    });

    const htmlContent = `
    <html>
    <head>
        <style>
            body {
                font-family: Arial, sans-serif;
                background-color: #f4f4f4;
                margin: 0;
                padding: 0;
            }
            .container {
                background-color: #fff;
                max-width: 600px;
                margin: 0 auto;
                padding: 20px;
                box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
            }
            h1 {
                color: #333;
            }
            p {
                margin: 0 0 20px;
                color: #666;
            }
            strong {
                color: #333;
            }
        </style>
    </head>
    <body>
        <div class="container">
            <h1>Client</h1>
            <p><strong>Name:</strong> ${name}</p>
            <p><strong>Email:</strong> ${email}</p>
            <p><subject>Subject:</strong> ${subject}</p>
            <p><strong>Message:</strong> ${message}</p>
        </div>
    </body>
    </html>
    `;

    const mailOptions = {
        from: process.env.SMTP_MAIL,
        to: "ounadifouad@gmail.com", 
        subject: subject,
        html:htmlContent,
        subject:'Client'
    };

    try {
        await transport.sendMail(mailOptions);
        res.status(200).send("Email sent successfully");
    } catch (error) {
        console.error("Error sending email:", error);
        res.status(500).send("Email not sent");
    }
});

