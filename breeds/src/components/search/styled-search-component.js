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
    border: 1px solid #ddd;
  }
`;


