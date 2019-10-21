var Id;
function getID2(myid)
{
	Id=myid;
}
function draw()
{    if(Id==='convex')
	{
	 document.getElementById('eq').value ="1/x";	
	}
	else
	{
		 document.getElementById('eq').value ="-1/x";	
	}
	try {
      // compile the expression once
      const expression = document.getElementById('eq').value;
      const expr = math.compile(expression)

      // evaluate the expression repeatedly for different values of x
      const xValues = math.range(0,10, 0.5).toArray()
      const yValues = xValues.map(function (x) {
        return expr.evaluate({x: x})
      })

      // render the plot using plotly
      const trace1 = {
        x: xValues,
        y: yValues,
        type: 'scatter'
      }
      const data = [trace1]
      Plotly.newPlot('plot', data)
    }
    catch (err) {
      console.error(err)
      alert(err)
    }
  document.getElementById('form1').onsubmit = function (event) {
   event.preventDefault()
    draw()
  }
  }
  function scrollby()
  {
	   document.getElementById('head2').style.color="black";
	   document.getElementById('graph').style.display="block";
	  window.scrollBy(0,1000);
	 
	  
  }
