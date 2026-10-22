// Cart counter: "Add to cart" increments the bag badge in the navbar.
const cartCount = document.querySelector('[data-cart-count]');
document.querySelectorAll('[data-add-to-cart]').forEach((btn) => {
  btn.addEventListener('click', () => {
    cartCount.textContent = Number(cartCount.textContent) + 1;
  });
});

// Testimonials carousel: arrows scroll one card at a time.
// With the 3 testimonials in the design everything fits, so they only move once more are added.
const track = document.querySelector('[data-track]');

function cardStep() {
  const card = track.querySelector('.quote');
  return card.getBoundingClientRect().width + parseFloat(getComputedStyle(track).columnGap);
}

document.querySelector('[data-prev]').addEventListener('click', () => track.scrollBy({ left: -cardStep() }));
document.querySelector('[data-next]').addEventListener('click', () => track.scrollBy({ left: cardStep() }));
