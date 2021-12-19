//chap. 11 DOM

// const title = document.getElementById("title");
// const list = document.getElementsByClassName("list");

const title = document.querySelector("title");
const list = document.querySelector("list");
const items = document.querySelectorAll(".item");
const btn = document.querySelector("#btn");
const naver = document.querySelector(".naver")
// title.style.color = "red"
// title.style.backgroundColor = "green"
// title.innerHTML = "<input type='text' />"
// btn.innerText = "button"

// list.remove()
btn.addEventListener("click",function() {
    alert("탕수육")
})

naver.addEventListener("click", (e)=> {
    e.preventDefault();
    alert("네이버")
})