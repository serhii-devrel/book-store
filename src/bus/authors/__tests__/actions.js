// Actions
import { authorsActions } from "../actions";

// Types
import { authorsTypes } from "../types";

// Mock
import { authorsMock } from "../__mock__";

describe("authors actions", () => {
  it("should get authors", () => {
    expect(authorsActions.getAuthorsAsync()).toEqual({
      type: authorsTypes.GET_AUTHORS_ASYNC,
    });
  });

  it("should get author", () => {
    expect(authorsActions.getAuthorAsync(authorsMock.meta.id)).toEqual({
      type: authorsTypes.GET_AUTHOR_ASYNC,
      payload: authorsMock.meta.id,
    });
  });

  it("should set authors", () => {
    expect(authorsActions.setAuthors(authorsMock.authors)).toEqual({
      type: authorsTypes.SET_AUTHORS,
      payload: authorsMock.authors,
    });
  });

  it("should set author", () => {
    expect(authorsActions.setAuthor(authorsMock.author)).toEqual({
      type: authorsTypes.SET_AUTHOR,
      payload: authorsMock.author,
    });
  });

  it("should add author", () => {
    expect(authorsActions.addAuthorAsync(authorsMock.author)).toEqual({
      type: authorsTypes.ADD_AUTHOR_ASYNC,
      payload: {
        author: authorsMock.author,
      },
    });
  });

  it("should edit author", () => {
    expect(
      authorsActions.editAuthorAsync(authorsMock.meta.id, authorsMock.author)
    ).toEqual({
      type: authorsTypes.EDIT_AUTHOR_ASYNC,
      payload: {
        id: authorsMock.meta.id,
        author: authorsMock.author,
      },
    });
  });

  it("should search author", () => {
    expect(authorsActions.searchAuthorAsync(authorsMock.meta.pattern)).toEqual({
      type: authorsTypes.SEARCH_AUTHOR_ASYNC,
      payload: authorsMock.meta.pattern,
    });
  });

  it("should delete author", () => {
    expect(authorsActions.deleteAuthorAsync(authorsMock.meta.id)).toEqual({
      type: authorsTypes.DELETE_AUTHOR_ASYNC,
      payload: authorsMock.meta.id,
    });
  });
});
