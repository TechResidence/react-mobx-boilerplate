import express from 'express';
const router = express.Router();

import chartWeather from './dummyChartWeather.json';

router.route('/chart/weather/')
  .get((req, res) => {
    res.send(chartWeather);
  });
  // .post((req, res) => {
  //   notes.push(JSON.parse(req.body.json));
  //   res.status(200).send();
  // })
  // .put((req, res) => {
  //   const data = JSON.parse(req.body.json);
  //   const idx = notes.findIndex((note) => note.id === data.id);
  //   notes[idx].title = data.title;
  //   notes[idx].body = data.body;
  //   res.status(200).send();
  // })
  // .delete((req, res) => {
  //   const data = JSON.parse(req.body.json);
  //   const idx = notes.findIndex((note) => note.id === data.id);
  //   notes.splice(idx, 1);
  //   res.status(200).send();
  // });

export default router;
