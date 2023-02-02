import express from 'express';

import { getUser, getUsers } from './handlers/users';

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get('/user/:id', async (req, res) => {
  try {
    const user = await getUser(req);
    res.status(200).json(user);
  } catch (err) {
    console.error(err);
    res.status(500).send('internal error');
  }
});

app.get('/users', async (req, res) => {
  try {
    const users = await getUsers();
    res.status(200).json(users);
  } catch (err) {
    console.error(err);
    res.status(500).send('internal error');
  }
});

app.listen(process.env.PORT || 3000, () => {
  console.log('Express listening on port ' + (process.env.PORT || 3000));
});
