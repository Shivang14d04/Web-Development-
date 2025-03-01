import express from "express";

const app = express();
const port = 3000;

app.get("/" , (req,res)=>{
    const date = new Date();
    const day = date.getDay();

    let type = "weekday";
    let adv = "work hard";

    if(day==0|| day==6){
        type = "weekend";
        adv = "have some fun";
    }

    res.render("index.ejs",{
        dayType : type,
        advice : adv
    });
})

app.listen(port ,()=>{
    console.log(`server is running on port ${port}`);
});