import React from 'react'

const HomeContent = () => {
    return (
        <div>
          <section className="hero" style={{ backgroundImage: "url('./bagground image.jpg')" }}>
            <div>
                <h1 className="fade-in">Welcome to Bags World</h1>
                <p>Your one-stop shop for the best bags</p>
                <button>Shop Now</button>
            </div>
          </section>
        </div>
    )
}

export default HomeContent