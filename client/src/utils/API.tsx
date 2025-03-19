
import { getJson } from "serpapi";

import type { User } from '../models/User.js';
import type { Travel } from "../models/Travel.js";
//import type { Book } from '../models/Book.js';

// route to get logged in user's info (needs the token)
export const getMe = (token: string) => {
  return fetch('/api/users/me', {
    headers: {
      'Content-Type': 'application/json',
      authorization: `Bearer ${token}`,
    },
  });
};

export const createUser = (userData: User) => {
  return fetch('/api/users', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(userData),
  });
};

export const loginUser = (userData: User) => {
  return fetch('/api/users/login', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(userData),
  });
};

// save book data for a logged in user
export const saveDestination = (travelData: Travel, token: string) => {
  return fetch('/api/users', {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
      authorization: `Bearer ${token}`,
    },
    body: JSON.stringify(travelData),
  });
};

// remove saved book data for a logged in user
export const deleteDestination = (travelId: string, token: string) => {
  return fetch(`/api/users/destinations/${travelId}`, {
    method: 'DELETE',
    headers: {
      authorization: `Bearer ${token}`,
    },
  });
};

export const TravelApi = (query: string) => {
    const travelKey = `54f44bc9e11031710e5525a2dba78f352213e895619bfe58e923fa51432979af`
    getJson({
        engine: "google",
        q: {query},
        api_key: travelKey
      }, (json) => {
        console.log(json["popular_destinations"]);
        return json;
    });
}

export const WeatherApi = (query: string) => {
    const weather_key= `a42a725b6106c5b620e98e324cf76cd4`;
    return fetch(`https://api.openweathermap.org/data/2.5/weather?q=${query}&appid=${weather_key}`);
}
