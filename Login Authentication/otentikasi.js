function kirim(){
    let input = document.getElementById('username').value;
    let password = document.getElementById('password').value;
    if(input == 'nama' && password == 'pass'){
        window.alert('Login Berhasil!');
        window.open("dashboard.html");
    } else{
        window.alert('Login Gagal!');
    }
}