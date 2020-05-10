const restaurantes = Array.from(
  document.querySelectorAll(".restaurant-card")
).map((el) => {
  return {
    nome: el.querySelector(".restaurant-name").innerText,
    link: el.href,
    rating: el.querySelector(".restaurant-rating").innerText,
    img: el.querySelector(".restaurant-card__img-logo").src,
  };
});
