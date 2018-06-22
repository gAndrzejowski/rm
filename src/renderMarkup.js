import React from 'react';
import { renderToString } from 'react-dom/server';
import { JssProvider, SheetsRegistry } from 'react-jss';

const JSSify = (component) => {
  const sheets = new SheetsRegistry();
  return {
    body: renderToString(
      <JssProvider registry={sheets}>
        <component />
      </JssProvider>),
    sheets,
  };
};

const renderMarkup = (strings, state) => `
    <!doctype html>
      <html>
        <head>
          <meta charset=utf-8>
          <title>RM</title>
          <style type="text/css">${strings.body}</style>
        </head>
        <body>
          <div id="main">${strings.body}</div>
          <script id="__preloaded_state__">
            window.PRELOADED_STATE = ${JSON.stringify(state).replace(/</g, '\\u003c')};
          </script>
          <script src="/dist/bundle.js"></script>
        </body>
      </html>
`;

export default (component, state) => renderMarkup(JSSify(component), state);
