import { TCartStore } from "@/lib/Type/Type";
import { create } from "zustand";

export const useCartStore = create<TCartStore>((set, get) => ({
  items: [],
  isOpen: false,
  totalQuantity: 0,
  totalPrice: 0,       
  totalOriginalPrice: 0,  
  totalProfit: 0,        

  addItem: (item) =>
    set((state) => {
      const existing = state.items.find((i) => i.id === item.id);
      let newItems;

      if (existing) {
        newItems = state.items.map((i) =>
          i.id === item.id ? { ...i, quantity: i.quantity + item.quantity } : i
        );
      } else {
        newItems = [...state.items, item];
      }

      const totalQuantity = newItems.reduce((sum, i) => sum + i.quantity, 0);
      const totalPrice = newItems.reduce((sum, i) => sum + i.price * i.quantity, 0);
      const totalOriginalPrice = newItems.reduce(
        (sum, i) => sum + (i.originalPrice ?? i.price) * i.quantity,
        0
      );
      const totalProfit = totalOriginalPrice - totalPrice;

      return {
        items: newItems,
        totalQuantity,
        totalPrice,
        totalOriginalPrice,
        totalProfit,
      };
    }),

  removeItem: (id) =>
    set((state) => {
      const newItems = state.items.filter((i) => i.id !== id);

      const totalQuantity = newItems.reduce((sum, i) => sum + i.quantity, 0);
      const totalPrice = newItems.reduce((sum, i) => sum + i.price * i.quantity, 0);
      const totalOriginalPrice = newItems.reduce(
        (sum, i) => sum + (i.originalPrice ?? i.price) * i.quantity,
        0
      );
      const totalProfit = totalOriginalPrice - totalPrice;

      return {
        items: newItems,
        totalQuantity,
        totalPrice,
        totalOriginalPrice,
        totalProfit,
      };
    }),

  increaseQuantity: (id) =>
    set((state) => {
      const newItems = state.items.map((i) =>
        i.id === id ? { ...i, quantity: i.quantity + 1 } : i
      );

      const totalQuantity = newItems.reduce((sum, i) => sum + i.quantity, 0);
      const totalPrice = newItems.reduce((sum, i) => sum + i.price * i.quantity, 0);
      const totalOriginalPrice = newItems.reduce(
        (sum, i) => sum + (i.originalPrice ?? i.price) * i.quantity,
        0
      );
      const totalProfit = totalOriginalPrice - totalPrice;

      return {
        items: newItems,
        totalQuantity,
        totalPrice,
        totalOriginalPrice,
        totalProfit,
      };
    }),

  decreaseQuantity: (id) =>
    set((state) => {
      const newItems = state.items
        .map((i) =>
          i.id === id ? { ...i, quantity: Math.max(i.quantity - 1, 0) } : i
        )
        .filter((i) => i.quantity > 0);

      const totalQuantity = newItems.reduce((sum, i) => sum + i.quantity, 0);
      const totalPrice = newItems.reduce((sum, i) => sum + i.price * i.quantity, 0);
      const totalOriginalPrice = newItems.reduce(
        (sum, i) => sum + (i.originalPrice ?? i.price) * i.quantity,
        0
      );
      const totalProfit = totalOriginalPrice - totalPrice;

      return {
        items: newItems,
        totalQuantity,
        totalPrice,
        totalOriginalPrice,
        totalProfit,
      };
    }),

  clearCart: () =>
    set({ items: [], totalQuantity: 0, totalPrice: 0, totalOriginalPrice: 0, totalProfit: 0 }),

  toggleCart: () => set((state) => ({ isOpen: !state.isOpen })),
}));
