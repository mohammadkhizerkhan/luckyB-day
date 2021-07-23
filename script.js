var btn=document.querySelector('#click')


var inp=document.querySelector('#inputTxt')
var luck=document.querySelector('#lucky')

var outputTxt=document.querySelector('#result')


btn.addEventListener('click',function clickHandler(){
	const inputval=((inp.value).split('-')).join("");
	const luckval=luck.value;
	console.log(inputval)
	let sum=0;
	for(letter of inputval){
		sum=sum+Number(letter);
	}
	if(sum%luckval==0){
		outputTxt.innerHTML=`you are lucky`
	}
	else{
		outputTxt.innerHTML="not lucky"
	}

});