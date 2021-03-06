const axios = require('axios');
const graphql = require('graphql');
const { print } = graphql;

const queryGraphqlData = async (graphqlQuery, body) => {
  return await axios({
    url: process.env.API_REPORTAPI_GRAPHQLAPIENDPOINTOUTPUT,
    method: 'post',
    headers: {
      'x-api-key': process.env.API_REPORTAPI_GRAPHQLAPIKEYOUTPUT,
    },
    data: {
      query: print(graphqlQuery),
      variables: {
        input: body,
      },
    },
  });
};

module.exports = { queryGraphqlData };
