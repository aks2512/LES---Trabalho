import React, { createContext, ReactNode } from 'react';

import useCart from '../hooks/useCart';

type cartProviderProps = {
    children?: ReactNode;
}

const CartContext = createContext({} as any);

function CartProvider({children}:cartProviderProps) {
  const {
    carrinhoItens, setCarrinhoItens, pedidos, setPedidos
  } = useCart();

  return (
    <CartContext.Provider value={{ carrinhoItens, setCarrinhoItens, pedidos, setPedidos }}>
      {children}
    </CartContext.Provider>
  );
}

export { CartContext, CartProvider };