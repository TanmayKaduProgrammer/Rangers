canvas = new fabric.Canvas('canvas');
ctx = canvas.getContext("2d");
// Create canvas variable
 block_y=1;
 block_x=1;

block_image_width = 350;
block_image_height = 430;

var block_image_object= "";

function new_image(get_image)
{
	fabric.Image.fromURL(get_image, function(Img) {
		block_image_object = Img;
	
		block_image_object.scaleToWidth(150);
		block_image_object.scaleToHeight(150);
		block_image_object.set({
		top:10,
		left:10
		});
		canvas.add(block_image_object);
	
		});
}

window.addEventListener("keydown", my_keydown);

function my_keydown(e)
{
keyPressed = e.keyCode;
console.log(keyPressed);

	if(keyPressed == '82') // add appropriate keycode
	{
		new_image("rr.jpg");
	}
	if(keyPressed == '71')
	{
		new_image("gr.png");
	}
	
	if(keyPressed == '89')
	{
		new_image("yr.png");
	}
	if(keyPressed == '80')
	{
		new_image("pr.png");
	}
	if(keyPressed == '66')
	{
		new_image("br.png");
	}
	
}

