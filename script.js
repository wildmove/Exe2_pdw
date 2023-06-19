function showData() {
    var nama = document.getElementById('nama').value;
    var nim = document.getElementById('nim').value;
    var peminatan = document.getElementById('peminatan').value;
    var tanggal = document.getElementById('tanggal').value;
    var gender = document.querySelector('input[name="gender"]:checked');
    var alamat = document.getElementById('alamat').value;

    var date = new Date();
    var currentDate = date.toLocaleDateString();
    var currentTime = date.toLocaleTimeString();


    var message = "Nama: " + nama + "\n";
    message += "NIM: " + nim + "\n";
    message += "Peminatan: " + peminatan + "\n";
    message += "Tanggal: " + tanggal + "\n";
    message += "Jenis Kelamin: " + gender.value + "\n";
    message += "Alamat: " + alamat +
        "\nTanggal: " + currentDate +
        "\nWaktu: " + currentTime;

    alert(message);
}
