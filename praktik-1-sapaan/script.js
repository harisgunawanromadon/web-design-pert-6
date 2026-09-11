const namaInput = document.getElementById('namaInput');
const sapaBtn = document.getElementById('sapaBtn');
// const result = document.getElementById('result');

function buatSapaan() {
    // method JavaScript untuk menghapus spasi (whitespace) di bagian awal dan akhir string.
    const nama = namaInput.value.trim();

    if (nama === '') {
        alert('Nama tidak boleh kosong. Silakan masukkan nama Anda.');
        namaInput.focus();
        return;
    }

    if (nama.length < 3) {
        alert('Nama minimal harus 3 karakter. Silakan masukkan nama yang lebih panjang.');
        namaInput.focus();
        return;
    }

    alert('Halo ' + nama);
    // result.textContent = 'Halo ' + nama;
    console.info('Halo ' + nama)
}

sapaBtn.addEventListener('click', buatSapaan);

// Agar bisa submit dengan menekan Enter
namaInput.addEventListener('keydown', function (e) {
    if (e.key === 'Enter') {
        buatSapaan();
    }
});