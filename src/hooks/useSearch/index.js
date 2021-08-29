// Core
import { useCallback } from "react";
import { useDispatch } from "react-redux";

// Actions
import { authorsActions } from "../../bus/authors/actions";

export const useSearch = () => {
  const dispatch = useDispatch();

  const onAuthorSearch = useCallback(
    (pattern) => {
      dispatch(authorsActions.searchAuthorAsync(pattern));
    },
    [dispatch]
  );

  return {
    onAuthorSearch,
  };
};
