const grabImg = async () => {
  try {
    const url = "https://unsplash.it/600/400";
    const res = await fetch(url);
    if (res.ok) {
      console.log("All good!");
    } else {
      console.log("Ooops!");
    }

    const data = await res.blob();
    let img = document.createElement("img");
    img.src = URL.createObjectURL(data);
    document.querySelector("body").appendChild(img);
    return data;
  } catch (err) {
    console.log(err);
  }
};

grabImg().then((data) => console.log(data));
