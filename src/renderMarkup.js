import React from 'react';
import { renderToString } from 'react-dom/server';

const renderMarkup = (appString, state) => `
    <!doctype html>
      <html>
        <head>
          <meta charset=utf-8>
          <title>RM</title>
          <link rel="stylesheet" href="/dist/main.css" />
        </head>
        <body>
          <div id="main">${appString}</div>
          <script id="__preloaded_state__">
            window.__PRELOADED_STATE__ = ${JSON.stringify(state).replace(/</g, '\\u003c')};
          </script>
          <script src="/dist/bundle.js"></script>
        </body>
      </html>
`;

export default (component, state) => renderMarkup(renderToString(component), state);
