
function displayCountry(){   

const request=fetch("https://restcountries.com/v3.1/name/türkiye")
.then((response)=>{

    if (!response.ok)
    { throw new Error ("ülke Bulunamadı")
    }
    // console.log(response)
    return response.json();
})
.then((data)=>{
console.log("data",data)
setCountry(data[0])
})
.catch((err)=>{
    errorFunc(err)
})

function errorFunc(err){
    const html=`
    <div class"alert alert-warning">
    ${err.message}
    </div>
    
    ` 
document.querySelector("#errors").innerHTML=html;
}
console.log(request)





    // const request = new XMLHttpRequest();
    //   request.open("GET", "https://restcountries.com/v3.1/all");
    //   request.send();
    //   request.addEventListener("load", function () {
    //     const data = JSON.parse(this.responseText);
    //     console.log("data",data)
    //     setCountry(data);           
    //   })
    
 }


function setCountry(data) {

       const html = `
       
         <div class="card m-2 p-2 mb-4  border border-2 border-warning " style="width: 18rem;">
         <img class="card-img-top" src=${data.flags.png} alt="Card image cap">
         <div class="card-body">
         <h5 class="card-title">${data.name.common}</h5>
         <p class="card-text">Population: ${data.population}</p>
         <a href="#" class="btn btn-primary">Details</a>
         </div>
     `;
     document.querySelector(".container .row").insertAdjacentHTML("beforeEnd",html)

        
      };

      displayCountry();
