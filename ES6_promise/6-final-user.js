import signUpUser from './4-user-promise';
import uploadPhoto from './5-photo-reject';

const handleProfileSignup = async(firstName, lastName, fileName) => {
  try {
    const user = await signUpUser(firstName, lastName);
    const photos = await uploadPhoto(fileName);

   return Promise.allSettled([user, photos]).then((result)=>{
    return result;
   });

  } catch (error) {
   return error;
  }
};

export default handleProfileSignup;
