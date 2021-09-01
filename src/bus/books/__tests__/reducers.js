// Actions
import { booksActions } from "../actions";

// Mock
import { booksMock } from "../__mock__";

// Reducers
import { booksReducer } from "../reducer";

const initialState = {
  books: [],
  pattern: "",
};

describe("books reducer", () => {
  it("should handle default behavior", () => {
    expect(booksReducer(void 0, {})).toEqual(initialState);
  });

  it("should set books to state", () => {
    expect(
      booksReducer(void 0, booksActions.setBooks(booksMock.books))
    ).toEqual({
      ...initialState,
      books: booksMock.books,
    });
  });

  it("should set search pattern to state", () => {
    expect(
      booksReducer(
        void 0,
        booksActions.setSearchPattern(booksMock.meta.pattern)
      )
    ).toEqual({
      ...initialState,
      pattern: booksMock.meta.pattern,
    });
  });

  it("should clear search pattern from state", () => {
    expect(booksReducer(void 0, booksActions.clearSearchPattern())).toEqual({
      ...initialState,
      pattern: "",
    });
  });
});
