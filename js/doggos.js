// const BREEDS_URL = 'https://dog.ceo/api/breeds/image/random';

// document.querySelector('.add-doggo')
//  .addEventListener('click',addDog)

// function addDog() {
//     // loading spiner
//     fetch(BREEDS_URL)
//     .then(function(response){
//         return response.json();
//     })
//     .then(function(data){
//         const img = document.createElement('img');
//         img.src = data.message;
//         img.alt = "cute dog";

//         document.querySelector('.doggos').appendChild(img)
//     })
//     // stop loading spinner;
// }

const BREEDS_URL = 'https://dog.ceo/api/breeds/list/all';
const breedSelect = document.querySelector('.breeds');

fetch(BREEDS_URL)
.then(function(response){
    return response.json();
})
.then(function(data){
    const breedList = Object.keys(data.message)

    for (let i = 0; i < breedList.length; i++) {
        const option = document.createElement('option');
        option.value = breedList[i];
        option.innerText = breedList[i];
        breedSelect.appendChild(option)
    }
});

breedSelect.addEventListener('change',function(event){
    let name = event.target.value;
    const url = 'https://dog.ceo/api/breed/'+name+'/images/random';
    getNewDog(url);
});
const spinner = document.querySelector('.spinner');
const img = document.querySelector('.dog-img');

function getNewDog(url) {
    spinner.classList.add('show')
    img.classList.remove('show');
        fetch(url)
    .then(function(response){
        return response.json();
    })
    .then(function(data){
        img.src = data.message
    })
}
img.addEventListener('load',function(event){
    spinner.classList.remove('show')
    img.classList.add('show');
})