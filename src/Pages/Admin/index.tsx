import { useEffect, useState } from "react";
import * as S from "./styles";
import { Button, Modal } from "@mui/material";
import { AdminListing } from "../../components/AdminListing";
import { usePostNewProduct } from "../../hooks/usePostNewProduct";
import { enqueueSnackbar } from "notistack";
import { useGetProducts } from "../../hooks/useGetProducts";
import { usePostNewClient } from "../../hooks/usePostNewClient";

export const Admin = () => {
  const [openNewPro, setOpenNewPro] = useState(false);
  const [openListProducts, setOpenListProducts] = useState(false);
  const [openAddAdmin, setOpenAddAdmin] = useState(false);
  const [openListAdmins, setOpenListAdmins] = useState(false);

  const [formValuesAdmin, setFormValuesAdmin] = useState({
    nome: "",
    email: "",
    senha: "",
  });

  const [formValues, setFormValues] = useState({
    nome: "",
    descricao: "",
    preco: "",
    estoque: "",
    imagem: "",
  });

  const { postNewProduct, postNewProductData, postNewProductErrorMessage } =
    usePostNewProduct();

  const { getProductsData, getProductsErrorMessage, getProducts } =
    useGetProducts({ enabled: false });

  const { postNewClient, postNewClientData, postNewClientErrorMessage } =
    usePostNewClient();

  const isAdminFormValid = Object.values(formValuesAdmin).every(
    (value) => value.trim() !== ""
  );

  const isFormValid = Object.values(formValues).every(
    (value) => value.trim() !== ""
  );

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormValues((prev) => ({ ...prev, [name]: value }));
  };

  const handleInputChangeAdmin = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormValuesAdmin((prev) => ({ ...prev, [name]: value }));
  };

  const handleCloseAddAdminModal = () => {
    setOpenAddAdmin(false);
    setFormValuesAdmin({
      nome: "",
      email: "",
      senha: "",
    });
  };

  const handleSubmitAddAdmin = () => {
    postNewClient({
      body: {
        nome: formValuesAdmin.nome,
        email: formValuesAdmin.email,
        senha: formValuesAdmin.senha,
        endereco: "Rua germinare",
        adm: true,
      },
    });
    handleCloseAddAdminModal();
  };

  const handleSubmitAdd = () => {
    postNewProduct({
      body: {
        nome: formValues.nome,
        descricao: formValues.descricao,
        preco: Number(formValues.preco),
        estoque: Number(formValues.estoque),
        imagem: formValues.imagem,
      },
    });
    handleCloseAddProductModal();
  };

  const handleCloseAddProductModal = () => {
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
  };

  const handleDeleteAdmin = (data: { pk_id: number }) => {
    console.log("Excluir admin com ID:", data.pk_id);
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

  const mockAdmins = Array.from({ length: 10 }, (_, i) => ({
    pk_id: i + 100,
    name: `Admin ${i + 1}`,
    image:
      "https://i.pinimg.com/736x/13/2c/ca/132ccab00cbe2774aa975c147c584aa8.jpg",
  }));

  useEffect(() => {
    if (postNewProductData) {
      enqueueSnackbar("Produto adicionado com sucesso!", {
        variant: "success",
      });
      setOpenNewPro(false);
    }
  }, [postNewProductData]);

  useEffect(() => {
    if (postNewProductErrorMessage) {
      enqueueSnackbar(String(postNewProductErrorMessage), {
        variant: "error",
      });
    }
    setOpenNewPro(false);
  }, [postNewProductErrorMessage]);

  useEffect(() => {
    if (getProductsData) {
      setOpenListProducts(true);
    }
  }, [getProductsData]);

  useEffect(() => {
    if (getProductsErrorMessage) {
      enqueueSnackbar(String(getProductsErrorMessage), {
        variant: "error",
      });
      setOpenListProducts(false);
    }
  }, [getProductsErrorMessage]);

  useEffect(() => {
    if (postNewClientData) {
      enqueueSnackbar("Admin adicionado com sucesso!", {
        variant: "success",
      });
      setOpenAddAdmin(false);
    }
  }, [postNewClientData]);

  useEffect(() => {
    if (postNewClientErrorMessage) {
      enqueueSnackbar(String(postNewClientErrorMessage), {
        variant: "error",
      });
    }
    setOpenAddAdmin(false);
  }, [postNewClientErrorMessage]);

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
            onClick={() => getProducts()}
          >
            Listagem de Produtos
          </Button>
          <Button
            variant="contained"
            color="primary"
            onClick={() => setOpenAddAdmin(true)}
          >
            Adicionar Admin
          </Button>
          <Button
            variant="contained"
            color="secondary"
            onClick={() => setOpenListAdmins(true)}
          >
            Listagem de Admins
          </Button>
        </S.ProductDiv>

        {/* Modal: Adicionar Produto */}
        <Modal open={openNewPro} onClose={handleCloseAddProductModal}>
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
                {getProductsData?.map((product) => (
                  <AdminListing
                    key={product.id}
                    pk_id={product.id}
                    name={product.nome}
                    image={product.imagem}
                    onDelete={handleDeleteProduct}
                  />
                ))}
              </S.ScrollArea>
            </S.ContainerForm>
          </S.ContainerModalNewProduct>
        </Modal>

        {/* Modal: Adicionar Admin */}
        <Modal open={openAddAdmin} onClose={handleCloseAddAdminModal}>
          <S.ContainerModalNewProduct>
            <S.ContainerForm>
              <S.Title>Adicionar Admin</S.Title>
              <S.StyledTextField
                label="Nome"
                variant="standard"
                name="nome"
                value={formValuesAdmin.nome}
                onChange={handleInputChangeAdmin}
              />
              <S.StyledTextField
                label="Email"
                variant="standard"
                name="email"
                type="email"
                value={formValuesAdmin.email}
                onChange={handleInputChangeAdmin}
              />
              <S.StyledTextField
                label="Senha"
                variant="standard"
                name="senha"
                type="password"
                value={formValuesAdmin.senha}
                onChange={handleInputChangeAdmin}
              />
              <Button
                variant="contained"
                color="primary"
                disabled={!isAdminFormValid}
                onClick={handleSubmitAddAdmin}
              >
                Adicionar
              </Button>
            </S.ContainerForm>
          </S.ContainerModalNewProduct>
        </Modal>

        {/* Modal: Listagem de Admins */}
        <Modal open={openListAdmins} onClose={() => setOpenListAdmins(false)}>
          <S.ContainerModalNewProduct>
            <S.ContainerForm>
              <S.Title>Listagem de Admins</S.Title>
              <S.ScrollArea>
                {mockAdmins.map((admin) => (
                  <AdminListing
                    key={admin.pk_id}
                    pk_id={admin.pk_id}
                    name={admin.name}
                    image={admin.image}
                    onDelete={handleDeleteAdmin}
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
