function getResult() {
    let English =parseFloat( document.getElementById("English").value)
    let Maths =parseFloat( document.getElementById("Maths").value)
    let Physics =parseFloat(document.getElementById("Physics").value)
    let java =parseFloat( document.getElementById("Java").value)
    let C= parseFloat(document.getElementById("C").value)
    let Oracle =parseFloat (document.getElementById("Oracle").value)

    let total = English + Maths + Physics + java + C + Oracle;
    let percentage = (total * 100) / 600;
    if (percentage >= 90){
     grade = "A+";
    }
    else if (percentage >= 80){
         grade = "A";
    }
    else if (percentage >= 70){
     grade = "B+";
    } 
    else if (percentage >= 60) {
        grade = "B";
    }
    else if (percentage >= 50) {
        grade = "C"; 
    }
    else if (percentage >= 40) {
        grade = "D";
    }
    else if (percentage >= 30){ 
            grade = "E";
         }
    else {
         grade = "F";
    }

    document.getElementById("total").innerHTML = total;
    document.getElementById("percentage").innerHTML = percentage;
    document.getElementById("grade").innerHTML = grade;

    if(percentage>=30){
        document.getElementById("showresult").innerHTML= "Congratulations you are passed";
    }
        else{
        document.getElementById("showresult").innerHTML= "you are failed";
        
    }
}