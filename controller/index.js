const someRoute = (req, res) => {
    res.status(200).send({
        message: 'work!'
    })
}

exports.someRoute = someRoute;