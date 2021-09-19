 

var orchestra = {
    name:"Los Angeles Philharmonic",
    director:"Gustavo Dudamel",
    instruments:[
    {name: "violin", section:"string" },
    {name: "trumpet", section:"brass"},
    {name: "tuba", section:"brass"},
    {name: "flutes", section:"woodwinds"},
    {name: "triangles", section:"percussion"},
    
]};

console.log(orchestra);

var getstrings = function () 
{
const filteredOrchestra = orchestra.instruments.filter((element) => {
     console.log(element.section ==='string');
    return element.section === 'string'
  
})};