type Username = { username: string};

interface User {
  username: Username,
  age: number,
  dob: Date,
  email: string,
}

export type { User, Username };