const sgMail = require('@sendgrid/mail');

sgMail.setApiKey("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");


let sendMail = async(email) => {

    const msg = {
        to: email,
        from: 'snyathi@nbsz.co.zw', // Use the email address or domain you verified above
        subject: 'Sending with Twilio SendGrid is Fun',
        text: 'and easy to do anywhere, even with Node.js',
        html: '<strong>and easy to do anywhere, even with Nodhhhhhhhe.js</strong>',
    };


    try {
        await sgMail.send(msg);
        console.log("Email sent successfully .......")
    } catch (error) {
        console.error(error);

        if (error.response) {
            console.error(error.response.body)
        }
    }
}

export default sendMail