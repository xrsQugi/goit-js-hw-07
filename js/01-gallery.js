import { galleryItems } from "./gallery-items.js";
// Change code below this line

const gallery = document.querySelector(".gallery");
gallery.addEventListener('click', onImgClick);

galleryItems.forEach((galleryItem) => {
  gallery.insertAdjacentHTML(
    "afterbegin",
    `<li class="gallery__item">
            <a class="gallery__link" href=${galleryItem.original}>
                <img
                    class="gallery__image"
                    src=${galleryItem.preview}
                    data-source=${galleryItem.original}
                    alt=${galleryItem.description}
                />
            </a>
        </li>`
  );
});

console.log(galleryItems);

const instance = basicLightbox.create(
  `
<img width="1280" height="auto" src="">`,
  {
    onShow: (instance) => {
      window.addEventListener('keydown', onEscKeyPress);
    },
    onClose: (instance) => {
      window.removeEventListener('keydown', onEscKeyPress);
    },
  }
);

function onImgClick(e) {
  e.preventDefault();
  const datasetSource = e.target.dataset.source;
  if (!datasetSource) return;
  instance.element().querySelector('img').src = datasetSource;
  instance.show();
}

function onEscKeyPress(e) {
  if (e.code !== 'Escape') return;
  instance.close();
}