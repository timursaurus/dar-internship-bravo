export interface Movie {
  id: number;
  title: string;
  description: string;
  genre: string;
  duration: number;
  image: string;
}

export interface Actor {
  id: number
  name: string
  lastname: string
  age: number,
  image: string
  bio: string
}