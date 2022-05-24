const header = document.createElement('h1');
header.innerText = 'The best website ever';
header.style.fontFamily = "Impact,Charcoal,sans-serif";
document.body.appendChild(header)

const div = document.createElement('div');
document.body.appendChild(div)

const paragraph = document.createElement('p');
paragraph.innerText = 'just some random text, really dont have any things to write';
div.appendChild(paragraph)

const img = document.createElement('img');
img.src = 'https://imagesvc.meredithcorp.io/v3/mm/image?url=https%3A%2F%2Fstatic.onecms.io%2Fwp-content%2Fuploads%2Fsites%2F13%2F2015%2F04%2F05%2Ffeatured.jpg&q=60'
img.width = '900';
img.height = '400';
div.append(img);