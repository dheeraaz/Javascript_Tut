let sum = 0, i = 1;
while(1){
    if(i>100){
        console.log("maximum value reached");
        break;
    }
    sum = sum + i;
    i++;
}
console.log(`your result is ${sum}`);
console.log("*************************");

for(let i=1;i<=10;i++){
    if(i===4){
        console.log("----------aba line no 4 skip hunxa-----------");
        continue;

        //yo line paxi control directly mathi janxa, yo vanda tala ko line chaldaina
        //i==4 vayepaxi, control mathi janxa ra i==5 hunxa
    }
    console.log(`line number ${i}`);
}