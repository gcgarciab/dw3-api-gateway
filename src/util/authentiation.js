const { ApolloError } = require('apollo-server');
const { usersApiUrl } = require('../server');
const fetch = require('node-fetch');

const authentication = async ({ req }) => {
  const token = req.headers.authorization || '';

  if (token == '')
    return { userIdToken : null }

  try {
    let requestOptions = {
      method: 'POST',
      headers: {
        "Content-Type": 'application/json'
      },
      body: JSON.stringify({ token: token }),
      redirect: 'follow'
    };

    let response = await fetch(`${usersApiUrl}/token/verify/`, requestOptions);

    return {
      userIdToken: (await response.json()).UserId
    }
  } 
  
  catch (error) {
    throw new ApolloError(`TOKEN ERROR: ${500}: ${error}`, 500);
  }
}

module.exports = authentication;