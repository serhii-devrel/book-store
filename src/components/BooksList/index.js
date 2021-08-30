// Core
import React from "react";

// Components
import { SearchBar } from "../SearchBar";

// Hooks
import { useBooks } from "../../hooks";

// Style
import { Wrapper } from "./Wrapper";
import { Cards, Item } from "./Cards";
import { Status } from "./Status";
import { Col, Row, Card, Result } from "antd";

const { Meta } = Card;

export const BooksList = () => {
  const { books, isFetching, onBooksSearch, onSearchPatternChange, value } =
    useBooks();

  return (
    <Col xs={24} lg={20}>
      <Wrapper>
        <SearchBar
          onSearch={onBooksSearch}
          onChange={onSearchPatternChange}
          value={value}
        />
        <Cards>
          <Row gutter={16}>
            {books.length ? (
              <>
                {books.map((author) =>
                  author.books.map((book) => (
                    <Col key={book.id} xs={24} md={12} lg={8}>
                      <Item>
                        <Card
                          loading={isFetching}
                          hoverable
                          cover={
                            <img alt={book.description} src={book.image} />
                          }
                          title={`Author: ${author.firstName} ${author.lastName}`}
                        >
                          <Meta
                            description={book.description}
                            title={`Date of publication: ${book.dateOfPublication}`}
                          />
                        </Card>
                      </Item>
                    </Col>
                  ))
                )}
              </>
            ) : (
              <>
                <Status>
                  <Result title="Sorry, the search request did not return any results" />
                </Status>
              </>
            )}
          </Row>
        </Cards>
      </Wrapper>
    </Col>
  );
};
