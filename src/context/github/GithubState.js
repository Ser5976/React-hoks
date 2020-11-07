import React, { useReducer } from 'react';
import { GithubContext } from './GithubContext';
import axios from 'axios';
import { GithubReducer } from './GithubReducer';
import {
  GET_REPOS,
  CLEAR_USERS,
  GET_USER,
  SEARCH_USERS,
  SET_LOADING,
} from '../types';

const CLIENT_SECRET = process.env.REACT_APP_CLIENT_SECRET;
const CLIENT_ID = process.env.REACT_APP_CLIENT_ID;

export const GithubState = ({ children }) => {
  const initialState = {
    user: {},
    users: [],
    loading: false,
    repos: [],
  };

  const [state, dispatch] = useReducer(GithubReducer, initialState);

  const search = async (value) => {
    setLoading();
    const respons = await axios.get(
      `https://api.github.com/search/users?q=${value}&client_id=${CLIENT_ID}&client_secret=${CLIENT_SECRET}`
    );
    dispatch({
      type: SEARCH_USERS,
      payload: respons.data.items,
    });
  };
  const getUser = async (name) => {
    setLoading();
    const respons = await axios.get(
      `https://api.github.com/users/${name}?client_id=${CLIENT_ID}&client_secret=${CLIENT_SECRET}`
    );
    dispatch({
      type: GET_USER,
      payload: respons.data,
    });
  };
  const getRepos = async (name) => {
    setLoading();
    const respons = await axios.get(
      `https://api.github.com/users/${name}/repos?per_page=5&client_id=${CLIENT_ID}&client_secret=${CLIENT_SECRET}`
    );
    dispatch({
      type: GET_REPOS,
      payload: respons.data,
    });
  };
  const clearUsers = () => dispatch({ type: CLEAR_USERS });

  const setLoading = () => dispatch({ type: SET_LOADING });

  const { user, users, loading, repos } = state; // это деструктуризация, к переменным присваиваются одноименные ключи, чтобы не писать  к примеру user: state.user

  return (
    <GithubContext.Provider
      value={{
        search,
        getUser,
        getRepos,
        clearUsers,
        setLoading,
        user,
        users,
        loading,
        repos,
      }}
    >
      {children}
    </GithubContext.Provider>
  );
};
