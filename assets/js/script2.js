function toggleConfig(configId, buttonElement) {
    const configElement = document.getElementById(configId);

    // Toggle the 'show' class to animate the appearance or disappearance of the configuration
    if (configElement.classList.contains('show')) {
        configElement.classList.remove('show');
        buttonElement.textContent = 'Show Domain'; // Change button text to "Tampilkan Domain"
    } else {
        configElement.classList.add('show');
        buttonElement.textContent = 'Hide Domain'; // Change button text to "Sembunyikan Domain"
    }
}

// Fungsi untuk menyalin teks konfigurasi ke clipboard
function copyText(elementId) {
    const textElement = document.getElementById(elementId);
    const text = textElement.textContent || textElement.innerText;

    if (navigator.clipboard) {
        navigator.clipboard.writeText(text).then(() => {
            alert('Domain berhasil disalin!');
        }).catch(err => {
            console.error('Gagal menyalin teks:', err);
        });
    } else {
        const textarea = document.createElement('textarea');
        textarea.value = text;
        document.body.appendChild(textarea);
        textarea.select();
        try {
            document.execCommand('copy');
            alert('Domain berhasil disalin!');
        } catch (err) {
            console.error('Gagal menyalin teks:', err);
        }
        document.body.removeChild(textarea);
    }
}
