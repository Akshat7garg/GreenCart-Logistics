import express from "express";
import type { Request, Response } from "express";

const app = express();
app.use(express.json());

app.get('/', (req: Request, res:Response) => {
    res.send('Hello World!');
});

app.listen(3000, () => {
    console.log('Server is running on http://localhost:3000');
});