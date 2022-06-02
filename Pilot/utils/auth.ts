import { User } from './interfaces';

const getUser = (id?: string): User => {
  return { username: 'Neodusk', age: 26, dob: new Date('02-16-96'), email: 'fakeemail@fake.com' };
}

module.exports = { getUser };