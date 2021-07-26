fetch('https://jsonplaceholder.typicode.com/posts')
    .then(value => value.json())
    .then(value => {
        let usersWrap = document.getElementsByClassName('users-wrap')[0];
        for (const user of value) {
            let div = document.createElement('div');
            div.innerText = user.id + ' ' + user.title;
            usersWrap.append(div);
        }
    });
fetch('https://jsonplaceholder.typicode.com/comments')
    .then(value => value.json())
    .then(value => {
        let usersWrap = document.getElementsByClassName('users-wrap')[0];
        for (const user of value) {
            let div = document.createElement('div');
            div.innerText = user.id + ' ' + user.name;
            usersWrap.append(div);
        }
    });

