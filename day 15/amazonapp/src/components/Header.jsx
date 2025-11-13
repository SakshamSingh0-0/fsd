import React from "react";
const headerstyles = {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    padding: "10px 20px",
    backgroundColor: "#f5f5f5",
}
const navItemsStyles = {
    padding: "0 10px",
    textDecoration: "none",
    margin: "0 5px",
    color: "#333",
}
export default function Header(){ return (
        <header className="header">
            <img src="" alt="logo"/>
            <h2>App</h2>
            <nav>
                <Link to="/">Home</Link>
                <Link to="/about">About</Link>
                <Link to="/cart">Cart</Link>
                <Link to="/product">Product</Link>
            </nav>
        </header>
    ); }