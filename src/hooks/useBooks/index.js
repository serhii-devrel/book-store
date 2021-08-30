// Core
import { useEffect, useCallback, useState } from "react";
import { useSelector, useDispatch } from "react-redux";

// Actions
import { booksActions } from "../../bus/books/actions";

export const useBooks = () => {
  const dispatch = useDispatch();
  const [searchValue, setSearchValue] = useState("");
  const { books, pattern } = useSelector((state) => state.books);
  const { isFetching } = useSelector((state) => state.ui);

  useEffect(() => {
    if (!pattern.length) {
      dispatch(booksActions.getBooksAsync());
    }
  }, [dispatch, pattern]);

  useEffect(() => {
    setSearchValue(pattern);
  }, [pattern]);

  const findBooksAuthorBased = useCallback(
    (record) => {
      const { key: id, firstName, lastName } = record;
      const fullName = [firstName, lastName].join(" ");

      dispatch(booksActions.findBooksAuthorBasedAsync(id, fullName));
    },
    [dispatch]
  );

  const onSearchPatternChange = useCallback((e) => {
    setSearchValue(e.target.value);
  }, []);

  const onBooksSearch = useCallback(
    (pattern) => {
      dispatch(booksActions.searchBooksAsync(pattern));
    },
    [dispatch]
  );

  return {
    books,
    isFetching,
    findBooksAuthorBased,
    onBooksSearch,
    onSearchPatternChange,
    value: searchValue,
  };
};
