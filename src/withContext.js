import React from "react";
import Context from "./Context";

// create component wrapper, wrap components that use context data & methods
// takes a react component as a parameter
const withContext = (WrappedComponent) => {
  const withHOC = (props) => {
    return (
      <Context.Consumer>
        {(context) => <WrappedComponent {...props} context={context} />}
      </Context.Consumer>
    );
  };
  return withHOC; // returns function which takes components props as parameter - wrapping comp in context, assigning context as a prop
};

export default withContext;
