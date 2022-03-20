const fetchUsers = async () => {
  try {
    const url = "https://jsonplaceholder.typicode.com/users";
    const res = await fetch(url);
    if (res.ok) {
      console.log("All good!");
    } else {
      console.log("Ooops!");
    }
    const data = res.json();
    return data;
  } catch (err) {
    console.log(err);
  }
};

const getUsers = () => {
  fetchUsers().then((data) => {
    data.forEach((user) => {
      console.log(user.id, user.name);
    });
  });
};
