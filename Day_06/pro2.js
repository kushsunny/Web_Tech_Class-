let num=50; 
let count=0; 
    for(i=1; i<=50; i++){
        if(num%i==0){
            count++;
        }
    }
    if(count==2){
        console.log("prime")
    }else{
        console.log("not prime")

    }3