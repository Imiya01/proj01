window.onload = function(){


// TURNED ALL BULLETPOINTS GREEN
alert('hello world javascript');
console.log('hello world javascript console');

for(let i = 0; i < document.getElementsByTagName('li').length; i++)
{
document.getElementsByTagName('li')[i].style.color = 'green';
}

//Adding text to DOM
const main_heading = document.createElement('h1')
const heading_text = document.createTextNode('Hello dynamic world!')
main_heading.appendChild(heading_text);
document.body.appendChild(main_heading);

//adding text to DOM existing text

const paragraph = document.getElementById("paragraph1");
const text = document.createTextNode("This just got added");

paragraph.appendChild(text);

const para = document.createElement("paragraph3");
const textNode = document.createTextNode("Hello World");
para.appendChild(textNode);

$('#jqueryStatusId').append('ID');
$('.bulletContainer li').css('color', 'orange');
}