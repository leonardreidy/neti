import express, { Request, Response } from 'express';

const port = 3000;

const server = express();

server.get('/', (req: Request, res: Response) => {
   res.send(('Hello from express server'));
});

server.listen(port, () => {
   console.log(`loc 230430-1353: express is listening on port ${port}`);
});
