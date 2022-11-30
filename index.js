
loading()
function loading(){
	let i = 0
	let timer = setInterval(()=>{
		if(i>100){
			page1()
			clearInterval(timer)
			return
		}
		document.querySelector('.loading p').innerHTML = i+'%'
		
		i++
	},20)
}

function page1(){
	document.querySelector('.loading').style.display = 'none'
	document.querySelector('.page1').style.display = 'block'
	document.querySelector('.start').onclick = function(){
		document.querySelector('.page1').style.display = 'none'
		document.querySelector('.page2').style.display = 'block'
	}
}

page2()
function page2(){
	let count = 0
	let mfish = document.querySelector('.mfish')
	let hanmmer = document.querySelector('.hanmmer')
	let gongde = document.querySelector('.gongde')
	let counts = document.querySelector('.count')
	document.querySelector('.page2').addEventListener('click',function(){
		count += 1
		counts.innerHTML = '功德:'+count 
		mfish.animate([
			{transform: 'scale(1)'},
			{transform: 'scale(1.1)'},
			{transform: 'scale(1)'}
		],{
			duration:500
		})
		
		hanmmer.animate({
			transform:['rotate(0deg)','rotate(-10deg)','rotate(0deg)']
		},{
			duration:200
		})
		
		gongde.animate({
			transform: ['translateY(0vh)','translateY(-10vh)'],
			opacity:[0,1,0]
		},{
			duration:500
		})
		
	})
	
}