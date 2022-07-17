let cat_btn = document.querySelector('#cat_btn')
let fox_btn = document.querySelector('#fox_btn');
let cat_result = document.querySelector('#cat_result');
let fox_result= document.querySelector('#fox_result');

cat_btn.addEventListener('click',catDisplay);
fox_btn.addEventListener('click',foxDisplay)

function catDisplay() {
	fetch('https://aws.random.cat/meow')
	.then((response) => response.json())
	.then((data) =>{
		console.log(data.file)
		cat_result.innerHTML = `<img src = ${data.file}>`
	});
}

function foxDisplay() {
	fetch('https://randomfox.ca/floof/')
	.then((response) => response.json())
	.then((data) =>{
		console.log(data.image)
		fox_result.innerHTML = `<img src = ${data.image}>`
	});
}

















// function foxDisplay(){
// 	fetch('https://randomfox.ca/floof/').this((response) => response.json())
// 	.then(data) =>{
// 		console.log(data)
// 	fox_result.innerHTML = `<img src = ${data.image}>`
// 	}
// }