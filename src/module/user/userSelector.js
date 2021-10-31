/**
 * We are going to use this file yo get objects our Redux
 */

// Let's create a function for getting a token
export const getUserToken = (rootReducer) => rootReducer.user.token;

// Let's create a function for getting a login Promise (The Promise object represents the eventual completion (or failure) of an asynchronous operation and its resulting value. It is like 'Future' in Flutter)
export const getUserPromise= (rootReducer) => rootReducer.user.promise;