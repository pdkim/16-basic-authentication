'use strict';

export default {

  authenticate: (auth) => {
    if ( (!!auth.username && !!auth.password) ) {
      return Promise.resolve({
        generateToken: () => {return 'token!';},
      });
    }
    else {
      return Promise.resolve(null);
    }
  },

  //need to add post code if we want to use this

};