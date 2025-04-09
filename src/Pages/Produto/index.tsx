import { useSnackbar } from "notistack";
import { useState } from "react";
import { useParams } from "react-router-dom";
import * as S from "./styles";

interface IProdutoProps {
    name: string;
    price: number;
    description: string;
    url_photo: string;
}


export const Produto = () => {

  const DEFAULT_PRODUCT: IProdutoProps = {
    name: "Placa de video Zotac Geforce Rtx 5090 512 bits 32 GB",
    price: 35.855,
    description: "A placa de vídeo Zotac GeForce RTX 5090 512 bits foi projetada para oferecer desempenho extremo em jogos e criação de conteúdo. Equipada com a arquitetura mais avançada da NVIDIA, esta placa gráfica oferece potência sem precedentes, ideal para rodar jogos em resolução 4K e 8K com total fluidez. Graças à sua largura de banda de 512 bits e memória de alta velocidade, garante uma experiência visual detalhada e resposta rápida em cada quadro.",
    url_photo: "https://http2.mlstatic.com/D_NQ_NP_2X_785423-MLA82678891255_022025-F.webp",
  };
  const { id } = useParams();
  const [produto, setProduto] = useState<IProdutoProps>(DEFAULT_PRODUCT);
  const [isLoading, setIsLoading] = useState(false);
  const { enqueueSnackbar } = useSnackbar();

  

  return (
    <S.Wrapper>
        <S.Container>
            <S.ImageAndDesc>
              <S.Image src={produto?.url_photo} alt="" />
              <S.description>
                <S.Title>{produto?.name}</S.Title>
                <S.Price>R$ {produto?.price}</S.Price>
                <S.GeneralInfo>{produto?.description}</S.GeneralInfo>
                <S.StyledButton variant="contained">COMPRAR</S.StyledButton>
                <S.StyledButton variant="outlined" onClick={() => {window.alert("PRODUTO ADICIONADO AO CARRINHO!")}}>ADICIONAR AO CARRINHO</S.StyledButton>
              </S.description>
            </S.ImageAndDesc>
        </S.Container>
    </S.Wrapper>
  )
}