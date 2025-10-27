import { CartStoreActionType, CartStoreStateType } from "@/types";
import { create } from "zustand";

const useCartStore = create<CartStoreStateType & CartStoreActionType>()(
  (set) => ({
    cart: [],
    addToCart: (product) =>
      set((state) => {
        const existingIndex = state.cart.findIndex(
          (p) =>
            p.id === product.id &&
            p.SelectedSize === product.SelectedSize &&
            p.SelectedColor === product.SelectedColor
        );
        if (existingIndex !== -1) {
          const updatedCart = [...state.cart];
          updatedCart[existingIndex].quantity += product.quantity || 1;
          return { cart: updatedCart };
        }

        return {
          cart: [
            ...state.cart,
            {
              ...product,
              quantity: product.quantity || 1,
              SelectedColor: product.SelectedColor,
              SelectedSize: product.SelectedSize,
            },
          ],
        };
      }),
    removeFromCart: (product) =>
      set((state) => ({
        cart: state.cart.filter(
          (p) =>
            !(
              p.id === product.id &&
              p.SelectedSize === product.SelectedSize &&
              p.SelectedColor === product.SelectedColor
            )
        ),
      })),
    clearCart: () => set({ cart: [] }),
  })
);

export default useCartStore;
