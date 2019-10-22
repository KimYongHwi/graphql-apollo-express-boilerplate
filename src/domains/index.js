import { gql } from 'apollo-server-express';

const indexResolver = {
  Query: {
    index: () => {
      return { message: 'welcome api' };
    },
  },
};

const linkSchema = gql`
  type Index {
    message: String
  }

  type Query {
    _: Boolean
    index: Index
  }

  type Mutation {
    _: Boolean
  }

  type Subscription {
    _: Boolean
  }
`;

const resolvers = [indexResolver];
const typeDefs = [linkSchema];

export default {
  resolvers,
  typeDefs,
};
