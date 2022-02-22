const btn = document.querySelector('button')
const img = document.getElementById('imgContainer')

// Regular fetch function
// const getCatPhoto = () => {
//     fetch('https://api.thecatapi.com/v1/images/search')
//     .then(res => res.json())
//     .then(data => {
//         const url = data[0].url
//         img.setAttribute('src', url)
//     })
//     .catch(console.error())
// }



// Try catch method will access any error of the code block no matter where error is, its best use in async and await function
// asyn and await 
const getCatPhoto = async function() {
    try {
        const res = await fetch('https://api.thecatapi.com/v1/images/search')
        if(!res.ok) throw new Error('Problem getting cat image')
        const data = await res.json()

        console.log(data)
        const url = data[0].url
        img.setAttribute('src', url)
    } catch(err) {
        // alert(err.message)
        console.log(err.message)
    }
}


btn.addEventListener('click', getCatPhoto)