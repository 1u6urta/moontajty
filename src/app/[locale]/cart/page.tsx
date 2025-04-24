// pages/cart.js
"use client";
import { useState } from "react";
import Link from "next/link";
import { useTranslations } from "next-intl";
import Image from "next/image";


export default function Cart() {
  const t = useTranslations("Cart");
  const [items, setItems] = useState([
    {
      id: 1,
      name: "MOONTAJTY BAG",
      price: 129.99,
      quantity: 1,
      size: "4XL",
      image: "/image 1.jpg",
    },
    {
      id: 2,
      name: "MOONTAJTY BAG ",
      price: 100.68,
      quantity: 1,
      size: "3XL",
      image: "/image 4.jpg",
    },
  ]);

  const updateQuantity = ({
    id,
    newQuantity,
  }: {
    id: number;
    newQuantity: number;
  }) => {
    if (newQuantity >= 1) {
      setItems(
        items.map((item) =>
          item.id === id ? { ...item, quantity: newQuantity } : item
        )
      );
    }
  };

  const removeItem = (id: number) => {
    setItems(items.filter((item) => item.id !== id));
  };

  const calculateTotal = () => {
    return items
      .reduce((total, item) => total + item.price * item.quantity, 0)
      .toFixed(2);
  };

  return (
    <>
      <div className="container">
        <main className="main">
          <h1>{t("title")}</h1>
          <div className="cartContainer">
            <div className="cartItems">
              {items.length === 0 ? (
                <div className="emptyCart">
                  <p>{t("empty")}</p>
                </div>
              ) : (
                items.map((item) => (
                  <div key={item.id} className="cartItem">
                    <div className="productImage">
                      <Image
                        src={item.image}
                        alt={item.name}
                        width={150}
                        height={150}
                      />
                    </div>
                    <div className="productDetails">
                      <h3>{item.name}</h3>
                      <div className="sizeSelector">
                        <label>
                          {t("size")} <span className="required">*</span>
                        </label>
                        <div className="selectWrapper">
                          <select
                            value={item.size}
                            onChange={(e) => {
                              setItems(
                                items.map((i) =>
                                  i.id === item.id
                                    ? { ...i, size: e.target.value }
                                    : i
                                )
                              );
                            }}
                          >
                            <option value={item.size}>{item.size}</option>
                            {/* Add more size options as needed */}
                          </select>
                        </div>
                        <p className="choose">{t("choose")}</p>
                      </div>
                    </div>
                    <div className="quantityControls">
                      <button
                        onClick={() => {
                          if (item.quantity > 1) {
                            updateQuantity({
                              id: item.id,
                              newQuantity: item.quantity - 1,
                            });
                          }
                        }}
                        disabled={item.quantity <= 1}
                        aria-label="Decrease quantity"
                      >
                        –
                      </button>
                      <span>{item.quantity}</span>
                      <button
                        onClick={() =>
                          updateQuantity({
                            id: item.id,
                            newQuantity: item.quantity + 1,
                          })
                        }
                        aria-label="Increase quantity"
                      >
                        +
                      </button>
                    </div>
                    <button
                      className="removeButton"
                      onClick={() => removeItem(item.id)}
                      aria-label="Remove item"
                    >
                      ×
                    </button>
                  </div>
                ))
              )}
            </div>
            {items.length === 0 ? (
              <div className="orderSummary">
                <Link href="/" className="checkoutButton" >
                    {t("goHome")}
                </Link>
              </div>
            ) : (
              <div className="orderSummary">
                <div className="summaryRow">
                  <span>{t("total")}</span>
                  <span className="totalPrice">
                    {calculateTotal()} {t("DA")}
                  </span>
                </div>
                <button className="checkoutButton">{t("checkout")}</button>
              </div>
            )}
          </div>
        </main>
      </div>
    </>
  );
}
