document.addEventListener('DOMContentLoaded', () => {
    const imageUrlInput = document.getElementById('imageUrl');
    const qualityInput = document.getElementById('quality');
    const qualityValue = document.getElementById('qualityValue');
    const compressButton = document.getElementById('compress');
    const originalImg = document.getElementById('original');
    const compressedImg = document.getElementById('compressed');
    const errorDiv = document.getElementById('error');

    qualityInput.addEventListener('input', (e) => {
        qualityValue.textContent = `${e.target.value}%`;
    });

    compressButton.addEventListener('click', async () => {
        const imageUrl = imageUrlInput.value;
        const quality = qualityInput.value;

        if (!imageUrl) return;

        errorDiv.textContent = '';
        compressButton.disabled = true;
        
        try {
            // Load original image
            originalImg.src = imageUrl;
            
            // Wait for original image to load
            await new Promise((resolve, reject) => {
                originalImg.onload = resolve;
                originalImg.onerror = () => reject(new Error('Failed to load image'));
            });

            // Create canvas for compression
            const canvas = document.createElement('canvas');
            const ctx = canvas.getContext('2d');
            
            canvas.width = originalImg.naturalWidth;
            canvas.height = originalImg.naturalHeight;
            
            // Draw and compress
            ctx.drawImage(originalImg, 0, 0);
            const compressedDataUrl = canvas.toDataURL('image/jpeg', quality / 100);
            
            // Display compressed image
            compressedImg.src = compressedDataUrl;
            
        } catch (error) {
            errorDiv.textContent = 'Error: ' + error.message;
        } finally {
            compressButton.disabled = false;
        }
    });
});
