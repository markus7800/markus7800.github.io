
window.onload=function() {
	canv=document.getElementById("gc");
	ctx=canv.getContext("2d");
	// document.addEventListener("keydown",keyPush);
	setInterval(game,1000/5);
}
px=py=5; // head
// tc = 10; // grid size
tc = 11; // grid size
gs = 40; // rect size
ax=Math.floor(Math.random()*tc)
ay=Math.floor(Math.random()*tc); // apple
xv=yv=0; // velocity

// optimistic relapp n=10 avoidjumping=true
policy = [
	[ "D",  "R",  "D",  "D",  "R",  "R",  "R",  "R",  "D",  "R",  "R",  "R",  "R",  "R",  "R",  "U",  "R",  "R",  "R",  "R",  "U" ],
	[ "D",  "D",  "D",  "R",  "D",  "D",  "R",  "D",  "R",  "R",  "R",  "R",  "R",  "R",  "R",  "R",  "R",  "R",  "U",  "U",  "R" ],
	[ "D",  "D",  "D",  "R",  "R",  "R",  "R",  "R",  "R",  "R",  "R",  "R",  "R",  "R",  "U",  "U",  "U",  "U",  "R",  "U",  "U" ],
	[ "R",  "D",  "D",  "R",  "R",  "R",  "R",  "R",  "R",  "D",  "R",  "R",  "R",  "R",  "R",  "R",  "U",  "R",  "R",  "U",  "U" ],
	[ "R",  "R",  "R",  "R",  "R",  "R",  "D",  "R",  "D",  "D",  "R",  "U",  "R",  "U",  "U",  "R",  "U",  "R",  "U",  "U",  "R" ],
	[ "R",  "D",  "D",  "R",  "R",  "D",  "R",  "R",  "R",  "D",  "R",  "R",  "R",  "R",  "U",  "U",  "R",  "U",  "U",  "R",  "U" ],
	[ "D",  "R",  "R",  "R",  "D",  "R",  "D",  "R",  "D",  "R",  "R",  "U",  "R",  "U",  "R",  "R",  "R",  "U",  "R",  "U",  "U" ],
	[ "R",  "D",  "R",  "D",  "R",  "R",  "D",  "R",  "D",  "D",  "R",  "R",  "R",  "U",  "U",  "R",  "R",  "R",  "U",  "U",  "R" ],
	[ "R",  "R",  "R",  "R",  "D",  "R",  "D",  "R",  "D",  "R",  "R",  "R",  "U",  "U",  "R",  "R",  "U",  "R",  "R",  "R",  "U" ],
	[ "D",  "R",  "R",  "R",  "D",  "D",  "D",  "D",  "D",  "D",  "R",  "U",  "U",  "R",  "U",  "R",  "R",  "R",  "U",  "U",  "R" ],
	[ "D",  "D",  "D",  "D",  "D",  "D",  "D",  "D",  "D",  "D",  "X",  "U",  "U",  "U",  "U",  "U",  "U",  "U",  "U",  "U",  "U" ],
	[ "D",  "L",  "L",  "L",  "L",  "L",  "L",  "L",  "D",  "D",  "L",  "U",  "L",  "L",  "U",  "U",  "L",  "U",  "U",  "L",  "L" ],
	[ "L",  "L",  "D",  "D",  "D",  "D",  "L",  "D",  "L",  "D",  "L",  "U",  "L",  "L",  "L",  "L",  "L",  "L",  "L",  "L",  "U" ],
	[ "D",  "D",  "L",  "D",  "D",  "L",  "L",  "L",  "D",  "L",  "L",  "U",  "L",  "L",  "U",  "L",  "L",  "L",  "U",  "L",  "L" ],
	[ "D",  "D",  "L",  "L",  "L",  "L",  "D",  "L",  "L",  "L",  "L",  "L",  "U",  "L",  "U",  "U",  "L",  "L",  "L",  "U",  "U" ],
	[ "L",  "L",  "L",  "L",  "D",  "L",  "L",  "D",  "L",  "L",  "L",  "U",  "U",  "U",  "U",  "U",  "L",  "L",  "U",  "L",  "L" ],
	[ "L",  "L",  "D",  "L",  "D",  "L",  "L",  "D",  "D",  "D",  "L",  "L",  "U",  "L",  "U",  "L",  "L",  "L",  "L",  "L",  "L" ],
	[ "L",  "L",  "D",  "D",  "L",  "L",  "D",  "L",  "D",  "D",  "L",  "L",  "L",  "L",  "U",  "U",  "L",  "L",  "L",  "U",  "L" ],
	[ "L",  "D",  "D",  "D",  "L",  "L",  "D",  "L",  "L",  "L",  "L",  "U",  "U",  "L",  "U",  "L",  "U",  "L",  "U",  "L",  "L" ],
	[ "D",  "D",  "L",  "D",  "L",  "L",  "D",  "D",  "L",  "L",  "L",  "U",  "L",  "L",  "U",  "L",  "L",  "L",  "U",  "L",  "U" ],
	[ "L",  "D",  "D",  "D",  "L",  "D",  "L",  "L",  "L",  "L",  "L",  "U",  "L",  "L",  "U",  "L",  "L",  "U",  "U",  "U",  "L" ]
]

n = 0



function test(tpx, tpy, tax, tay) {
	sx = tpx - tax 
	sy = tpy - tay

	action = policy[sx + tc - 1][sy + tc - 1]

	console.log("State")
	console.log(tpx, tpy)
	console.log(tax, tay)
	console.log(sx, sy)
	console.log("Action", action)
}
function test_policy() {

	test(0,0,10,10)

	test(5, 5, 3, 6)
	test(5, 3, 3, 6)
	test(6, 3, 3, 8)
	test(7, 2, 3, 7)
	test(4, 5, 9, 0)

}


function game() {
	px+=xv;
	py+=yv;

	if(px<0 || px>tc-1 || py<0 ||py>tc-1 ) {
		console.log("crashed into wall")
		px = py = 5
		ax=Math.floor(Math.random()*tc);
		ay=Math.floor(Math.random()*tc);
		n = 0
	}
	// ctx.clearRect(0, 0, canv.width, canv.height);
	ctx.fillStyle="#004953";
	ctx.fillRect(0,0,canv.width,canv.height);

	ctx.fillStyle="lime";

	ctx.fillRect(px*gs,py*gs,gs-2,gs-2)

	if(ax==px && ay==py) {
		console.log("ate apple")
		ax=Math.floor(Math.random()*tc);
		ay=Math.floor(Math.random()*tc);
		n = 0
	}

	ctx.fillStyle="red";
	ctx.fillRect(ax*gs,ay*gs,gs-2,gs-2);

	// sx = ax - px + 9
	// sy = ay - py + 9

	sx = px - ax + tc - 1
	sy = py - ay + tc - 1


	action = policy[sx][sy]
	n = n + 1


	if (n > 30) {
		console.log("too many steps")
		px = py = 5
		ax=Math.floor(Math.random()*tc);
		ay=Math.floor(Math.random()*tc);
		n = 0
	}

	// console.log(n)

	// console.log(sx, sy, action)

	// console.log(policy[-1+9][0+9])
	// console.log(policy[0+9][-1+9], "X", policy[0+9][1+9])
	// console.log(policy[1+9][0+9])

	xv = yv = 0
	switch(action) {
		case "U":
			xv = 0; yv=-1
			break
		case "D":
			xv = 0; yv=1
			break
		case "L":
			xv = -1; yv=0
			break
		case "R":
			xv = 1; yv=0
			break
	}

}
function keyPush(evt) {
	switch(evt.keyCode) {
		case 37:
			xv=-1;yv=0;
			break;
		case 38:
			xv=0;yv=-1;
			break;
		case 39:
			xv=1;yv=0;
			break;
		case 40:
			xv=0;yv=1;
			break;
	}
}