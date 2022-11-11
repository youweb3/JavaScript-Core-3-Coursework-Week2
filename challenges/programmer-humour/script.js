const imgEl = document.getElementById("selectimg")

let url = "https://xkcd.now.sh/?comic=latest";

fetch(url).then((response) => {
    console.log(response);
    return response.json();
})
.then((data) =>{
    console.log(data);
    let image = document.createElement("img");
    image.src = data.img;
    imgEl.appendChild(image);

}).catch(error => console.log(error));
