import ProductCardKart from "../../components/ProductCardCart";
import * as S from "./styles";
import { useGetShoppingCartByClientId } from "../../hooks/useGetShoppingCartByClientId";
import { useEffect, useState } from "react";
import { IGetProductsShoppingCartData } from "../../types/io";
import { useNavigate } from "react-router-dom";
import { useDeleteProductShoppingCart } from "../../hooks/useDeleteProductShoppingCart";
import { useSnackbar } from "notistack";
import { usePostNewOrder } from "../../hooks/usePostNewOrder";
import { useGetOrdersByClient } from "../../hooks/useGetOrdersByClient";
import { useUser } from "../../contexts/AuthContext";

export const Orders = () => {
  const navigate = useNavigate();
  const { enqueueSnackbar } = useSnackbar();
  const { user } = useUser();

  const {
    getOrdersByClientData,
    getOrdersByClientErrorMessage,
    getOrdersByClientRest,
  } = useGetOrdersByClient({ clientid: user?.id ?? 0 });

  function handleRedirect(pk_id: number) {
    navigate(`/produto/${pk_id}`);
  }

  useEffect(() => {
    if (getOrdersByClientErrorMessage) {
      enqueueSnackbar(String(getOrdersByClientErrorMessage), {
        variant: "error",
        autoHideDuration: 2000,
      });
    }
  }, [getOrdersByClientErrorMessage]);

  return (
    <S.Wrapper>
      <S.Container>
        {!!getOrdersByClientData?.length ? (
          <S.ContainerProductsOrders>
            {getOrdersByClientData?.map((order) => (
              <S.ContainerProductsOrders>
                <h1>Pedido número {order?.id}</h1>
                {order?.itens?.map((product) => (
                  <ProductCardKart
                    key={product?.id}
                    name={product?.produto?.nome}
                    description={product?.produto?.descricao}
                    quantity={product?.quantidade}
                    price={product?.produto?.preco}
                    image={product?.produto?.imagem}
                    isOrderCard={true}
                    onClick={() => handleRedirect(product?.produto?.id)}
                    onDelete={() => {}}
                    onSetQuantity={() => {}}
                  />
                ))}
              </S.ContainerProductsOrders>
            ))}
          </S.ContainerProductsOrders>
        ) : (
          <h1>Você ainda não possui pedidos!</h1>
        )}
      </S.Container>
    </S.Wrapper>
  );
};
