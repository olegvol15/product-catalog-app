"use client";

const FAKE_CART_REQUEST_DELAY = 450;

export async function addProductToCart(productId: string): Promise<void> {
  await new Promise((resolve) => {
    window.setTimeout(resolve, FAKE_CART_REQUEST_DELAY);
  });

  if (!productId) {
    throw new Error("Missing product id");
  }
}
