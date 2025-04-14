import ProductCardKart from "../../components/ProductCardCart";
import * as S from "./styles";
import { useGetShoppingCartByClientId } from "../../hooks/useGetShoppingCartByClientId";
import { useEffect, useState } from "react";
import { IGetProductsShoppingCartData } from "../../types/io";
import { useNavigate } from "react-router-dom";
import { useDeleteProductShoppingCart } from "../../hooks/useDeleteProductShoppingCart";
import { useSnackbar } from "notistack";
import { usePostNewOrder } from "../../hooks/usePostNewOrder";
import { useUser } from "../../contexts/AuthContext";

export const ShoppingCart = () => {
  const navigate = useNavigate();
  const { enqueueSnackbar } = useSnackbar();
  const [products, setProducts] = useState<IGetProductsShoppingCartData[]>();
  const { user } = useUser();

  const {
    getShoppingCartByClientId,
    getShoppingCartByClientIdData,
    getShoppingCartByClientIdErrorMessage,
    getShoppingCartByClientIdRest,
  } = useGetShoppingCartByClientId({ clientId: user?.id ?? 0 });

  const {
    deleteProductShoppingCart,
    deleteProductShoppingCartError,
    deleteProductShoppingCartResponse,
    deleteProductShoppingCartRest,
  } = useDeleteProductShoppingCart();

  const {
    postNewOrder,
    postNewOrderData,
    postNewOrderErrorMessage,
    postNewOrderRest,
  } = usePostNewOrder();

  function handleRedirect(pk_id: number) {
    navigate(`/produto/${pk_id}`);
  }

  function onSetQuantity(quantity: number, idxProduct: number) {
    setProducts(
      products?.map((product, idx) => {
        if (idx == idxProduct) {
          return { ...product, quantidade: quantity };
        }
        return product;
      })
    );
  }

  function onFinishOrder() {
    if (products?.length) {
      postNewOrder({
        cliente: user?.id ?? 0,
        itens: products?.map((product) => ({
          produtoId: product?.produto?.id,
          quantidade: product?.quantidade,
        })),
      });
    }
  }

  useEffect(() => {
    setProducts(getShoppingCartByClientIdData);
  }, [getShoppingCartByClientIdData]);

  useEffect(() => {
    if (
      getShoppingCartByClientIdErrorMessage &&
      getShoppingCartByClientIdErrorMessage?.status !== 404
    ) {
      enqueueSnackbar(String(getShoppingCartByClientIdErrorMessage), {
        variant: "error",
        autoHideDuration: 2000,
      });
    }
  }, [getShoppingCartByClientIdErrorMessage]);

  useEffect(() => {
    if (deleteProductShoppingCartError) {
      enqueueSnackbar(String(deleteProductShoppingCartError), {
        variant: "error",
        autoHideDuration: 2000,
      });
    }
  }, [deleteProductShoppingCartError]);

  useEffect(() => {
    if (postNewOrderErrorMessage) {
      enqueueSnackbar(String(postNewOrderErrorMessage), {
        variant: "error",
        autoHideDuration: 2000,
      });
    }
  }, [postNewOrderErrorMessage]);

  useEffect(() => {
    if (deleteProductShoppingCartResponse) {
      enqueueSnackbar(deleteProductShoppingCartResponse, {
        variant: "success",
        autoHideDuration: 2000,
      });
      setProducts([]);
      getShoppingCartByClientId();
    }
  }, [deleteProductShoppingCartResponse]);

  useEffect(() => {
    if (postNewOrderData) {
      enqueueSnackbar(postNewOrderData?.data, {
        variant: "success",
        autoHideDuration: 2000,
      });
      getShoppingCartByClientId();
    }
  }, [postNewOrderData]);

  return (
    <S.Wrapper>
      <S.Container>
        {!!products?.length ? (
          <S.ContainerProductsCart>
            {products?.map((product, idx) => (
              <ProductCardKart
                key={product?.produto?.id}
                name={product?.produto?.nome}
                description={product?.produto?.descricao}
                quantity={product?.quantidade}
                price={product?.produto?.preco}
                image={product?.produto?.imagem}
                onClick={() => handleRedirect(product?.produto?.id)}
                onDelete={() =>
                  deleteProductShoppingCart({ itemId: product?.id })
                }
                onSetQuantity={(quantity) => onSetQuantity(quantity, idx)}
              />
            ))}
            <S.StyledButton variant="contained" onClick={onFinishOrder}>
              Finalizar Compra
            </S.StyledButton>
          </S.ContainerProductsCart>
        ) : (
          <h1>Você ainda não possui itens no carrinho!</h1>
        )}
      </S.Container>
    </S.Wrapper>
  );
};
