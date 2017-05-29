import React from 'react';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import { StaticRouter } from 'react-router';
import { renderToString } from 'react-dom/server';
import combinedReducers from './../client/modules/combinedReducers';
import Routes from './../client/route';

const renderFullPage = (html, preLoadedState) => (
  `<!DOCTYPE html>
  <html>
    <head>
      <meta charset="utf-8">
      <meta http-equiv="X-UA-Compatible" content="IE=edge">
      <meta name="viewport" content="width=device-width, initial-scale=1">
      <title>Index</title>
      <script>
        window.__PRELOADED_STATE__ = ${JSON.stringify(preLoadedState).replace(/</g, '\\u003c')}
      </script>
    </head>
    <body>
      <div id="root">${html}</div>
      <script src="/react.bundle.js"></script>
      <script src="/bundle.js"async></script>
    </body>
  </html>`
);

const handleRender = (req, res) => {
  const store = createStore(
    combinedReducers
  );

  const html = renderToString(
    <Provider store={store}>
      <StaticRouter location={req.url}>
        <Routes />
      </StaticRouter>
    </Provider>
  );

  const preLoadedState = store.getState();

  res.send(renderFullPage(html, preLoadedState));
};

const reactServerSide = (app) => {
  app.use(handleRender);
};

module.exports = reactServerSide;
