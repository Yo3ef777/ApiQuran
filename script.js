let Show = document.getElementById("ali");

function Showmusic() {
  let Item = document.createElement("div");
  let sum = 0;
  let itemList = [];
  for (i = 1; i <= 114; i++) {
    itemList.push(` <audio controls>
    <source src="Prhiz/${i}.MP3" type="audio/mpeg" />
  </audio>`);
    sum += i;
  }
  Item.innerHTML = itemList.join(" ");
  Show.appendChild(Item);
}

Showmusic();
