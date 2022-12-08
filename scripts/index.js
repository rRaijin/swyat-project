
const users = [
    {
        firstName: 'John',
        lastName: 'Dou'
    },
    {
        firstName: 'Sarah',
        lastName: 'Connor'
    },
    {
        firstName: 'Jack',
        lastName: 'Vorobey'
    },
    {
        firstName: 'User',
        lastName: 'Four'
    }
];

for (let i = 0; i < users.length; i++) {
    const user = users[i]; // для кожного юзера
    const DOMElement = document.getElementById(`author-${i+1}`); // знаходимо на сторінці author-1, author-2, author-3, author-4
    const p1 = document.createElement('p'); // програмно створюємо тег <p>
    DOMElement.appendChild(p1); // у цей момент ми вставляємо тег <p> в середину тега <div>, на цей час в середині нашого діва нічого нема
    p1.innerText = 'Writer:'; // а ось тут ми вставляємо в середину <p> текст
    const p2 = document.createElement('p'); // програмно створюємо ще один тег <p>
    p2.innerText = `${user.firstName} ${user.lastName}`; // в середину другого тега <p> вставляємо текст
    DOMElement.appendChild(p2);
    // p1.after(p2); // <== альтернативний спосіб добавити дочерній елемент, гарантуючи що другий тег <p> буде слідувати саме за першим тегом <p>
}

function addWriter() {
    const writerCnt = users.length;
    const newUser = {
        firstName: `User-${writerCnt+1}`
    };
    const DOMElement = document.getElementById(`author-${writerCnt+1}`);
    const p = document.createElement('p');
    DOMElement.appendChild(p);
    p.innerText = `${newUser.firstName} ${newUser.hasOwnProperty('lastName') ? newUser.lastName : ''}`;
    users.push(newUser);
    console.log('New user was added: ', newUser.firstName, ' ', newUser.hasOwnProperty('lastName') ? newUser.lastName : '');
}
