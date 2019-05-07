import React from "react";
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink
} from "reactstrap";
import "./navigationbar.css";
import { MdAdd } from "react-icons/md";
import BookmarkModal from "../modalComponent/BookmarkModal";

export default class NavigationBar extends React.Component {
  state = {
    isOpen: false,
    modal: false
  };

  toggle = () => {
    this.setState({
      isOpen: !this.state.isOpen
    });
  };

  toggleModal = () => {
    this.setState({
      modal: !this.state.modal
    });
  };

  render() {
    return (
      <div>
        <Navbar color="faded" light expand="md">
          <NavbarBrand href="/">Tsundoku</NavbarBrand>
          <NavbarToggler onClick={this.toggle} />
          <Collapse isOpen={this.state.isOpen} navbar>
            <Nav className="ml-auto" navbar>
              <NavItem>
                <MdAdd className="iconClass" onClick={this.toggleModal} />
                {this.state.modal && (
                  <BookmarkModal
                    token={this.props.appState.jwt}
                    toggle={this.toggleModal}
                    modal={this.state.modal}
                  />
                )}
              </NavItem>

              {!this.props.appState.jwt && (
                <NavLink href="/sign-in">
                  <NavItem eventkey={3}>Sign In</NavItem>
                </NavLink>
              )}

              {this.props.appState.jwt && (
                <NavLink href="/sign-out">
                  <NavItem eventkey={4}>Sign Out</NavItem>
                </NavLink>
              )}
            </Nav>
          </Collapse>
        </Navbar>
      </div>
    );
  }
}
