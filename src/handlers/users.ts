import { Request } from 'express';

const users = [
  { id: 1, name: 'alice' },
  { id: 2, name: 'bob' },
];

export const getUser = async (req: Request<{ id: string }>) => {
  return users.find((u) => String(u.id) === req.params.id);
};

export const getUsers = async () => {
  return users;
};
