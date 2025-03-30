async function Rick() {
    try{
        const id = 55
        const response = await fetch(`https://rickandmortyapi.com/api/character/${id}`)
        const data = await response.json()
        const results = data
        
        const selected = ['name','status','image','episode']
        
        selected.forEach(code =>
            console.log(`${code}: ${results[code]}`)
        )
    }
    catch(error){
        console.log('ты долбаеб где то ошибся')
    }
}
Rick()