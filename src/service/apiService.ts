import axios from "axios";
import { hydrateQueryParams } from "../functions/hidrateQueryParams";

const api = axios.create({
  baseURL: process.env.BACKEND_URL,
});

export const apiService = {
  //Produtos
  getProductById: ({ id }: { id: number }) =>
    api.get(`/ambifericos/produtos/buscarPorID${hydrateQueryParams([{ id }])}`),

  getProducts: () => api.get(`/ambifericos/produtos/buscarTodos`),

  postNewProduct: ({
    body,
  }: {
    body: {
      nome: string;
      descricao: string;
      preco: number;
      estoque: number;
      imagem: string;
    };
  }) => api.post(`/ambifericos/produtos/inserir`, body),

  deleteProduct: ({ id }: { id: number }) =>
    api.delete(`/ambifericos/produtos/remover${hydrateQueryParams([{ id }])}`),

  //Pedidos
  postNewOrder: ({
    body,
  }: {
    body: {
      cliente: number;
      itens: {
        produto: {
          id: number;
        };
        quantidade: number;
      };
    };
  }) => api.post(`/ambifericos/pedido/adicionaPedido`, body),

  getOrdersByClient: ({ id }: { id: number }) =>
    api.get(
      `/ambifericos/pedido/listarPedidosPeloCliente${hydrateQueryParams([
        { id },
      ])}`
    ),

  getOrderById: ({ id }: { id: number }) =>
    api.get(
      `/ambifericos/pedido/listarPedidoPeloId${hydrateQueryParams([{ id }])}`
    ),

  getOrders: () => api.get(`/ambifericos/pedido/listarPedidos`),

  deleteOrder: ({ id }: { id: number }) =>
    api.delete(
      `/ambifericos/pedido/removePedido${hydrateQueryParams([{ id }])}`
    ),

  //Cliente
  getClientById: ({ id }: { id: number }) =>
    api.get(`/ambifericos/cliente/listarPeloId${hydrateQueryParams([{ id }])}`),

  getClientByEmailAndPassword: ({
    email,
    senha,
  }: {
    email: string;
    senha: string;
  }) =>
    api.get(
      `/ambifericos/cliente/listarClientePeloEmailSenha${hydrateQueryParams([
        { email },
        { senha },
      ])}`
    ),

  getClients: () => api.get(`/ambifericos/cliente/listarTudo`),

  postNewClient: ({
    body,
  }: {
    body: {
      nome: string;
      email: string;
      senha: string;
      endereco: string;
    };
  }) => api.post(`/ambifericos/cliente/adicionaCliente`, body),

  deleteClient: ({ id }: { id: number }) =>
    api.delete(
      `/ambifericos/cliente/removeCliente${hydrateQueryParams([{ id }])}`
    ),

  //Admin
  getAdminById: ({ id }: { id: number }) =>
    api.get(
      `/ambifericos/adminstrador/selecionarPorId${hydrateQueryParams([{ id }])}`
    ),

  getAdmins: () => api.get(`/ambifericos/adminstrador/selecionarTodos`),

  postNewAdmin: ({
    body,
  }: {
    body: {
      nome: string;
      email: string;
      senha: string;
    };
  }) => api.post(`/ambifericos/adminstrador/inserir`, body),

  deleteAdmin: ({ id }: { id: number }) =>
    api.delete(
      `/ambifericos/adminstrador/inserir${hydrateQueryParams([{ id }])}`
    ),
};
