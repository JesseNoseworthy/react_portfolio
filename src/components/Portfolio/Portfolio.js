import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import media from 'utils/media';
import PortfolioItem from './PortfolioItem';

const Container = styled.div`
  height: 100%;
  padding: 20px;

  ${media.desktop`padding: 40px;`};
`;

const Header = styled.header`margin: 0 10px;`;

const Title = styled.h2`color: rgb(78,108,202);`;

const PortfolioList = styled.div`
  display: flex;
  flex-wrap: wrap;
`;

class Portfolio extends Component {
  render() {
    const { title, description, items } = this.props;

    return (
      <Container>
        <Header>
          {title && <Title>{title}</Title>}
          {description && <p>{description}</p>}
        </Header>
        <PortfolioList>
          {items.map((portfolioItem, key) => <PortfolioItem key={key} {...portfolioItem} />)}
        </PortfolioList>
      </Container>
    );
  }
}

Portfolio.propTypes = {
  title: PropTypes.string,
  description: PropTypes.string,
  items: PropTypes.arrayOf(PropTypes.shape({
    "title": PropTypes.string,
    "demoUrl": PropTypes.string,
    "description": PropTypes.string
   }))
};

export default Portfolio;