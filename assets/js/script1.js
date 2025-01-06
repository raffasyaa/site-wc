function openModal(productName, price) {
    // Menampilkan modal dengan informasi produk yang dipilih
    document.getElementById('buyerProduct').value = productName;
    document.getElementById('buyerAmount').value = price;
    document.getElementById('modal').style.display = 'flex';
}

function closeModal() {
    // Menutup modal
    document.getElementById('modal').style.display = 'none';
}

function processPurchase(event) {
    event.preventDefault();

    const buyerName = document.getElementById('buyerName').value;
    const buyerEmail = document.getElementById('buyerEmail').value;
    const product = document.getElementById('buyerProduct').value;
    const amount = document.getElementById('buyerAmount').value;

    // Simulasi proses pembelian berhasil
    alert(`Pembelian berhasil!\nNama: ${buyerName}\nEmail: ${buyerEmail}\nProduk: ${product}\nJumlah: Rp${amount}`);

    // Setelah pembelian, reset form dan tutup modal
    document.getElementById('purchaseForm').reset();
    closeModal();
}
