import styled from 'styled-components';
import BreedListItem from './breed-list-item';

export default styled(BreedListItem)`
  display: flex;
  padding: 20px;
  margin-bottom: 10px;
  cursor: pointer;
  border-radius: 8px;
  box-shadow: 0 0 0 0 rgba(0,0,0,0);
  transition: box-shadow 0.3s;
  align-items: center;

  &:hover {
    box-shadow: 0 10px 20px 2px rgba(0,0,0,.1)
  }

  h3 {
    margin: 0;
    font-size: 1.3rem;
    margin-bottom: 10px;
  }

  small {
    font-size: 0.8rem;
    background: #ddecff;
    padding: 2px 4px;
    border-radius: 2px;
    margin-left: 4px;
    color: #2687ff;
  }

  .breeds-list-item__left {
    flex: 1;
    padding-right: 20px;
  }

  .breeds-list-item__left__image {
    background-image: url(${props => props.breed.image});
    background-size: cover;
    background-position: center;
    height: 100px;
    border-radius: 4px;
  }

  .breeds-list-item__right {
    flex: 5;
  }

  .breeds-list-item__right p {
    margin: 0
  }

  ${props => props.breed.image}
`;
