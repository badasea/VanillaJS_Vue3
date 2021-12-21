// console.log("javascript!!")

const inputText = document.querySelector(".input-text")
const addButton = document.querySelector(".add-button")
const list = document.querySelector(".list")

const likeButton = document.querySelectorAll(".like");

// likeButton.forEach(like => {
//     like.addEventListener("click", () => {
//         console.log("clicked")
//     })
// })
function addItem() {
    if (inputText.value.trim() === "") {
        return;
    }
    // like
    const like = document.createElement("span");
    const likeIcon = document.createElement("i");
    like.classList.add("like");
    likeIcon.classList.add("material-icons");
    likeIcon.innerText = "favorite_border";
    like.appendChild(likeIcon)

    // item
    const item = document.createElement("span");
    item.innerText = inputText.value;
    item.classList.add("item");

    // manage
    const manage = document.createElement("span");
    const checkIcon = document.createElement("i");
    const clearIcon = document.createElement("i");

    checkIcon.classList.add("material-icons", "check");
    clearIcon.classList.add("material-icons", "clear");

    checkIcon.innerText = "check";
    clearIcon.innerText = "clear";

    manage.classList.add("manage")
    manage.appendChild(checkIcon)
    manage.appendChild(clearIcon)


    const li = document.createElement("li")

    // event
    like.addEventListener("click", (e) => {
        const target = e.target;
        if (target.innerText === "favorite"){
            target.innerText = "favorite_border"
        } else {
            target.innerText = "favorite"
        }
        // const text = target.innerText === "favorite" ? "favorite_border" : "favorite"
        // target.innerText = text
        //console.log("hello")
    })
    checkIcon.addEventListener("click", (e) => {
        const target = e.target.parentNode.parentNode;
        target.classList.add("done")

        // const text = target.innerText === "favorite" ? "favorite_border" : "favorite"
        // target.innerText = text
        //console.log("hello")
    })
    clearIcon.addEventListener("click", (e) => {
        const target = e.target.parentNode.parentNode;
        list.removeChild(target)
        // const text = target.innerText === "favorite" ? "favorite_border" : "favorite"
        // target.innerText = text
        //console.log("hello")
    })
    li.appendChild(like)
    li.appendChild(item)
    li.appendChild(manage)
    list.appendChild(li)

    inputText.value = "";
    inputText.focus();

}

inputText.addEventListener("keypress", (e) => {
    // console.log(e)
    if (e.keyCode === 13) {
        addItem()
    }
})

addButton.addEventListener("click", function () {
    //console.log(inputText.value)
    addItem()
})
