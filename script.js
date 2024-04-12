const obtenerValorInput=()=>{
    let inputTexto=document.getElementById('input_pais');
    let valor=inputTexto.value
    peticionApi(valor)
}

const peticionApi=(pais)=>{

const baseUrl="https://restcountries.com/v3.1/name/{name}";
const enpoint=´name/${pais}´;
const url=´${baseUrl}${enpoint}´;

axios.get(url)
.then(res => console.log(res.data))
.catch(err => console.log(err))
}

