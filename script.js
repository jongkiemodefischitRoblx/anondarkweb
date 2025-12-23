let items = JSON.parse(localStorage.getItem("items")) || [];

function sell() {
  let name = document.getElementById("name").value;
  let price = document.getElementById("price").value;
  let desc = document.getElementById("desc").value;
  let stock = document.getElementById("stock").value;
  let photo = document.getElementById("photo").files[0];

  if (!name || !price || !desc || !stock || !photo) {
    alert("Please fill all fields");
    return;
  }

  let reader = new FileReader();
  reader.onload = function () {
    let item = {
      name,
      price,
      desc,
      stock,
      photo: reader.result
    };

    items.push(item);
    localStorage.setItem("items", JSON.stringify(items));
    display();
  };
  reader.readAsDataURL(photo);
}

function display() {
  let box = document.getElementById("products");
  box.innerHTML = "";

  items.forEach(i => {
    box.innerHTML += `
      <div class="card">
        <img src="${i.photo}">
        <h3>${i.name}</h3>
        <p>${i.desc}</p>
        <p>Price: $${i.price}</p>
        <p>Stock: ${i.stock}</p>
        <button class="buy" onclick="alert('Contact seller')">BUY</button>
      </div>
    `;
  });
}

display();
