const nodemailer = require('nodemailer');
const transporter = nodemailer.createTransport({
    service:"gmail",
    auth:{
        user:"reshmaanil68@gmail.com",
        pass:"rqfqavruueppedoz"
    }
});
 const mailOptions = {
    from: "reshmaanil68@gmail.com",
    to: "reshmaanil68@gmail.com",
    subject:"Nodemailer test",
    html:"Test <button>sending</button> Gmail using Node JS"

 };
  transporter.sendMail(mailOptions, function(error, info){
    if (error) {
        console.log(error);
        
    } else {
        
        console.log("Email sent:" +info.response);
    }
  })