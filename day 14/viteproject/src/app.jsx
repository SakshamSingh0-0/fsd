import React, { useEffect, useState } from 'react';

const Header = () => {
    return (
        <div className='header'>
            <h2>Header</h2>
        </div>
    );
};

const Search = () => {
    return (
        <div className='search'>
            <input type="text" name="search" id="search" placeholder="Search products..." />
            <button>Search</button>
        </div>
    );
};

const Product = ({ product }) => {
    return (
        <div className='product' style={{ border: "1px solid #ccc", padding: "10px", width: "200px" }}>
            <img
                src={product?.image || "https://via.placeholder.com/150"}
                alt={product?.name}
                style={{ width: "100%", height: "150px", objectFit: "cover" }}
            />
            <h3>{product?.name}</h3>
            <p>{product?.price}</p>
        </div>
    );
};

const Body = () => {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        fetch("./products.json")
            .then((res) => res.json())
            .then((data) => setProducts(data))
            .catch((error) => console.log("Unable to load data:", error));
    }, []);

    return (
        <div className='body'>
            <Search />
            <div
                className='product-container'
                style={{
                    display: "flex",
                    flexWrap: "wrap",
                    gap: "30px",
                    marginTop: "20px",
                }}
            >
                {products.length > 0 ? (
                    products.map((p) => <Product key={p.id} product={p} />)
                ) : (
                    <p>Loading products...</p>
                )}
            </div>
        </div>
    );
};

export default function App() {
    return (
        <>
            <Header />
            <Body />
        </>
    );
}
