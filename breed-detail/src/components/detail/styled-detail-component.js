import styled from 'styled-components';
import Detail from './detail-component';

const StyledDetail = styled(Detail)`
  display: flex;
  flex-direction: column;
  align-items: center;
  display: flex;
  padding-top: 20px;

  .breed-detail__image {
    background-image: url(${props => props.breed.image});
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center;
    width: 300px;
    height: 300px;
    border-radius: 20px;
    margin-bottom: 20px;
  }

  .breed-detail__name {
    display: flex;
    flex-direction: column;
    align-items: center;
    font-weight: 300;
  }

  .breed-detail__name small {
    color: grey;
  }

  .breed-detail__temperament {
    margin-top: 0;
  }

  .breed-detail__description {
    text-align: center;
    margin-bottom: 40px;
  }

  .attributes {
    display: flex;
  }

  ul, li {
    list-style: none;
  }

  li {
    margin-bottom: 10px;
    width: 250px;
    display: flex;
    align-items: center;
    margin-bottom: 10px;
  }

  b {
    display: flex;
    width: 130px;
    margin-right: 10px;
    font-size: 1rem;
    margin-bottom: 6px;
  }

  .progress-bar {
    display: flex;
    flex: 2;
  }
`;

export default StyledDetail;
