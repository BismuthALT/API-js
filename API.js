async function Cyrs() {
    try{
        const response =  await fetch('https://api.exchangerate-api.com/v4/latest/USD')
        const data = await response.json()
        const {rates} = data

        const selected = ['USD','AED','AFN']

        selected.forEach(code =>{
            console.log(`${code}: ${rates[code]}`);
        })
    }
    catch(error){
        console.log('Не работает нихуя ')
    }
}
Cyrs()