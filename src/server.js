import { ApolloServer } from 'apollo-server-express';
import { GraphQLError } from 'graphql';
import { v4 } from 'uuid';

import domains from './domains';
import repositories from './repositories';

const server = new ApolloServer({
  ...domains,
  context: () => ({ ...repositories }),
  formatError: err => {
    const errId = v4();
    console.error(`errId: ${errId}`);
    console.error(err);

    if (err.message.startsWith('Database Error: ')) {
      return new GraphQLError('Internal server error');
    }

    return err;
  },
});

export default server;
