import { BIG, BOLD, BLUE, FONT, GREY_1, GREY_BODY, GREY_SUBTITLE, LIGHT, MEDIUM, RED_LIGHT, SMALL, WHITE } from '../styles';
import { flexDirectionRow, alignSelfFlexStart } from 'browser-vendor-prefix';
import { Panel } from 'panels-ui';
import React from 'react';

const Home = props => (
  <Panel style={style.panel} width={props.width}>
    <h1 style={style.async}>Async<span style={style.today}>.today</span></h1>
    <h2 style={style.title}>Totally new way to meet, yet immediately familiar</h2>
    <h3 style={style.subtitle}>So many problems solved with one simple app</h3>
    <ul style={style.problems}>
      <li style={style.problem}>Attending unnecessary meetings</li>
      <li style={style.problem}>Calendar Scheduling</li>
      <li style={style.problem}>Time zone mismatch</li>
      <li style={style.problem}>Missing meetings</li>
      <li style={style.problem}>Making meeting notes</li>
    </ul>
    <h3 style={style.deadline}>17 days left to beta release!</h3>
    <div style={style.updates}>For updates <a style={style.follow} href="https://twitter.com/asynctoday">Follow @asynctoday</a>on Twitter</div>
    <img style={style.wave} src='//async.today/wave-red.svg' alt='wave logo'/>
    <h3 style={style.madeon}>Engineered on CouchDB, Panels, Pouchdb, React and Redux</h3>
  </Panel>
);

export default Home;

const style = {
  async: {
    color: RED_LIGHT,
    ...flexDirectionRow,
    fontSize: BIG,
    fontWeight: LIGHT,
    letterSpacing: -1,
    marginTop: 60,
    marginLeft: 30
  },
  deadline: {
    color: RED_LIGHT,
    fontSize: MEDIUM,
    fontWeight: BOLD,
    marginLeft: 30,
    marginTop: 30,
    textDecoration: 'none'
  },
  madeon: {
    color: GREY_SUBTITLE,
    fontSize: SMALL,
    fontWeight: LIGHT,
    marginTop: 10,
    marginLeft: 30
  },
  panel: {
    backgroundColor: WHITE,
    fontFamily: FONT
  },
  problem: {
    color: GREY_BODY
  },
  problems: {
    color: RED_LIGHT,
    fontWeight: BOLD,
    lineHeight: '1.6',
    listStyle: 'none',
    marginLeft: -10,
    marginBottom: 0,
    marginTop: 0,
    textDecoration: 'line-through'
  },
  title: {
    color: GREY_BODY,
    fontSize: 33,
    lineHeight: '1.3',
    marginBottom: 20,
    marginLeft: 30,
    marginRight: 30,
    marginTop: 25
  },
  today: {
    color: GREY_1,
    fontWeight: LIGHT,
  },
  follow: {
    color: BLUE,
    fontSize: SMALL,
    fontWeight: BOLD,
    marginLeft: 5,
    marginRight: 5,
    textDecoration: 'none',
    textTransform: 'uppercase'
  },
  subtitle: {
    color: GREY_SUBTITLE,
    fontSize: MEDIUM,
    fontWeight: LIGHT,
    marginTop: 30,
    marginLeft: 30
  },
  updates: {
    color: GREY_SUBTITLE,
    fontSize: SMALL,
    fontWeight: BOLD,
    marginLeft: 30,
    ...flexDirectionRow,
    textTransform: 'uppercase'
  },
  wave: {
    ...alignSelfFlexStart,
    marginLeft: 30,
    marginTop: 60
  }
}
