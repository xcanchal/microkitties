const api = {
  host: 'https://api.thecatapi.com',
  version: 'v1',
  defaultOptions: {
    mode: 'cors',
    headers: {
      'x-api-key': 'c5c2136a-0c5a-439b-8df6-2e4edc5ce32f',
    },
  }
};

/**
 * Wrapper for the javascript fetch API
 * @param {String} endpoint - request endpoint
 * @param {Object} options - request options
 */
export const customFetch = async (endpoint, options = {}) => {
  const path = `${api.host}/${api.version}/${endpoint}`;

  const response = await fetch(path, {
    ...api.defaultOptions,
    ...options,
    headers: { ...api.defaultOptions.headers, ...options.headers },
  });

  if (!response.ok) {
    throw new Error(response.error);
  }

  const data = await response.json();
  return data;
};

/**
 * HTTP GET request
 * @param {String} endpoint - request endpoint
 * @param {Object} options - request options
 */
export const GET = async (endpoint, options) => customFetch(endpoint, {
  method: 'GET',
  ...options,
});

/**
 * HTTP POST request
 * @param {String} endpoint - request endpoint
 * @param {Object} body - request payload
 * @param {Object} options - request options
 */
export const POST = (endpoint, body, options) => customFetch(endpoint, {
  method: 'POST',
  body: JSON.stringify(body),
  ...{
    ...options,
    headers: {
      'content-type': 'application/json',
    },
  },
});

/**
 * HTTP PATCH request
 * @param {String} endpoint - request endpoint
 * @param {Object} body - request payload
 * @param {Object} options - request options
 */
export const PATCH = (endpoint, body, options) => customFetch(endpoint, {
  method: 'PATCH',
  body: JSON.stringify(body),
  ...options,
});

/**
 * HTTP DELETE request
 * @param {String} endpoint - endpoint endpoint
 */
export const DELETE = endpoint => customFetch(endpoint, {
  method: 'DELETE',
});