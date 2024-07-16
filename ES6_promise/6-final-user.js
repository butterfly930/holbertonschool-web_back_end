import signUpUser from './4-user-promise';
import uploadPhoto from './5-photo-reject';

const handleProfileSignup = async (firstName, lastName, fileName) => {
  try {
   return Promise.all([signUpUser(firstName, lastName),uploadPhoto(fileName)]);
  } catch (error) {
    console.log(error.message);
  }
};

export default handleProfileSignup;
