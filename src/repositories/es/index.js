import Elasticsearch from 'elasticsearch';
import config from 'config';

const client = new Elasticsearch.Client({
  host: config.elasticsearch,
  log: 'error',
});

export default client;
