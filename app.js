const { response } = require('express')
const express = require('express')
const nodemailer = require('nodemailer')
const app = express()
const port = 5000

function sendEmail(){
    return new Promise((resolve, reject)=>{

        var transporter = nodemailer.createTransport({
            service: 'gmail',
            auth: {
                user: 'srkarjun5@gmail.com',
                pass:'htbndyfaswhtpvqw'
            }
        })
        const mail_configs ={
            from:'srkarjun5@gmail.com',
            to: 'arjun13aju@gmail.com',
            subject: 'Testing coding',
            text: "checking this mail"
        }
        transporter.sendMail(mail_configs, function(error, info){
            if(error){
                console.log(error)
                return reject({message:'An error has occured'})
            }
            return resolve({message: "Email has sent successfully"})
        })
    })
}

app.get('/',(req,res)=> {
    sendEmail()
    .then(response => res.send(response.message))
    .catch(error => res.status(500).send(error.message))
})

app.listen(port, () => {
    console.log('nodemailerProject is listening at http://localhost:${port}')
})