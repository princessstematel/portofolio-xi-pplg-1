document.getElementById('loginForm').addEventListener('submit', function(event){
    event.preventDefault();

    // deklarasi username dan password yang benar
    const correctUsername = "princess";
    const correctPassword = "princess";

    // mengambil username dan password yang diinput
    const username = document.getElementById('username').value;
    const passwrod = document.getElementById('password').value;

    // pengkondisian ketika username dan password bernar maupun salah
    if (username === correctUsername && passwrod === correctPassword){
        alert('Login Berhasil');
        window.location.href = 'index.html';
    }else{
        alert('Username atau password salah');
    }
});

