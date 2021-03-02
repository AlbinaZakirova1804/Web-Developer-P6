const Sauce = require('../models/sauce');
global.atob = require(atob);

/******CREATE********/
exports.createSauce = (req, res, next) => {
    req.body.sauce = JSON.parse(req.body.sauce);//convert string into json object
    console .log(req.body);
    const url = req.protocol + '://' + req.get('host');

    console.log("I'm here in create sauce!");
        //schema for entry
        const sauce = new Sauce({
            userId: req.body.sauce.userId,
            name: req.body.sauce.name,
            manufacturer: req.body.sauce.manufacturer,
            description: req.body.sauce.description,
            imageUrl: url + '/images' + req.file.filename,
            heat: req.body.sauce.heat,
            likes: req.body.sauce.likes,//number 
            dislikes: req.body.sauce.dislikes,//number
            userLiked: req.body.sauce.userLiked,//array
            userDisliked: req.body.sauce.userDisliked
        })

    sauce.save().then(
        () => {
            res.status(201).json({
                message: 'Sauce saved successfullly'
            });
        }
    ).catch(
        (error) => {
            res.status(400).json({
                arror: arror
            });
        }
    );
};

/*********VIEW_ALL********/
exports.viewAllSauces = (req, res, next) => {
    //console.log(req.locals.user + "<- Loged in User.");
    console.log("I am about to view all sauces");
    Sauce.find().then(      //why find?
        (sauces) => {
            res.status(200).json(sauces);
        }
    ).catch(
        (error) => {
            res.staus(400).json({
                error: error
            });
        }
    );
}

/*********VIEW_ONE********/
exports.viewSauce = (req, res, next) => {
    console.log("I am about to view a single sauce");
    Sauce.findOne({
        _id: req.params.id
    }).then(
        (sauce) => {
            res.status(200).json(sauce);
        }
    ).catch(
        (error) => {
            res.status().json({
                error: error
            });
        }
    );
}

/**********UPDATE**********/
