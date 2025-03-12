import * as S from "./style";
import { Navbar } from "../../components/Navbar";
import { Outlet } from "react-router-dom";

export const MainPage = () => {
  return (
    <S.MainPageWrapper>
      <Navbar />
      <Outlet />
    </S.MainPageWrapper>
  );
};
