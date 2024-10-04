let list = [];

export function createBox() {
  // Create the to-do list container
  const box = document.createElement("div");
  box.id = "todosbox";
  box.style.bottom = "0";
  box.style.right = "20px";
  box.style.backgroundColor = "white";
  box.style.border = "1px solid black";
  box.style.padding = "10px";
  box.style.zIndex = "9998";
  box.style.maxHeight = "200px";
  box.style.overflowY = "auto";
  
  list = document.createElement("ul");
  box.appendChild(list);
  document.body.appendChild(box);
  return list;
} 

export function appendToDoItem(userinput) { 
  const listItem = document.createElement("li");
  listItem.textContent = userinput;
  list.appendChild(listItem);
}

