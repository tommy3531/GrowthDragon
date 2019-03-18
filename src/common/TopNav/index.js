import React from "react";
import { NavLink, Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDragon } from '@fortawesome/free-solid-svg-icons';
import LogOut from "../../common/LogOut";

const TopNav = ({mainIsLoggedIn}) => {
  console.log("TopNav: " + mainIsLoggedIn)
  return (
          <div class="hero-head">
            <nav class="navbar">
              <div class="container">
                <div class="navbar-brand">
                  <a class="navbar-item">
                    <NavLink to="/"><FontAwesomeIcon icon={faDragon} />Growth Dragon</NavLink>
                  </a>
                  <span class="navbar-burger burger" data-target="navbarMenuHeroB">
                    <span>home</span>
                    <span></span>
                    <span></span>
                  </span>
                </div>
                
                { !mainIsLoggedIn ? (
                  <div id="navbarMenuHeroB" class="navbar-menu">
                    <div class="navbar-end">
                        <div class="navbar-item">
                          <button class="button is-info">
                            <NavLink exact={true} to="/" activeClassName="is-active" activeStyle={{ color: '#041d2f' }}>Home</NavLink>
                          </button>
                        </div>
                        <div class="navbar-item">
                          <button class="button is-info">
                            <NavLink to="/register" activeClassName="is-active" activeStyle={{ color: '#041d2f' }}>Sign Up</NavLink>
                          </button>
                        </div>
                        <span class="navbar-item">
                          <button class="button is-info">
                            <NavLink to="/signin" activeClassName="is-active" activeStyle={{ color: '#041d2f' }}>Sign In</NavLink>
                          </button>
                        </span>
                      </div>
                    </div>
                  ) : (
                    <div id="navbarMenuHeroB" class="navbar-menu">
                      <div class="navbar-end">
                        <div class="navbar-item">
                            <LogOut />
                        </div>
                        <div class="navbar-item">
                          <button class="button is-info">
                            <NavLink exact={true} to="/" activeClassName="is-active" activeStyle={{ color: '#041d2f' }}>Home</NavLink>
                          </button>
                        </div>
                        <div class="navbar-item">
                          <button class="button is-info">
                            <NavLink to="/profile" activeClassName="is-active" activeStyle={{ color: '#041d2f' }}>Profile</NavLink>
                          </button>
                        </div>
                        <div class="navbar-item">
                          <button class="button is-info">
                            <NavLink to="/member" activeClassName="is-active" activeStyle={{ color: '#041d2f' }}>Member</NavLink>
                          </button>
                        </div>
                      </div>
                    </div>
                )}
              </div>
            </nav>
          </div>
  );
};

export default TopNav;
