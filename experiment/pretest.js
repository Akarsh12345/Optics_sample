var ansId;
function ansid(id)
{
	ansId = id;
}
document.getElementById("q").addEventListener("submit",function(e){
	validate();
	e.preventDefault();
});
function validate()
{
	if(ansId ==='q3')
	{
		window.location = "simulator.html";
         		
	}
	else{
		alert("Answer is wrong");
		window.location = "start.html";
		}
}
