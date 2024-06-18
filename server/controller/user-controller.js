
import User from "../model/user-schema.js"


export const userLogIn = async (request, response) => {
  try {
      const user = await User.findOne({ username: request.body.username, password: request.body.password });
      if(user) {
          return response.status(200).json({data: user});
      } else {
          return response.status(401).json('Invalid Login');
      }

  } catch (error) {
      response.json('Error: ', error.message);        
  }
}

export const UserSignup = async(request,response) => {
    try{

      const exist = await User.findOne({username: request.body.username})
      if(exist) {
        return response.status(401).json({message: 'Username already exist'})
      }
          const user = request.body;
          const newUser = new User(user);
          await newUser.save();

        response.status(200).json({message: user})  
        
    } catch(error) {
        response.status(500).json({message: error.message}) 
    }
}