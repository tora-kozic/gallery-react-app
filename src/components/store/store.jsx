import React, { Component } from "react";
import { Switch, Route, Link, BrowserRouter as Router } from "react-router-dom";
import axios from "axios";
import jwt_decode from "jwt-decode";

import AddProduct from "./addProduct";
import Cart from "./cart";
import Login from "./login";
import ProductList from "./productList";

import Context from "../../Context";
import ProductPage from "./productPage";

class Store extends Component {
  constructor(props) {
    super(props);
    this.state = {
      user: null,
      cart: {},
      products: [],
    };
    this.routerRef = React.createRef();
  }

  // add user to state when application starts
  // loads last user session if it exists
  async componentDidMount() {
    // async to wait for data to be returned
    let user = localStorage.getItem("user");
    let cart = localStorage.getItem("cart");

    const products = await axios.get("http://localhost:3001/products");
    user = user ? JSON.parse(user) : null;
    cart = cart ? JSON.parse(cart) : {};

    this.setState({ user, products: products.data });
  }

  // define login and logout methods attached to context
  login = async (email, password) => {
    const res = await axios
      .post("http://localhost:3001/login", { email, password })
      .catch((res) => {
        return { status: 401, message: "Unauthorized" };
      });

    // if user credentials are correct
    if (res.status === 200) {
      const { email } = jwt_decode(res.data.accessToken); // save the email by decoding token
      const user = {
        email,
        token: res.data.accessToken,
        accessLevel: email === "admin@example.com" ? 0 : 1,
      };

      this.setState({ user });
      localStorage.setItem("user", JSON.stringify(user));
      return true;
    } else {
      return false;
    }
  };

  logout = (e) => {
    e.preventDefault();
    this.setState({ user: null });
    localStorage.removeItem("user");
  };

  addProduct = (product, callback) => {
    let products = this.state.products.slice();
    products.push(product);
    this.setState({ products }, () => callback && callback());
  };

  addToCart = (cartItem) => {
    let cart = this.state.cart;
    if (cart[cartItem.id]) {
      cart[cartItem.id].amount += cartItem.amount;
    } else {
      cart[cartItem.id] = cartItem;
    }
    if (cart[cartItem.id].amount > cart[cartItem.id].product.stock) {
      cart[cartItem.id].amount = cart[cart.Item.id].product.stock;
    }
    localStorage.setItem("cart", JSON.stringify(cart));
    this.setState({ cart });
  };

  removeFromCart = (cartItemId) => {
    let cart = this.state.cart;
    delete cart[cartItemId];
    localStorage.setItem("cart", JSON.stringify(cart));
    this.setState({ cart });
  };

  clearCart = () => {
    let cart = {};
    localStorage.removeItem("cart");
    this.setState({ cart });
  };

  checkout = () => {
    if (!this.state.user) {
      this.routerRef.current.history.push("/login");
      return;
    }

    const cart = this.state.cart;

    const products = this.state.products.map((p) => {
      if (cart[p.name]) {
        p.stock = p.stock - cart[p.name].amount;

        axios.put(`http://localhost:3001/products/${p.id}`, { ...p });
      }
      return p;
    });
    this.setState({ products });
    this.clearCart();
  };

  render() {
    return (
      <Context.Provider // define context data and methods, pass as value property
        value={{
          ...this.state,
          removeFromCart: this.removeFromCart,
          addToCart: this.addToCart,
          login: this.login,
          addProduct: this.addProduct,
          clearCart: this.clearCart,
          checkout: this.checkout,
        }}
      >
        <Router ref={this.routerRef}>
          <div>
            <nav className="navbar navbar-expand-md navbar-light bg-white">
              <div className="container-fluid">
                <a className="navbar-brand" href="#">
                  Store
                </a>

                <ul className="navbar-nav mr-auto">
                  <li className="nav-item dropdown">
                    <a
                      className="nav-link dropdown-toggle"
                      href="#"
                      id="navbarDropdown"
                      role="button"
                      data-toggle="dropdown"
                      aria-haspopup="true"
                      aria-expanded="false"
                    >
                      Dropdown
                    </a>
                    <div
                      className="dropdown-menu"
                      aria-labelledby="navbarDropdown"
                    >
                      <a className="dropdown-item" href="#">
                        Action
                      </a>
                      <a className="dropdown-item" href="#">
                        Another action
                      </a>
                      <div className="dropdown-divider"></div>
                      <a className="dropdown-item" href="#">
                        Something else here
                      </a>
                    </div>
                  </li>
                </ul>

                <button>
                  <span className="navbar-toggler-icon"></span>
                </button>

                <button>
                  <Link to="/store/cart">Cart</Link>{" "}
                </button>
                <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                  <ul className="navbar-nav mr-auto">
                    <li className="nav-item active">
                      <Link to="/store/products" className="navbar-item">
                        Products
                      </Link>
                    </li>
                    <li className="nav-item">
                      {!this.state.user ? (
                        <Link to="/store/login" className="navbar-item">
                          Login
                        </Link>
                      ) : (
                        <Link
                          to="/"
                          onClick={this.logout}
                          className="navbar-item"
                        >
                          Logout
                        </Link>
                      )}
                    </li>
                  </ul>
                </div>
              </div>
            </nav>
            <Switch>
              <Route exact path="/store" component={ProductList} />
              <Route exact path="/store/login" component={Login} />
              <Route exact path="/store/add-product" component={AddProduct} />
              <Route exact path="/store/products" component={ProductList} />
              <Route exact path="/store/cart" component={Cart} />
              <Route
                path="/store/products/:productId"
                component={ProductPage}
              />
            </Switch>
          </div>
        </Router>
      </Context.Provider>
    );
  }
}

export default Store;
