// Actions
import { authorsActions } from "../actions";

// Reducers
import { authorsReducer } from "../reducer";

// Mock
import { authorsMock } from "../__mock__";

const initialState = {
  author: {},
  authors: [],
};

describe("authors reducer", () => {
  it("should handle default behavior", () => {
    expect(authorsReducer(void 0, {})).toEqual(initialState);
  });

  it("should add authors to state", () => {
    expect(
      authorsReducer(void 0, authorsActions.setAuthors(authorsMock.authors))
    ).toEqual({
      ...initialState,
      authors: authorsMock.authors,
    });
  });

  it("should add author to state", () => {
    expect(
      authorsReducer(void 0, authorsActions.setAuthor(authorsMock.author))
    ).toEqual({
      ...initialState,
      author: authorsMock.author,
    });
  });
});
