document.addEventListener("DOMContentLoaded", fetchUserData);

async function fetchUserData() {
  const apiUrl = "https://jsonplaceholder.typicode.com/users";
  const dataContainer = document.getElementById("api-data");

  try {
    const response = await fetch(apiUrl);
    const users = await response.json();

    // Clear the loading message
    dataContainer.innerHTML = "";

    // Create and append user list
    const userList = document.createElement("ul");
    users.forEach((user) => {
      const listItem = document.createElement("li");
      listItem.textContent = user.name;
      userList.appendChild(listItem);
    });
    dataContainer.appendChild(userList);
  } catch (error) {
    // Clear the loading message
    dataContainer.innerHTML = "";
    dataContainer.textContent = "Failed to load user data.";
  }
}
