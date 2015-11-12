import { BLACK, FONT, GREY_1, LIGHT, SMALL, WHITE } from '../styles';
import { Panel } from 'panels-ui';
import React from 'react';

const Home = props => (
  <Panel style={style.panel} width={props.width}>
    <h1 style={style.title}>Async</h1>
  </Panel>
);

export default Home;

const style = {
  explore: {
    borderBottom: `1px solid ${GREY_1}`,
    color: WHITE,
    fontWeight: LIGHT,
    fontSize: SMALL,
    marginLeft: 60,
    marginTop: 25,
    paddingBottom: 5
  },
  panel: {
    backgroundColor: BLACK,
    fontFamily: FONT
  },
  title: {
    color: WHITE
  }
}
