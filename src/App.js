import React from 'react';

import { NOTIFICATION_SYSTEM_STYLE } from 'utils/constants';

import componentQueries from 'react-component-queries';

import {
  // MdCardGiftcard,
  MdLoyalty,
  MdImportantDevices,
} from 'react-icons/lib/md';
import NotificationSystem from 'react-notification-system';

import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';

// layouts
import { Header, Sidebar, Content, Footer } from 'components/Layout';

import GAListener from 'components/GAListener';

// pages
import DashboardPage from 'pages/DashboardPage';
import WidgetPage from 'pages/WidgetPage';
import ButtonPage from 'pages/ButtonPage';
import TypographyPage from 'pages/TypographyPage';
import AlertPage from 'pages/AlertPage';
import TablePage from 'pages/TablePage';
import CardPage from 'pages/CardPage';
import BadgePage from 'pages/BadgePage';
import ButtonGroupPage from 'pages/ButtonGroupPage';
import DropdownPage from 'pages/DropdownPage';
import ProgressPage from 'pages/ProgressPage';
import ModalPage from 'pages/ModalPage';
import FormPage from 'pages/FormPage';
import InputGroupPage from 'pages/InputGroupPage';
import ChartPage from 'pages/ChartPage';

import './styles/reduction.css';

class App extends React.Component {
  static isSidebarOpen() {
    return document
      .querySelector('.cr-sidebar')
      .classList.contains('cr-sidebar--open');
  }

  componentWillReceiveProps({ breakpoint }) {
    if (breakpoint !== this.props.breakpoint) {
      this.checkBreakpoint(breakpoint);
    }
  }

  componentDidMount() {
    this.checkBreakpoint(this.props.breakpoint);

    setTimeout(() => {
      this.notificationSystem.addNotification({
        title: <MdImportantDevices />,
        message: 'Welome to Reduction Admin!',
        level: 'info',
      });
    }, 1500);

    setTimeout(() => {
      this.notificationSystem.addNotification({
        title: <MdLoyalty />,
        message:
          'Reduction is carefully designed template powered by React and Bootstrap4!',
        level: 'info',
      });
    }, 2500);
  }

  // close sidebar when
  handleContentClick = event => {
    event.preventDefault();

    // close sidebar if sidebar is open and screen size is less than `md`
    if (
      App.isSidebarOpen() &&
      (this.props.breakpoint === 'xs' ||
        this.props.breakpoint === 'sm' ||
        this.props.breakpoint === 'md')
    ) {
      this.openSidebar('close');
    }
  };

  checkBreakpoint(breakpoint) {
    switch (breakpoint) {
      case 'xs':
      case 'sm':
      case 'md':
        return this.openSidebar('close');

      case 'lg':
      case 'xl':
      default:
        return this.openSidebar('open');
    }
  }

  openSidebar(openOrClose) {
    if (openOrClose === 'open') {
      return document
        .querySelector('.cr-sidebar')
        .classList.add('cr-sidebar--open');
    }

    document.querySelector('.cr-sidebar').classList.remove('cr-sidebar--open');
  }

  render() {
    return (
      <BrowserRouter>
        <GAListener>
          <main className="cr-app bg-light">
            <Sidebar />
            <Content fluid onClick={this.handleContentClick}>
              <Header />
              <Switch>
                <Route exact path="/" component={DashboardPage} />
                <Route path="/buttons" component={ButtonPage} />
                <Route path="/cards" component={CardPage} />
                <Route path="/widgets" component={WidgetPage} />
                <Route path="/typography" component={TypographyPage} />
                <Route path="/alerts" component={AlertPage} />
                <Route path="/tables" component={TablePage} />
                <Route path="/badges" component={BadgePage} />
                <Route path="/button-groups" component={ButtonGroupPage} />
                <Route path="/dropdowns" component={DropdownPage} />
                <Route path="/progress" component={ProgressPage} />
                <Route path="/modals" component={ModalPage} />
                <Route path="/forms" component={FormPage} />
                <Route path="/input-groups" component={InputGroupPage} />
                <Route path="/charts" component={ChartPage} />
                <Redirect to="/" />
              </Switch>
              <Footer />
            </Content>

            <NotificationSystem
              dismissible={false}
              ref={notificationSystem =>
                (this.notificationSystem = notificationSystem)
              }
              style={NOTIFICATION_SYSTEM_STYLE}
            />
          </main>
        </GAListener>
      </BrowserRouter>
    );
  }
}

const query = ({ width }) => {
  if (width < 575) {
    return { breakpoint: 'xs' };
  }

  if (576 < width && width < 767) {
    return { breakpoint: 'sm' };
  }

  if (768 < width && width < 991) {
    return { breakpoint: 'md' };
  }

  if (992 < width && width < 1199) {
    return { breakpoint: 'lg' };
  }

  if (width > 1200) {
    return { breakpoint: 'xl' };
  }

  return { breakpoint: 'xs' };
};

export default componentQueries(query)(App);
