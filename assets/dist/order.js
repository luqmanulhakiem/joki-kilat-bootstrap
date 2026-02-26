var submitted = false;

// Fungsi untuk menghandle saat iframe selesai load (setelah submit)
document.getElementById('hidden_iframe').onload = function () {
    if (submitted) {
        // Ambil data dari form
        const tipeProyek = document.getElementById('tipeProyek').value;
        const deskripsi = document.getElementById('deskripsiProyek').value;
        const phone = "6281333436513";

        // Buat pesan WhatsApp
        const message = `Halo Joki Kilat, Saya ingin membuat ${tipeProyek}. ${deskripsi}.`;
        const encodedMessage = encodeURIComponent(message);
        const waUrl = `https://wa.me/${phone}?text=${encodedMessage}`;

        // Update link di tombol modal
        document.getElementById('waLink').href = waUrl;

        // Tampilkan Modal
        var myModal = new bootstrap.Modal(document.getElementById('thanksModal'));
        myModal.show();

        // Reset status
        submitted = false;
    }
};