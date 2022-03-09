import React from 'react';
import renderer from 'react-test-renderer';
import { Provider } from 'react-redux';
import { BrowserRouter as Router } from 'react-router-dom';
import store from '../redux/configureStore';
import Missions from '../components/missions/Missions';
import Rocket from '../components/rocket/Rocket';
import Rockets from '../components/rockets/Rockets';
import Header from '../components/header/Header';
import Dragons from '../components/dragons/Dragons';

describe('Test header component', () => {
  it('header renders correctly', () => {
    const tree = renderer
      .create(
        <Router>
          <Header />
        </Router>,
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});

it('Test Missions renders correctly', () => {
  const tree = renderer.create(
    <Provider store={store}>
      <Missions />
    </Provider>,
  );
  expect(tree).toMatchSnapshot();
});

it('Test Rocket renders correctly', () => {
  const item = {
    description: 'description',
    image: 'https://test.com',
    name: 'Rocket',
    id: 1,
    reserved: false,
  };
  const tree = renderer.create(
    <Provider store={store}>
      <Rocket
        description={item.description}
        image={item.image}
        rocketName={item.name}
        id={item.id}
        reserved={item.reserved}
      />
    </Provider>,
  );
  expect(tree).toMatchSnapshot();
});

it('Test Rockets renders correctly', () => {
  const tree = renderer.create(
    <Provider store={store}>
      <Rockets />
    </Provider>,
  );
  expect(tree).toMatchSnapshot();
});

it('Test Dragons renders correctly', () => {
  const tree = renderer.create(
    <Provider store={store}>
      <Dragons />
    </Provider>,
  );
  expect(tree).toMatchSnapshot();
});
