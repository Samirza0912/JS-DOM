let divtask1=document.getElementById("lists");
let list1 = document.getElementById("first-list");
let list2 = document.getElementById("second-list");
let div = document.getElementById("third");
let btn = document.getElementById("Mix");
let firstlistarr = list1.innerText.split(",");
let secondlistarr = list2.innerText.split(",");
let mixedlist = [...firstlistarr, ...secondlistarr];
let arr = [...new Set(mixedlist)]; 

btn.onclick = function () {
  let list = document.createElement("ul");
  div.innerText = "Mixed Lists";
  for (let i = 0; i < arr.length; i++) {
    let item = document.createElement("li");
    item.classList.add("list-group-item");
    item.append(arr[i]);
    list.classList.add("list-group");
    list.append(item);
    div.append(list);
  }
};