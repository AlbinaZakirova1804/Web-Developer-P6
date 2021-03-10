const Sauce = require('../models/sauce');
const fs = require('fs');

/******CREATE********/
exports.createSauce = (req, res, next) => {
    console.log("We are about to create a sauce!");
    console.log(req.body);
    const a = req.body;
    console.log(typeof a);
   //req.body = JSON.parse(req.body);//convert string into json object
    req.body.sause = req.body;
    console.log(req.body.sauce);
    //const url = req.protocol + '://' + req.get('host');

    console.log("I'm here in create sauce!");
        //schema for entry
        const sauce = new Sauce({
            //userId: req.body.sauce.userId,
            name: req.body.sauce.name,
            manufacturer: req.body.sauce.manufacturer,
            description: req.body.sauce.description,
            //imageUrl: url + '/images' + req.file.filename,
            heat: req.body.sauce.heat,
            likes: req.body.sauce.likes,//number 
            dislikes: req.body.sauce.dislikes,//number
            //userLiked: req.body.sauce.userLiked,//array
            //userDisliked: req.body.sauce.userDisliked
        })

        console.log(sauce);
    sauce.save().then(
        () => {
            res.status(201).json({
                message: 'Sauce saved successfullly'
            });
        }
    ).catch(
        (error) => {
            res.status(400).json({
                error: error
            });
        }
    );
};

/*********VIEW_ALL********/
exports.viewAllSauces = (req, res, next) => {
    //console.log(req.locals.user + "<- Loged in User.");
    console.log("I am about to view all sauces");
    Sauce.find().then(      
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
exports.updateSauce = (req, res, next) => {
    console.log("I am in update sauce!", req.body);
    console.log("id "+req.params.id);
    console.log("_id"+req.params._id);

    let sauce = new Sauce({_id: req.params.id});//create new entity sauce with crabed id from params
    console.log(sauce);
    //req.body.sauce = JSON.parse(req.body.sauce);   
             sauce = {
                //userId: req.body.sauce.userId,
                name: req.body.sauce.name,
                manufacturer: req.body.sauce.manufacturer,
                description: req.body.sauce.description,
                //imageUrl: url + '/images' + req.file.filename,
                heat: req.body.sauce.heat,
                likes: req.body.sauce.likes,//number 
                dislikes: req.body.sauce.dislikes,//number
                //userLiked: req.body.sauce.userLiked,//array
                //userDisliked: req.body.sauce.userDisliked
            }

//fill changed feilds with grabed params
    Sauce.updateOne({_id:req.params.id}, sauce).then(
        () => {
            res.status(201).json({
                message: 'Sauce updated successfully!'
            });
        }
    ).catch (
        (error) => {
            res.status(400).json({
                error: error
            });
        }
    );

};

/********DELETE*********/
exports.deleteSauce = (req, res, next) => {
    console.log('We are at delete sauce!');
    Sauce.deleteOne({_id: req.params.id}).then(
        () => {
          res.status(200).json({
            message: 'Deleted!'
          });
        }
      ).catch(
        (error) => {
          res.status(400).json({
            error: error
          });
        }
      );
}