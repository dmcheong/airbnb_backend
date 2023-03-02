const Place = require("../models/place.model");

exports.createPlace = (req,res) => {
    Place.create(req.body).then(
        (place) => 
            res.send(place)
    )
        .catch(err => res.status(400).send(err))
}

exports.getPlace = (req,res) => {
    Place.find().populate('owner').then(
        (places) => res.send(places)
        .catch(err => res.status(400).send(err))
    )
}

exports.getMyPlaces = (req,res) => {
    User.findById(req.userToken.id).populate('places').then(
        (user) => {
            res.send(user.populate('places'))
            .catch(err =>res.status(400).send(err))
        }
    )
}

exports.deleteMyPlaces = (req,res) => {
    User.findByIdAndDelete(req.params.id).populate('places')
        .then(user => res.send({ message: 'user with place'}))
        .catch(err => res.status(400).send(err))
}

exports.updateMyPlaces = (req,res) => {
    User.findByIdAndUpdate((req.userToken.id).populate('owners'), req.body, {new: true})
     .then((user) => {
        if(!user) {
            return res.status(404).send({
                message: "User Not Found"
            })
        }
        res.send(user.populate('owner'))
    })
    .catch(err => {
        res.status(400).send(err)
    })
}