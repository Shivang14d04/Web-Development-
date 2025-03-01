import inquirer from "inquirer";
import qr from "qr-image";
import fs from "fs";
import { error } from "console";

inquirer.prompt([
    {
        message : "enter the url",
        name :"URL"

    },
])
.then((answers)=>{
    const url = answers.URL;
    var qr_svg = qr.image(url);
    qr_svg.pipe(fs.createWriteStream("qr_image.png"));

    fs.writeFile("url.txt" , url ,(err)=>{
        if(err) throw err
        console.log("your file have been saved");

    });
})
.catch((error)=>{
    if(error.isTtyError){

    }
    else{

    }

});
