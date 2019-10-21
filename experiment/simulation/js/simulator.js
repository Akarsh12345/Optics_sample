
     var Id;
	function getID(myId)
    {
	if(myId ==='convex')
	{
		 document.getElementById('form').style.display='block';
		  document.getElementById('contain').style.display='none';
		  document.getElementById('object').value= '';
		  document.getElementById('focal').value= '';
		  document.getElementById('graph').style.display="none";
		  
		 Id = myId;
		 
	}	
    else
	{
		 document.getElementById('form').style.display='block';
		 document.getElementById('contain').style.display='none';
		 document.getElementById('object').value= '';
		  document.getElementById('focal').value= '';
		  document.getElementById('graph').style.display="none";
          Id = myId;		 
	     
	}
	
}
   function show()
{    
    var u= parseFloat(document.getElementById('object').value);
     var f= parseFloat(document.getElementById('focal').value);
	var head = document.getElementById('heading');
	var img = document.getElementById('image');
	if(Id==='convex')
	{    
               document.getElementById('contain').style.display='block';
               if(u<0)
			   {
				  
                   u = u*(-1); 				  
			   }
			   if(f<0)
			   {
				  
                   f = f*(-1); 				  
			   }
			   
		       if(u===f)
		      {
			    img.style.display='block';
	            img.src='images/case1.jpg';
			    head.innerHTML="IMAGE WILL FORMED AT INFINITY ";
		      } 
		       else
		          {
					  if(u===2*f)
					  {
						img.style.display='block';
	                    img.src='images/case2.jpg';
			            head.innerHTML="IMAGE WILL FORMED AT V = " + 2*f;  
					  }
					  else
					  {
						  
			           var v = (u*f)/(u-f);
			           img.style.display='none';
					   if(u>(2*f))
					   {
						 img.style.display='block';
	                     img.src='images/case3.jpg';
					head.innerHTML="YOUR IMAGE WILL FORMED AT RIGHT SIDE = " + (v).toFixed(2);
			               
					   }
					   if(u<(2*f)&&u>f)
					   {
						 img.style.display='block';
	                     img.src='images/case4.jpg';
					head.innerHTML="YOUR IMAGE WILL FORMED AT RIGHT SIDE = " + (v).toFixed(2);  
					   }
					   if(u>0&&u<f)
					   {
						  img.style.display='block';
	                     img.src='images/case5.jpg';
					head.innerHTML="YOUR IMAGE WILL FORMED AT LEFT SIDE = " + (v).toFixed(2);   
					   }
			           
                     }  			  
			 
		          }
	
	}
	else
	{
		document.getElementById('contain').style.display='block';
		if(u<0)
			   {
				  
                   u = u*(-1); 				  
			   }
		if(f>0)
			   {
				  
                   f = f*(-1); 				  
			   }
		                 var v = (u*f)/(u-f);
		                 img.style.display='block';
	                     img.src='images/case6.jpg';
					head.innerHTML="YOUR IMAGE WILL FORMED AT V = " + (v).toFixed(2)+" <br>SIZE OF IMAGE VARIED FROM DIFFERENT  INPUT BUT THE RAY DIAGRAM IS SAME ";
					
	}
}




