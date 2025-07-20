import React from "react";

function HomePage() {
  return (
    <div>
      {/* 顶部导航栏 */}
      <nav>
        <div className="logo">Little Lemon</div>
        <ul className="nav-links">
          <li>Home</li>
          <li>Menu</li>
          <li>Booking</li>
          <li>About</li>
        </ul>
      </nav>

      {/* Hero 区域 */}
      <header>
        <h1>Welcome to Little Lemon</h1>
        <p>Authentic Mediterranean cuisine</p>
        <button>Reserve a Table</button>
      </header>

      {/* 主内容区域 */}
      <main>
        <section className="specials">
          <h2>This Week's Specials</h2>
          <div className="cards">
            {/* 这里将来展示菜品卡片 */}
            <div className="card">Dish 1</div>
            <div className="card">Dish 2</div>
            <div className="card">Dish 3</div>
          </div>
        </section>
      </main>

      {/* 页脚 */}
      <footer>
        <p>&copy; 2025 Little Lemon. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default HomePage;
