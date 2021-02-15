import React, { Component } from 'react';
import Media from 'react-media';
import s from './Menu.module.css';
import { CSSTransition } from 'react-transition-group';
import NavBar from '../NavBar/NavBar';
import LinkCustom from '../Link/LinkCustom';
import routes from '../helpers/routes';
import slide from './slide.module.css';

export default class NavMenu extends Component {
  state = {
    isOpen: false,
  };

  toggleDropdown = e => {
    this.setState(state => ({ isOpen: !state.isOpen }));
  };

  render() {
    const { isOpen } = this.state;
    return (
      <div>
        <Media
          queries={{
            small: '(max-width: 767px)',
            medium: '(min-width: 768px) and (max-width: 1023px)',
            large: '(min-width: 1024px)',
          }}
        >
          {matches => (
            <>
              {matches.small && (
                <div className={s.container}>
                  <button
                    type="button"
                    className={s.button}
                    onClick={this.toggleDropdown}
                  >
                    &#8801;
                  </button>

                  <CSSTransition
                    in={isOpen}
                    timeout={200}
                    classNames={slide}
                    unmountOnExit
                  >
                    <div className={s.dropdown}>
                      <ul className={s.list} onClick={this.toggleDropdown}>
                        <li>
                          <LinkCustom
                            to={routes.HOME}
                            exact
                            text={'HOME'}
                          ></LinkCustom>
                        </li>
                        <li>
                          <LinkCustom
                            to={routes.ABOUT_ME}
                            text={'ABOUT'}
                          ></LinkCustom>
                        </li>
                        <li>
                          <LinkCustom
                            to={routes.RESUME}
                            text={'RESUME'}
                          ></LinkCustom>
                        </li>
                        <li>
                          <LinkCustom
                            to={routes.CONTACTS}
                            text={'CONTACTS'}
                          ></LinkCustom>
                        </li>
                        <li>
                          <LinkCustom
                            to={routes.PROJECTS}
                            text={'PROJECTS'}
                          ></LinkCustom>
                        </li>
                      </ul>
                    </div>
                  </CSSTransition>
                </div>
              )}
              {matches.medium && (
                <div>
                  <NavBar />
                </div>
              )}
              {matches.large && (
                <div>
                  <NavBar />
                </div>
              )}
            </>
          )}
        </Media>
      </div>
    );
  }
}
