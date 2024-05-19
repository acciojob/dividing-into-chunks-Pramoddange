const arr = [1, 2, 3, 4, 1, 0, 2, 2];

const divide = (arr, n) => {
  // Write your code here
	 const result = [];
  
  let sub_arr=[];
	let sum=0;
  for (let i = 0; i < arr.length; i++) {
	  sum+=arr[i];
   if(sum<=n){
	   sub_arr.push(arr[i]);
   }else{
	   result.push(sub_arr);
	   sum=0;
	   sub_arr=[];
	   if(arr[i]<=n){
		   sum+=arr[i];
		   sub_arr.push(arr[i]);
	   }
   }
  }
	result.push(sub_arr);
	return result;
   
};

const n = prompt("Enter n: ");
alert(JSON.stringify(divide(arr, n)));
