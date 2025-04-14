export interface IGetProductsData {
  createAtd: string;
  descricao: string;
  estoque: number;
  id: number;
  imagem: string;
  nome: string;
  preco: number;
}

export interface IPostAddItemShoppingCartProps {
  clienteId: number;
  produtoId: number;
  quantidade: number;
}

export interface IGetProductsShoppingCartData {
  id: number;
  cliente: {
    id: number;
    nome: string;
    email: string;
    senha: string;
    endereco: string;
    createdAt: string;
  };
  produto: {
    id: number;
    nome: string;
    descricao: string;
    preco: number;
    estoque: number;
    imagem: string;
    createdAt: string;
  };
  quantidade: number;
  subtotal: number;
}

export interface IPostNewOrderProps {
  cliente: number;
  itens: { produtoId: number; quantidade: number }[];
}

export interface IGetOrdersData {
  id: number;
  cliente: {
    id: number;
    nome: string;
    email: string;
    senha: string;
    endereco: string;
    createdAt: string;
  };
  createdAt: string;
  itens: {
    id: number;
    quantidade: number;
    subtotal: number;
    produto: {
      id: number;
      nome: string;
      descricao: string;
      preco: number;
      estoque: number;
      imagem: string;
      createdAt: string;
    };
  }[];
}

export interface IUserResponse {
  id: number;
  nome: string;
  email: string;
  senha: string;
  endereco: string;
  createdAt: string;
  adm: boolean;
}
