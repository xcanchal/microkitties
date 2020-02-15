import styled from 'styled-components';
import SearchComponent from './search-component';

export default styled(SearchComponent)`
  display: flex;
  margin-bottom: 20px;

  input {
    height: 60px;
    display: flex;
    flex: 1;
    font-size: 1.5rem;
    padding: 0 20px;
    border-radius: 8px;
    border: none;
    outline: none;
    font-weight: 300;
    background: #f8f8f8;
    transition: background 0.2s;
  }

  input:focus {
    background: #eee;
  }
`;


