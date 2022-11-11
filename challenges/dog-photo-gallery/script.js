
const button = document.getElementById("btn");
const list = document.getElementById("imageList")


button.addEventListener("click", () => {
    
    let url = "https://dog.ceo/api/breeds/image/random"

    fetch(url).then(function(response){
        console.log(response);
        return response.json();
    })
    
    .then((data) => {
        console.log(data);
        let img = document.createElement("img");
        img.src = data.message;
        let li = document.createElement("li");
        li.appendChild(img);
        list.append(li);
    })
    .catch((error)=>console.log(error));

});









