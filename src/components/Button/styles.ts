import styled from "styled-components";
import { Link } from "react-router-dom";

import { CORES } from "../../styles";

export const ButtonContainer = styled.button`
  border: 2px solid ${CORES.branca};
  color: ${CORES.branca};
  background-color: transparent;
  font-size: 16px;
  font-weight: bold;
  pading: 8px 16px;
  border-radius: 8px;
`;

// Herança do Styled Components (Pega todos os estilos configurados e cria a mesma Tag / Componente)
export const ButtonLink = styled(Link)`
  border: 2px solid ${CORES.branca};
  color: ${CORES.branca};
  background-color: transparent;
  font-size: 16px;
  font-weight: bold;
  padding: 8px 16px;
  text-decoration: none;
  border-radius: 8px;
`;
