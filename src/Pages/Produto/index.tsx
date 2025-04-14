import { useSnackbar } from "notistack";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import * as S from "./styles";
import { useGetProductById } from "../../hooks/useGetProductById";
import { usePostAddItemShoppingCart } from "../../hooks/usePostAddItemShoppingCart";
import { usePostNewOrder } from "../../hooks/usePostNewOrder";
import { useUser } from "../../contexts/AuthContext";

interface IProdutoProps {
  name: string;
  price: number;
  description: string;
  url_photo: string;
}

export const Produto = () => {
  const { id } = useParams();
  const { enqueueSnackbar } = useSnackbar();
  const { user } = useUser();

  const { getProductByIdData, getProductByIdErrorMessage, getProductByIdRest } =
    useGetProductById({ productId: Number(id), enabled: !!id });

  const {
    postAddItemShoppingCart,
    postAddItemShoppingCartData,
    postAddItemShoppingCartErrorMessage,
    postAddItemShoppingCartRest,
  } = usePostAddItemShoppingCart();

  const {
    postNewOrder,
    postNewOrderData,
    postNewOrderErrorMessage,
    postNewOrderRest,
  } = usePostNewOrder();

  function onAddShopping(id: number) {
    postAddItemShoppingCart({
      produtoId: id,
      clienteId: user?.id ?? 0,
      quantidade: 1,
    });
  }

  function onFinishOrder(id: number) {
    postNewOrder({
      cliente: user?.id ?? 0,
      itens: [
        {
          produtoId: id,
          quantidade: 1,
        },
      ],
    });
  }

  useEffect(() => {
    if (getProductByIdErrorMessage) {
      enqueueSnackbar(String(getProductByIdErrorMessage), {
        variant: "error",
      });
    }
  }, [getProductByIdErrorMessage]);

  useEffect(() => {
    if (postAddItemShoppingCartErrorMessage) {
      enqueueSnackbar(String(postAddItemShoppingCartErrorMessage), {
        variant: "error",
      });
    }
  }, [postAddItemShoppingCartErrorMessage]);

  useEffect(() => {
    if (postNewOrderErrorMessage) {
      enqueueSnackbar(String(postNewOrderErrorMessage), {
        variant: "error",
      });
    }
  }, [postNewOrderErrorMessage]);

  useEffect(() => {
    if (postAddItemShoppingCartData) {
      enqueueSnackbar(postAddItemShoppingCartData, {
        variant: "success",
      });
    }
  }, [postAddItemShoppingCartData]);

  useEffect(() => {
    if (postNewOrderData) {
      enqueueSnackbar(postNewOrderData?.data, {
        variant: "success",
      });
    }
  }, [postNewOrderData]);

  return (
    <S.Wrapper>
      {!!getProductByIdData ? (
        <S.Container>
          <S.ImageAndDesc>
            <S.Image src={getProductByIdData?.imagem} alt="" />
            <S.description>
              <S.Title>{getProductByIdData?.nome}</S.Title>
              <S.Price>R$ {getProductByIdData?.preco}</S.Price>
              <S.GeneralInfo>{getProductByIdData?.descricao}</S.GeneralInfo>
              <S.StyledButton
                variant="contained"
                onClick={() => onFinishOrder(getProductByIdData?.id)}
              >
                COMPRAR
              </S.StyledButton>
              <S.StyledButton
                variant="outlined"
                onClick={() => onAddShopping(getProductByIdData.id)}
              >
                ADICIONAR AO CARRINHO
              </S.StyledButton>
            </S.description>
          </S.ImageAndDesc>
        </S.Container>
      ) : (
        <h1>O produto não fo encontrado!</h1>
      )}
    </S.Wrapper>
  );
};
