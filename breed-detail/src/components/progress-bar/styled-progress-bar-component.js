import styled from 'styled-components';
import ProgressBar from './progress-bar-component';

export default styled(ProgressBar)`
  display: flex;

  .progress-bar__track {
    background-color: #ddecff;
    width: 100%;
    position: relative;
    border-radius: 20px;
    overflow: hidden;
    height: 8px;
  }

  .progress-bar__fill {
    top: 0;
    left: 0;
    height: 100%;
    background-color: #2687ff;
    width: ${({ total, percent }) => (percent / total ) * 100}%;
    position: absolute;
  }
`;