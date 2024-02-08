fetch('samion.reality')
    .then(response => response.blob())
    .then(blob => {
        const objectUrl = URL.createObjectURL(new Blob([blob], {type: 'model/vnd.reality'}));
    
    const link = document.createElement('a');
    link.href = objectUrl;
    link.rel = "ar";
    const image = document.createElement('img');
    image.src = "samion.png";
    link.appendChild(image);
    document.getElementById('experience').appendChild(link);

}).catch(err => console.error('Failed to load reality file', err));
