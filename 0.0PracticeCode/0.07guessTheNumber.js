gnum = Math.floor(Math.random()*100+1);
//Math.random() ley 0<=number<1 samma dinxa
//Math.random()*100 ley 0 dekhi less than(100) samma dinxa
//aba tesma 1 add gardiyo vaney every num ma 1 add huni vayekole new range 1<=number<=100 hunxa
let e_num,count=0;

while(e_num!==gnum){
    e_num = Number(prompt("Enter a number"));
    count++;
    if(e_num<gnum){
        alert("The entered number is less than the actual number")
    }
    else if(e_num>gnum){
        alert("The entered number is greater than the actual number")
    }
    else{
        alert("Bingo!!Its a correct guess, i.e: " + gnum + " and your score is "+(100-count));
    }
}