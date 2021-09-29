import { useState } from 'react';

type livroType = {
  liv_id: string,
  liv_valor?: string,
  liv_nome?: string,
  liv_autor?: string,
  liv_categoria?: string,
  liv_ano?: string,
  liv_titulo?: string,
  liv_editora?: string,
  liv_edicao?: string,
  liv_isbn?: string,
  liv_npaginas?: string,
  liv_sinopse?: string,
  liv_altura?: string,
  liv_peso?: string,
  liv_profundidade?: string,
  liv_descricao?: string,
  liv_estoque?: string,
  liv_custo?: string,
  liv_mlucro?: string,
  liv_preco?: string,
  liv_cbarras?: string,
  liv_quantidade?: string,
  liv_ativo?: true,
}

export default function useCart() {
  const [carrinhoItens, setCarrinhoItens] = useState<livroType[]>([]);
  
  return { carrinhoItens, setCarrinhoItens };
}