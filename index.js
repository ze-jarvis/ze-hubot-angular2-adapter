'use strict';

var Adapter = require('hubot').Adapter;

class Angular2HubotAdapter extends Adapter {

  constructor(robot) {
    super();
    this.robot = robot;
    this.robot.logger.info('Hello world !')
  }

  //send(envelope, strings) {
  //  this.robot.logger.info('Hello');
  //}
  //
  //reply (envelope, strings) {
  //  this.robot.logger.info('Reply');
  //}

  run() {
    console.log('run');
    this.robot.logger.info('Running');
  }

  //use() {
  //  console.log('use me baby');
  //}

}

exports.use = function(robot) {
  new Angular2HubotAdapter(robot);
};
