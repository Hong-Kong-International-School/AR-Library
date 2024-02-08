let i = 0;

fetch('Experience.reality')
    .then(response => response.blob())
    .then(blob => {
        const objectUrl = URL.createObjectURL(new Blob([blob], {type: 'model/vnd.reality'}));
    
    const link = document.createElement('a');
    link.href = objectUrl;
    link.rel = "ar";
    const image = document.createElement('img');
    image.src = "Experience.png";
    link.appendChild(image);
    document.getElementById('loading').remove()
    document.getElementById('experience').appendChild(link);

}).catch(err => console.error('Failed to load reality file', err));

function loading() {
    document.getElementById('loading').textContent
    i+=1;
    if (i > 3) {
        i = 0;
    }
    document.getElementById('loading').textContent = "Loading" + ".".repeat(i);
}

setInterval(loading, 300);
