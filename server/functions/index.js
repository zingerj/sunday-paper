const functions = require("firebase-functions");

// // Create and Deploy Your First Cloud Functions
// // https://firebase.google.com/docs/functions/write-firebase-functions
//
// exports.helloWorld = functions.https.onRequest((request, response) => {
//  response.send("Hello from Firebase!");
// });

exports.sendEmail = functions.https.onCall((data, context) => {
  const { content, subject, email } = data;
  if (!content || !subject || !email) return { error: "Missing fields." };

  const smtpConfig = {
    host: "smtp.gmail.com",
    port: 465,
    secure: true, // upgrade later with STARTTLS
    auth: {
      user: "relations@deltahacks.com",
      pass: "BKkQE6qyY26PHfAy"
    }
  };
  const transporter = nodemailer.createTransport(smtpConfig);
  const options = {
    from: '"Robots" <robots@deltahacks.com>',
    to: `${email}`,
    subject: `${subject}`,
    text: `${content}`
  };
  transporter.sendMail(options, (err, info) => {
    if (err) {
      console.error(err);
      return {
        status: 500,
        message: "Message failed to send!"
      };
    }
    console.log("Message Sent!");
    console.log(info);
    return { status: 200, message: "Successfully sent mail." };
  });
});
