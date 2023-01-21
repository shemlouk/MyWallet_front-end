import isSessionExpired from "../../services/utils/isSessionExpired";
import { Link, useNavigate } from "react-router-dom";
import AuthContext from "../../hooks/AuthContext";
import { useCallback, useContext } from "react";
import URL from "../../config";
import * as S from "./style";
import axios from "axios";

const Header = ({ children, hideButton, setMessage, setIsLoading }) => {
  const config = useContext(AuthContext);
  const navigate = useNavigate();
  const singOut = useCallback(async () => {
    setIsLoading(true);
    try {
      await axios.delete(`${URL}/signin`, config);
      navigate("/", { state: { message: "Até mais! :D" } });
    } catch ({ reponse: { status } }) {
      setIsLoading(false);
      isSessionExpired(status, navigate);
      setMessage("Não foi possível deslogar!");
    }
  }, [config, navigate, setIsLoading, setMessage]);
  return (
    <S.Container>
      <S.PageTitle>{children}</S.PageTitle>
      <S.Button hideButton={hideButton}>
        <ion-icon onClick={singOut} name="exit-outline"></ion-icon>
      </S.Button>
      <S.Button hideButton={!hideButton}>
        <Link to="/home">
          <ion-icon name="arrow-back-outline"></ion-icon>
        </Link>
      </S.Button>
    </S.Container>
  );
};

export default Header;
