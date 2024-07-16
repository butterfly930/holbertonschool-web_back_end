import signUpUser from './4-user-promise';
import uploadPhoto from './5-photo-reject';

export default function handleProfileSignup(firstName, lastName, fileName) {
    const promises = [signUpUser(firstName, lastName), uploadPhoto(fileName)];

   return Promise.allSettled(promises).then((results)=>{
   
 const data = [
    {
    status: 'fulfilled',
    value: { firstName: 'Bob', lastName: 'Dylan' }
  },
  {
    status: 'rejected',
     Error: "bob_dylan.jpg cannot be processed"
   }
]
   console.log(data);
   });
};