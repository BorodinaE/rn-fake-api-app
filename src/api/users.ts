// api for /users
import apiClient from "./client";

export interface Avatar {
  name: string;
  percent: number;
  size: string;
  status: string;
  type: string;
  uid: string;
  url: string;
}

export interface User {
  id: number;
  firstName: string;
  lastName: string;
  email: string;
  status: boolean;
  birthday?: string;
  skills?: string[];
  avatar?: Avatar[];
}

// GET /users — получение списка всех пользователей
export const getUsers = async () => {
  return apiClient.get<User[]>("/users");
};

// GET /users — получение пользователя по id
export const getUserById = async (id: number) => {
  return apiClient.get<User[]>(`/users/${id}`);
};
