export const setUserData = async (nombre, usuario, pass) => {
    const response = await fetch(`http://localhost/services/insertUser.php`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json; charset=utf-8'
        },
        body: JSON.stringify({
            nombreUsuario: nombre,
            user: usuario,
            password: pass
        })
    });
    var data = await response.json();
    return data;
}