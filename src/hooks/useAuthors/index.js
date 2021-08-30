// Core
import { useEffect, useCallback } from "react";
import { useSelector, useDispatch } from "react-redux";

// Actions
import { authorsActions } from "../../bus/authors/actions";

export const useAuthors = () => {
  const dispatch = useDispatch();
  const { authors } = useSelector((state) => state.authors);
  const { isFetching } = useSelector((state) => state.ui);
  const authorsBasedOnKey = authors.map(({ id, ...records }) => ({
    ...records,
    key: id,
  }));

  useEffect(() => {
    dispatch(authorsActions.getAuthorsAsync());
  }, [dispatch]);

  const onAuthorSearch = useCallback(
    (pattern) => {
      dispatch(authorsActions.searchAuthorAsync(pattern));
    },
    [dispatch]
  );

  const onAuthorDelete = useCallback(
    (record) => {
      const { key: id } = record;
      dispatch(authorsActions.deleteAuthorAsync(id));
    },
    [dispatch]
  );

  return {
    authors: authorsBasedOnKey,
    isFetching,
    onAuthorDelete,
    onAuthorSearch,
  };
};
