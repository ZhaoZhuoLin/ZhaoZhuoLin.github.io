const schedule = require('node-schedule');

const job = schedule.scheduleJob('30 * * * * *', function(){
  console.log('The answer to life, the universe, and everything!');
  console.log(new Date())
});