import { useNavigate } from "react-router-dom";
import ProductCard from "../../components/ProductCard";
import * as S from "./styles";
import { useGetProducts } from "../../hooks/useGetProducts";
import { useEffect } from "react";
import { useSnackbar } from "notistack";
import { useGetClientByEmailAndPassword } from "../../hooks/useGetClientByEmailAndPassword";

export const Home = () => {
  const navigate = useNavigate();
  const { enqueueSnackbar } = useSnackbar();

  const { getProductsData, getProductsErrorMessage } = useGetProducts({});

  const handleRedirect = (pk_id: number) => {
    navigate(`/produto/${pk_id}`);
  };

  useEffect(() => {
    if (getProductsErrorMessage) {
      enqueueSnackbar(String(getProductsErrorMessage), {
        variant: "error",
        autoHideDuration: 2000,
      });
    }
  }, [getProductsErrorMessage]);

  return (
    <S.Wrapper>
      {!!getProductsData?.length ? (
        <S.Container>
          <S.RecomendedContainer>
            {getProductsData?.map((product) => (
              <ProductCard
                pk_id={product?.id}
                name={product?.nome}
                description={product?.descricao}
                price={product?.preco}
                image={product?.imagem}
                onClick={(data) => handleRedirect(data.pk_id)}
              />
            ))}
          </S.RecomendedContainer>
        </S.Container>
      ) : (
        <h1>Nenhum produto encontrado</h1>
      )}
    </S.Wrapper>
  );
};
