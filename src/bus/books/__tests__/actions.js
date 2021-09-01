// Actions
import { booksActions } from "../actions";

// Types
import { booksTypes } from "../types";

// Mock
import { booksMock } from "../__mock__";

describe("books actions", () => {
  it("should get books", () => {
    expect(booksActions.getBooksAsync()).toEqual({
      type: booksTypes.GET_BOOKS_ASYNC,
    });
  });

  it("should set books", () => {
    expect(booksActions.setBooks(booksMock.books)).toEqual({
      type: booksTypes.SET_BOOKS,
      payload: booksMock.books,
    });
  });

  it("should find books based on author", () => {
    expect(
      booksActions.findBooksAuthorBasedAsync(
        booksMock.meta.id,
        booksMock.meta.pattern
      )
    ).toEqual({
      type: booksTypes.FIND_BOOKS_AUTHOR_BASED_ASYNC,
      payload: {
        id: booksMock.meta.id,
        searchValue: booksMock.meta.pattern,
      },
    });
  });

  it("should set search pattern", () => {
    expect(booksActions.setSearchPattern(booksMock.meta.pattern)).toEqual({
      type: booksTypes.SET_SEARCH_PATTERN,
      payload: booksMock.meta.pattern,
    });
  });

  it("should clear search pattern", () => {
    expect(booksActions.clearSearchPattern()).toEqual({
      type: booksTypes.CLEAR_SEARCH_PATTERN,
    });
  });
});
