import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { addNavigationHelpers, TabNavigator } from 'react-navigation';
import Account from './../components/Account';
import Bookmark from './../components/Bookmark';
import Search from './../components/Search';

const tabScenes = {
  Recherche: { screen: Search },
  Favoris: { screen: Bookmark },
  Compte: { screen: Account },
};

const tabOptions = {
  initialRouteName: 'Recherche',
  swipeEnabled: true,
  animationEnabled: true,
  tabBarOptions: {
    activeTintColor: '#fff',
    activeBackgroundColor: '#1a1a1a',
    labelStyle: {
      fontSize: 16,
    },
  },
};

export const RootNavigator = TabNavigator(tabScenes, tabOptions);

const TabRouter = ({ dispatch, nav }) => (
  <RootNavigator
  navigation={addNavigationHelpers({
    dispatch,
    state: nav
  })} />
  );

TabRouter.propTypes = {
  dispatch: PropTypes.func.isRequired,
  nav: PropTypes.object.isRequired,
};

export default connect(state => ({
  nav: state.nav
}))(TabRouter);
