var fs = require('fs');

//Write File override the data
/*
fs.writeFile('myfile.txt','My text file',function(err){
    if(err) throw error;
    console.log('File created')
}
)

*/
//keep adding data in existing file or if dosent exist then create the file then add data
/*
fs.appendFile('myfile.txt','This is appeading data', function(){
    console.log("Data Added ")
})
fs.appendFile('myfile.csv','This is appeading data', function(){
    console.log("Data Added ")
})
fs.appendFile('myfile.xls','This is appeading data', function(){
    console.log("Data Added ")
})

fs.appendFile('myfile.xml','This is appeading data', function(){
    console.log("Data Added ")
})
*/
fs.appendFile('myfile1.txt','This is appeading data', function(){
    console.log("Data Added ")
})

// Read data from existing file else throw error if its not  exist
/*
fs.readFile("myfile.txt",'utf-8',function(err,data){
    if(err) throw err;
    console.log(data)

}
)
*/

//Rename File which existing 
/*
fs.rename('myfile.txt','myfile1.txt',function(err){
    if(err) throw err;
    console.log("File Renamed")
})
*/

//Delete File
/*
fs.unlink('mytext.txt',function(err){
    if(err) throw err;
    console.log("File Deleted ")
})
*/