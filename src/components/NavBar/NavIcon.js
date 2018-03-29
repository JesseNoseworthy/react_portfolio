import React from 'react';
import styled from 'styled-components';
import media from 'utils/media';

const OpenButton = styled.button`
  cursor: pointer;
  background: none;
  border: none;
  ${media.desktop`display: none;`};
`;

const IconLine = styled.span`
  display: block;
  width: 37px;
  height: 4px;
  background-color: ${props => props.theme.colors.primary};
  margin: 6px 0;
`;

const NavIcon = ({ openModal }) => (
  <OpenButton onClick={openModal}>
    <IconLine />
    <IconLine />
    <IconLine />
  </OpenButton>
)

export default NavIcon;