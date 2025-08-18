import bcryptjs from 'bcryptjs';
import User from '../models/user.model.js';

export const test = (req,res)=>{
    res.json({
    message: 'Hello '
});
};

export const updateUser = async( req, res, next) => {
    if(req.user.id !== req.params.id) return next(errorHandler(401, "You can Only Update Your Own Account!"))
        try{
    if(req.body.passward)
    {
        req.body.passward = bcryptjs.hashSync(req.body.passward, 10)
    }
    const updateUser = await User.findByIdAndUpdate(req.params.id,{
        $set: {
            username: req.body.username,
            email: req.body.email,
            password: req.body.passward,
            avatar: req.body.avatar,
        }
    }, {new: true})

    const { passward, ...res} = updateUser._doc

    res.status(200).json(rest);
    
    } catch (error){    
    next(error)
 
}
};