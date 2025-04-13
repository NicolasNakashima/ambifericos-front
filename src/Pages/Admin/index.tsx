import { useState } from "react";
import * as S from "./styles";
import { Button, Modal } from "@mui/material";
import { ProductListComp } from "../../components/ProductListComp";

export const Admin = () => {
  const [openNewPro, setOpenNewPro] = useState(false);
  const [openListProducts, setOpenListProducts] = useState(false);

  const [formValues, setFormValues] = useState({
    nome: "",
    descricao: "",
    preco: "",
    estoque: "",
    imagem: "",
  });

  const isFormValid = Object.values(formValues).every(
    (value) => value.trim() !== ""
  );

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormValues((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmitAdd = () => {
    console.log("Produto adicionado:", formValues);
    setOpenNewPro(false);
    setFormValues({
      nome: "",
      descricao: "",
      preco: "",
      estoque: "",
      imagem: "",
    });
  };

  const handleDeleteProduct = (data: { pk_id: number }) => {
    console.log("Excluir produto com ID:", data.pk_id);
    // Lógica de exclusão real viria aqui no futuro
  };

  const mockData = Array.from({ length: 20 }, (_, i) => ({
    pk_id: i + 1,
    name: `Ambi ${i + 1}`,
    description: `Esse é o ambiduwille ${i + 1}`,
    price: 2 * i,
    stock: i + 1,
    image:
      "https://i.pinimg.com/736x/13/2c/ca/132ccab00cbe2774aa975c147c584aa8.jpg",
  }));

  return (
    <S.Wrapper>
      <S.Container>
        <S.Title>Área Administrador</S.Title>
        <S.ProductDiv>
          <Button
            variant="contained"
            color="primary"
            onClick={() => setOpenNewPro(true)}
          >
            Adicionar Produto
          </Button>
          <Button
            variant="contained"
            color="secondary"
            onClick={() => setOpenListProducts(true)}
          >
            Listagem de Produtos
          </Button>
          <Button variant="contained" color="primary">
            Adicionar Admin
          </Button>
          <Button variant="contained" color="secondary">
            Listagem de Admins
          </Button>
        </S.ProductDiv>

        {/* Modal: Adicionar Produto */}
        <Modal open={openNewPro} onClose={() => setOpenNewPro(false)}>
          <S.ContainerModalNewProduct>
            <S.ContainerForm>
              <S.Title>Adicionar Produto</S.Title>

              <S.StyledTextField
                label="Nome"
                variant="standard"
                name="nome"
                value={formValues.nome}
                onChange={handleInputChange}
              />
              <S.StyledTextField
                label="Descrição"
                variant="standard"
                name="descricao"
                value={formValues.descricao}
                onChange={handleInputChange}
              />
              <S.StyledTextField
                label="Preço"
                variant="standard"
                type="number"
                name="preco"
                value={formValues.preco}
                onChange={handleInputChange}
              />
              <S.StyledTextField
                label="Estoque"
                variant="standard"
                type="number"
                name="estoque"
                value={formValues.estoque}
                onChange={handleInputChange}
              />
              <S.StyledTextField
                label="URL da Imagem"
                variant="standard"
                name="imagem"
                value={formValues.imagem}
                onChange={handleInputChange}
              />

              <Button
                variant="contained"
                color="primary"
                disabled={!isFormValid}
                onClick={handleSubmitAdd}
              >
                Adicionar
              </Button>
            </S.ContainerForm>
          </S.ContainerModalNewProduct>
        </Modal>

        {/* Modal: Listagem de Produtos */}
        <Modal
          open={openListProducts}
          onClose={() => setOpenListProducts(false)}
        >
          <S.ContainerModalNewProduct>
            <S.ContainerForm>
              <S.Title>Listagem de Produtos</S.Title>
              <S.ScrollArea>
                {mockData.map((product) => (
                  <ProductListComp
                    key={product.pk_id}
                    pk_id={product.pk_id}
                    name={product.name}
                    image={product.image}
                    onDelete={handleDeleteProduct}
                  />
                ))}
              </S.ScrollArea>
            </S.ContainerForm>
          </S.ContainerModalNewProduct>
        </Modal>
      </S.Container>
    </S.Wrapper>
  );
};
