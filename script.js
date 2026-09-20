function getResult(){
    let roll_no=document.getElementById("input").value;
    fetch("input.json")
    .then(response=>response.json())
    .then(data=>{
        let student=data.find(student=>student.roll_no==roll_no);
        if(student){
            document.getElementById("name").innerHTML="Name: "+student.name;
            document.getElementById("rank").innerHTML="Rank: "+student.rank;
            document.getElementById("result").innerHTML="Result: "+student.sgpa;
            document.getElementById("error").innerHTML="";
        }
        else{
            document.getElementById("name").innerHTML="";
            document.getElementById("rank").innerHTML="";
            document.getElementById("result").innerHTML="";
            document.getElementById("error").innerHTML="Not Found";
        }
    })
}