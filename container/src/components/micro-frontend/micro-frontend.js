import React, { useEffect } from 'react';
import PropTypes from 'prop-types';

/* eslint-disable consistent-return */

const MicroFrontend = ({ name, host, history, document, window }) => {
  const renderMicroFrontend = () => {
    /* The signature of this global function is the key contract
    between the container application and the micro frontends. */
    window[`render${name}`](`${name}-container`, history);
  };

  useEffect(() => {
    console.log('rendering');
    const scriptId = `micro-frontend-${name}`;
    if (document.getElementById(scriptId)) {
      console.log('existing script');
      renderMicroFrontend();
      return;
    }

    const script = document.createElement('script');
    script.id = scriptId;
    script.src = `${host}/micro-frontends/${name}.js`;
    script.onload = renderMicroFrontend;
    document.head.appendChild(script);

    return () => {
      console.log('unmounting');
      window[`unmount${name}`](`${name}-container`);
    };
  }, []);

  return (
    <main id={`${name}-container`} />
  );
};

MicroFrontend.propTypes = {
  // eslint-disable-next-line react/forbid-prop-types
  history: PropTypes.object.isRequired,
  name: PropTypes.string.isRequired,
  host: PropTypes.string.isRequired,
};

MicroFrontend.defaultProps = {
  document,
  window
};

export default MicroFrontend;
