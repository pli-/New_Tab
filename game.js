var canvas = document.getElementById('canvas');
var ctx = canvas.getContext('2d');
 
canvas.width = 1500;
canvas.height = 800;
 
var mySprite = {
    x: 700,
    y: 500,
    width: 50,
    height: 50,
    speed: 500,
    color: '#FAFAFA'
};
 
var keysDown = {};
window.addEventListener('keydown', function(e) {
    keysDown[e.keyCode] = true;
});
window.addEventListener('keyup', function(e) {
    delete keysDown[e.keyCode];
});
 
function update(mod) {
    if (37 in keysDown) {
        mySprite.x -= mySprite.speed * mod;
		if (mySprite.x < 400)
			mySprite.x = 400;
    }
    if (38 in keysDown) {
        mySprite.y -= mySprite.speed * mod;
		if (mySprite.y < 50)
			mySprite.y = 50;
    }
    if (39 in keysDown) {
        mySprite.x += mySprite.speed * mod;
		if (mySprite.x > canvas.width - mySprite.width)
			mySprite.x = canvas.width - mySprite.width;
    }
    if (40 in keysDown) {
        mySprite.y += mySprite.speed * mod;
		if (mySprite.y > canvas.height - mySprite.height)
			mySprite.y = canvas.height - mySprite.height;
    }
}
 
function render() {
    ctx.fillStyle = '#000';
    ctx.fillRect(400, 50, canvas.width, canvas.height);
    ctx.fillStyle = mySprite.color;
    ctx.fillRect(mySprite.x, mySprite.y, mySprite.width, mySprite.height);
}
 
function run() {
    update((Date.now() - time) / 1000);
    render();
    time = Date.now();
}
 
var time = Date.now();
setInterval(run, 10);