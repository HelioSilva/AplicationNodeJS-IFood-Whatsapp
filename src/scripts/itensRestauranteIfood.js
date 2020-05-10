var itens = [];

Array.from(document.querySelectorAll(".dish-card")).map((el) => {
  let precoOriginal = String(
    el.querySelector(".dish-card__price--original") != null
      ? el.querySelector(".dish-card__price--original").innerText
      : "0.00"
  )
    .slice(2)
    .trim()
    .replace(",", ".");

  let precoDesconto = String(
    el.querySelector(".dish-card__price--discount") != null
      ? el.querySelector(".dish-card__price--discount").firstChild.textContent
      : "0.00"
  )
    .slice(2)
    .trim()
    .replace(",", ".");

  if (el.querySelector(".dish-card__price--original") != null) {
    itens.push({
      descricao: el.querySelector(".dish-card__description").innerText,
      preco: precoOriginal,
      precoDesconto: precoDesconto,
      porcentagem: Number(
        100 - (Number(precoDesconto) * 100) / Number(precoOriginal)
      ).toFixed(2),
    });
  }
});
