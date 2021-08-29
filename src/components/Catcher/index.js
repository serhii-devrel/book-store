// Core
import React, { Component } from "react";

export class Catcher extends Component {
  state = {
    error: false,
  };

  componentDidCatch(error, stack) {
    // Sentry integration
    console.log("ERROR", error.message);
    console.log("STACKTRACE", stack.componentStack);

    this.setState({ error: true });
  }

  render() {
    const { error } = this.state;
    const { children } = this.props;

    if (error) {
      return (
        <section className="">
          <h1>Something went wrong</h1>
        </section>
      );
    }
    return children;
  }
}
