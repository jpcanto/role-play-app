async function APILogin(userObj) {
    const url = 'http://localhost:3333/users';

    return fetch(url, {
        method: 'POST',
        headers: {
            'content-type': 'application/json'
        },
        body: JSON.stringify({
            "name": userObj.name,
            "email": userObj.email,
            "password": userObj.password,
            "image": userObj.image,
            "games": userObj.games,
            "characters": userObj.characters
        })
    }).then(response => response.json()).then(data => { return data });
};