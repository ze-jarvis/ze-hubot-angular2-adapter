{Robot,Adapter,TextMessage,User} = require 'hubot'

class Sample extends Adapter

    constructor: ->
        super
        @robot.logger.info "Constructor"

    send: (envelope, strings...) ->
        @robot.logger.info "Send"

    reply: (envelope, strings...) ->
        @robot.logger.info "Reply"

    run: ->
        @robot.logger.info "Running"
        @emit "connected"
        user = new User 1001, name: 'Sample User'
        message = new TextMessage user, 'Some Sample Message', 'MSG-001'
        @robot.receive message


exports.use = (robot) ->
    new Sample robot