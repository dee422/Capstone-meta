import React from 'react';

function Main() {
  return (
    <main>
      <section aria-label="Hero Section">
        <h1>Little Lemon</h1>
        <h2>Chicago</h2>
        <p>Lorem ipsum dolor sit amet...</p>
        <button>Reserve a Table</button>
      </section>

      <section aria-label="Specials">
        <h2>Specials</h2>
        <article>
          <h3>Greek Salad</h3>
          <p>Description...</p>
          <button>Order a delivery</button>
        </article>
        {/* Add more specials... */}
      </section>

      <section aria-label="Testimonials">
        <h2>Testimonials</h2>
        {/* Add ratings, images, reviews... */}
      </section>
    </main>
  );
}

export default Main;
