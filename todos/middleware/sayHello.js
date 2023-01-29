function sayHello(request, response, next){
    console.log('HELLO!!!!')
    const status = false

    if(status){
        next()
    }else{
        response.status(500).send('Stock in say hello!')
    }
}
function sayGoodbye(request, response, next){
    console.log('BYE BYE!!!!')
    next()
}

module.exports = {
    sayHello,
    sayGoodbye
}