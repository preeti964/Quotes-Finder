function getResults () {
    fetch('https://goquotes-api.herokuapp.com/api/v1/all/quotes')
      .then(data => {
        return data.json();
      }).then(displayResults);
   
  }
const arr =[];
  function displayResults (data) {
   
    for(let i=10; i<800; i++)
      {
        arr.push(data.quotes[i].text);
      }
     
  }
window.onload=getResults;


function myFunction()
{
    var search=document.getElementById("text").value.toLowerCase();
    if(search.length==0)
    {
        const bdy=document.getElementById("data");
        bdy.textContent='';
        bdy.appendChild(putInto("No Content Found"));
    }
    else
    {
        const res=[];
        arr.forEach(element => {
            if(element.toLowerCase().includes(search))
            {
                res.push(element);
            }
        });
        if(res.length==0)
        {
            const bdy=document.getElementById("data");
            bdy.textContent='';
            bdy.appendChild(putInto("No Content Found"));
        }
        else
        {
            const bdy=document.getElementById("data");
            bdy.textContent='';
            for(let i=0; i<res.length; i++)
            {
                bdy.appendChild(putInto(res[i]));
            }
        
        }
    }


}
function putInto(value)
{
    var li=document.createElement("p");
    li.textContent=value;
    li.id="list";
    li.onclick=function(){
        document.getElementById("maincontent").innerHTML=li.innerHTML;
        const bdy=document.getElementById("data");
        bdy.textContent='';

    }
    return li;
}


//new content -----------------------------------------------------
