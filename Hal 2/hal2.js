function showData() {
    var nama = document.getElementById("nama").value;
    var nim = document.getElementById("nim").value;
    var peminatan = document.getElementById("peminatan").value;
    var alamat = document.getElementById("alamat").value;

    var date = new Date();
    var currentDate = date.toLocaleDateString();
    var currentTime = date.toLocaleTimeString();

    var message =
        "Nama: " + nama +
        "\nNIM: " + nim +
        "\nPeminatan: " + peminatan +
        "\nAlamat: " + alamat +
        "\nTanggal: " + currentDate +
        "\nWaktu: " + currentTime;

    alert(message);
}