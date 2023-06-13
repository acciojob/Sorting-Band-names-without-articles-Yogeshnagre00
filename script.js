//your code here
let touristSpots = ['The Virupaksha Temple', 'an Victoria Memorial', 'a xTajmahal'];

function tri(name){
	 return name.replace(/^(a |the |an )/i,'');
  
 }

 let a= touristSpots.sort((a,b) => tri(a)>tri(b) ? 1 : -1 );
 console.log(a);


