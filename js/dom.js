document
  .getElementById("blue-background")
  .addEventListener("click", function () {
    const friends = document.getElementsByClassName("friend");
    for (const friend of friends) {
      friend.style.backgroundColor = "lightblue";
    }
  });

document.getElementById("add-friend").addEventListener("click", function () {
  const friendContainer = document.getElementById("friend");
  const div = document.createElement("div");
  div.classList.add("friend");
  div.innerHTML = `
     <h3 class='friend-name' >New Friend</h3>
     <p>New friend is added now</p>
    `;
  friendContainer.appendChild(div);
});
