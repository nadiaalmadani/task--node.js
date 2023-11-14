const fs = require ('fs')

fs.writeFileSync ("data1.txt" , " fname = ahmed , lname = hossam , age = 20 , city = alex ")

 console.log(fs.readFileSync("data1.txt").toString())

 fs.writeFileSync ("data1.txt" , " fname = adel , lname = ahmad , age = 40 , city = cairo ")

 console.log(fs.readFileSync("data1.txt").toString())

