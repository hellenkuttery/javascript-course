
async function getCountry(country){

try{
const response = await fetch ("https://restcountries.com/v3.1/name/"+country)
const data=await response.json();
console.log("1:",data)
setCountry(data)

const countries=data[0].borders;
const response2=await fecth("https://restcountries.com/v3.1/alpha?codes="+countries.toString());
const neighbours=await response2.json();

}

catch(err){  
            const html=`
            <div class"alert alert-warning">
            ${err.message}
            </div>
            
            ` 
        document.querySelector("#errors").innerHTML=html;

}

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

     getCountry("Türkiye");
