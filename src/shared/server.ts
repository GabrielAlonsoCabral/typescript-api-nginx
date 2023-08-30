import 'dotenv/config';
import express from 'express';
import elastic from './clients/elastic';
import environment from './configs/environment';

const App = express();
const PORT = environment.PORT;

App.get('/', async (req, res) => {
  try {
    // Index a document (if needed)
    const indexResponse = await elastic.index({
      index: 'example-index',
      id: '1',
      body: {
        title: "HELLOW",
        content: 'WORLD!'
      },
    });

    // Search for documents where title or content contains "HEL"
    const searchOutput = await elastic.search({
      index: 'example-index',
      body: {
        query: {
          query_string: {
            query: '*HEL*',
            fields: ['title','content']
          }
        }
      }
    });

    console.log(searchOutput.hits.hits);

    res.send({ up: true, port: PORT });
  } catch (error) {
    console.error('Error:', error);
    res.status(500).send({ error: 'Internal Server Error' });
  }
});

App.listen(PORT, () => {
  console.info(`Listening at http://[::]:${PORT}`);
});
