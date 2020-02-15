import styled from 'styled-components';
import Header from './header';

export default styled(Header)`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0 24px;
  height: 70px;
  box-shadow: 0 1px 0 0 rgba(0,0,0,.1);

  #header-logo a {
    font-size: 2rem;
    color: #2687ff;
    font-weight: 300;
    text-decoration: none;
  }
`;
