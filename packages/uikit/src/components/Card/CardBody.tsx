import styled from "styled-components";
import { space, SpaceProps } from "styled-system";

export type CardBodyProps = SpaceProps;

const CardBody = styled.div<CardBodyProps>`
  ${space}
  background: #132f3a;
  
`;

CardBody.defaultProps = {
  p: "24px",
};

export default CardBody;
