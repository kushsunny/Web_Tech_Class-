let arr=[100,200,300,400,500];
let new_arr=[] 
for(let i=0; i<=arr.length-1; i++){
    
    let discount = ( arr[i] * 10 ) / 100; 
    // new_arr += arr[i] - discount + " ";  
    // arr+=arr[i]-discount + " ";
    // let discounted_item=arr[i]-discount+" ";
    // arr.push(discounted_item);
    arr.push(arr[i]-discount);
}
console.log(arr)