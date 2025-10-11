export type SectionKey =
  | "introduction"
  | "Details"
  | "Specifications"
  | "Reviews"
  | "Questions"
  | "SimiarGoods";

export type TCartItem = {
  id: string;
  title: string;
  price: number;        
  originalPrice?: number; 
  quantity: number;
  photo?: string;
  discount?: number;
  color?:string
};

export type TCartStore = {
  items: TCartItem[];
  isOpen: boolean;
  totalQuantity: number;
  totalPrice: number;     
  totalOriginalPrice: number; 
  totalProfit: number;        
  addItem: (item: TCartItem) => void;
  removeItem: (id: string) => void;
  increaseQuantity: (id: string) => void;
  decreaseQuantity: (id: string) => void;
  clearCart: () => void;
  toggleCart: () => void;
};
