var form = document.getElementById("covidForm");
// Add event listener on form tag
form.addEventListener("submit",(e)=>{
    e.preventDefault(); //to prevent the auto submit
    //get the country name enter by user
    var country = document.getElementById("covidFinder").value;
    //i use the covid19api to get the data of covid19
    var url =`https://api.covid19api.com/dayone/country/${country}`;
    fetch(url)
    .then((res)=>res.json())
    .then((res)=>{
        // console.log(res);
        
        var length = res.length;
        var index = length - 1;
        var Heading = document.getElementById("heading")
        Heading.innerHTML = ''
        Heading.append(`Covid-19 Statistics of ${country} `)
        var TotalCases = document.getElementById("totalCase")
        TotalCases.innerHTML =''
        var tRecovered = document.getElementById("recovered")
        tRecovered.innerHTML = ''
        var tDeaths = document.getElementById("deaths")
        tDeaths.innerHTML = ''
        TotalCases.append(`Total Confirmed : ${res[index].Confirmed}`)
        tRecovered.append(`Total Recovered : ${res[index].Recovered}`)
        tDeaths.append(`Total Deaths : ${res[index].Deaths}`)
    })
})
