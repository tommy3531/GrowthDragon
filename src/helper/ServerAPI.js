const create = (user) => {
    return fetch("http://localhost:8080/user/postRegister",{
        method: 'POST',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(user)
    })
    .then((response) => {
        return response.json()
    })
    .catch((err) => {
        console.log(err);
    })
}

export {create};