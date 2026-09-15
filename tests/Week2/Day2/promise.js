let marks = 20
let studentRecord = new Promise((resolve,reject)=>{
    if(marks>35){
        resolve('Passed')
    }else {
        reject("Failed")
    }
})
//console.log(studentRecord)

studentRecord
.then(result=>console.log(result))
.catch(error=>console.log(error))