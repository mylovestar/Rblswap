import styled from "styled-components";
import { space, SpaceProps } from "styled-system";

export type CardFooterProps = SpaceProps;

const CardFooter = styled.div<CardFooterProps>`
  border-top: 1px solid rgba(255, 255, 255, 0.16);
  ${space}
  background: #132f3a;

`;

CardFooter.defaultProps = {
  p: "24px",
};

export default CardFooter;
