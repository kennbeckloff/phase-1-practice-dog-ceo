let dogs;
document.addEventListener("DOMContentLoaded", () => {  

fetch( "https://dog.ceo/api/breeds/image/random/4")
  .then((resp) => resp.json())
  .then((json) => renderImages(json));

fetch( "https://dog.ceo/api/breeds/list/all")
    .then((resp) => resp.json())
    .then((json) => breed(json));  
});

const renderDogImage=(urlImg)=> {
    const dog_image_container = document.getElementById("dog-image-container");
    const img = document.createElement("img");
    img.className = "dog-image";
    img.height = 300;
    img.src = urlImg;
    dog_image_container.appendChild(img);
  }
  const renderImages=(images)=> {
    images.message.forEach(renderDogImage);
  }

  const breedList=(dogBreeds) =>{
    const dogBreedUl = document.getElementById("dog-breeds");
    const list = document.createElement("li");
    list.innerText = dogBreeds;
    dogBreedUl.appendChild(list);
    dogBreedUl.addEventListener("click", (event) => {
      if (event.target.matches("li")) {
        event.target.style.color = "purple";
      }
    });
  }
  const breed=(dog)=> {
    const dog_breed = Object.keys(dog.message);
    dogs = dog_breed;
    dog_breed.forEach((element) => breedList(element));
  
  }
  
    const dropdownLetter = document.querySelector("#breed-dropdown");
    const dropdownLetterList = document.querySelector("#breed-dropdown-list");
    dropdownLetter.addEventListener("click", (event) => {
      const letter = event.target.value;
      const dogsList = dogs.filter((dog) => {
        return dog.startsWith(letter);
      });
      const ul = document.getElementById("dog-breeds");
      ul.innerHTML = '';
      dogsList.forEach((element) => breedList(element));
    });