import path from 'path';
import React from 'react';
import { renderToString } from 'react-dom/server';
import { match, RouterContext } from 'react-router';
import routes from '../../app/routes';
import { config } from '../../package.json';

  // javascript links
const jsLinks = [
    "https://code.jquery.com/jquery-2.2.4.min.js",
  "https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/js/bootstrap.min.js",
  "https://cdn.plot.ly/plotly-latest.min.js",
  path.join(config.assetsPublicPath, 'vendor.bundle.js'),
  path.join(config.assetsPublicPath, 'main.bundle.js'),
];

// css links
const cssLinks = [
  path.join(config.assetsPublicPath, 'styles.bundle.css'),
  "https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css",
  "https://fonts.googleapis.com/css?family=Ubuntu:400,300italic,300,400italic,500,500italic,700,700italic"
];

export default function uniRouter(req, res) {
  match({ routes, location: req.url }, (error, redirectLocation, renderProps) => {
    if (error) {
      res.status(500).send(error.message)
    } else if (redirectLocation) {
      res.redirect(302, redirectLocation.pathname + redirectLocation.search)
    } else if (renderProps) {
      res.render('index', {
        jsLinks,
        cssLinks,
        reactRoot: renderToString(<RouterContext {...renderProps} />)
      });
    } else {
      res.status(404).send('Not found')
    }
  })
}
