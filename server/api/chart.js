import express from 'express';
const router = express.Router();

import chartWeather from './dummyChartWeather.json';
import chartStockprice from './dummyChartStockprice.json';

router.route('/chart/weather/')
  .get((req, res) => {
    res.send(chartWeather);
  });

router.route('/chart/stockprice/')
  .get((req, res) => {
    res.send(chartStockprice);
  });

export default router;
