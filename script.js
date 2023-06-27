const userList = document.getElementById('user-list');

fetch('http://jsonplaceholder.typicode.com/users')
  .then(response => {
    if (!response.ok) {
      throw new Error('Erro ao obter os usuários.');
    }
    return response.json();
  })
  .then(data => {
    data.forEach(user => {
      const listItem = document.createElement('li');
      listItem.textContent = `Nome: ${user.name}, Email: ${user.email}`;
      userList.appendChild(listItem);
    });
  })
  .catch(error => {
    console.error(error);
    const errorMessage = document.createElement('li');
    errorMessage.textContent = 'Erro ao obter os usuários.';
    userList.appendChild(errorMessage);
  });
