// factory bnani hai  return kregi grade ka character "a""b"
// 90-A
// 80-B
// 70-C
//60>=D
//F


let score=99
//factory template
function gradeCalculator(score){
    if(score>=90){
return "A";
    }else if(score>=80){
        return "B"
    }else if(score>=70){
        return "C"
    }else if(score>=60){
        return "D"
    }else{
        return "F failu hogya "
    }
}

console.log(gradeCalculator(score));
