var btn=document.querySelector('#click')


var inp=document.querySelector('#inTxt')
var luck=document.querySelector('#lucky')

var outputTxt=document.querySelector('#result')


btn.addEventListener('click',function clickHandler(){
	const inputval=((inp.value).split('-')).join("");
	const luckval=luck.value;
	let sum=0;
	for(letter of inputval){
		sum=sum+Number(letter);
	}
	if(sum%luckval==0){
		console.log(sum)
		outputTxt.innerHTML=`sum is ${sum},your lucky number is ${luckval},and you are lucky`
	}
	else{
		outputTxt.innerHTML="not lucky"
	}

});