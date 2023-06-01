import CONFIG from '../../globals/config';

const createrestoDetailTemplate = (resto) => `
<h2 class="resto__title">${resto.name}</h2>
<img class="resto__poster" src="${resto.pictureId ? CONFIG.IMG_URL_LARGE + resto.pictureId : 'https://picsum.photos/id/666/800/450?grayscale'}" />
<div class="resto__info">
  <h3>Information</h3>
  <h4>City</h4>
  <p>${resto.city}</p>
  <h4>Address</h4>
  <p>${resto.address}</p>
</div>
<div class="resto__desc">
  <h3>Deskripsi</h3>
  <p>${resto.description}</p>
</div>
`;

const createrestoItemTemplate = (resto) => `
  <div class="resto-item">
    <div class="resto-item__header">
      <img class="resto-item__header__poster" alt="${resto.name}"
           src="${resto.pictureId ? CONFIG.BASE_IMAGE_URL + resto.pictureId : 'https://picsum.photos/id/666/800/450?grayscale'}">
           <div class="city">${resto.city}</div>

      <div class="resto-item__header__rating">
        <p>⭐️<span class="resto-item__header__rating__score">${resto.rating}</span></p>
      </div>
    </div>
    <div class="resto-item__content">
      <h3><a href="/#/detail/${resto.name}">${resto.name}</a></h3>
      <p>${resto.description}</p>
    </div>
  </div>
`;

const createLikeButtonTemplate = () => `
  <button aria-label="like this resto" id="likeButton" class="like">
    <i class="fa fa-heart-o" aria-hidden="true"></i>
  </button>
`;

const createLikedButtonTemplate = () => `
  <button aria-label="unlike this resto" id="likeButton" class="like">
    <i class="fa fa-heart" aria-hidden="true"></i>
  </button>
`;

export {
  createrestoItemTemplate,
  createrestoDetailTemplate,
  createLikeButtonTemplate,
  createLikedButtonTemplate,
};
