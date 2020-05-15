import React from 'react';
import styled from 'styled-components';
import { mq } from '../../config/mediaqueries';

const SectionContainer = styled.section`
  margin-bottom: 10px;
  height: 300px;

  ${mq.tabletPortrait_up`
    height: 500px;
    width: 500px;
    // margin-bottom: 150px;
  `}
  ${mq.tabletLandscape_up`
    width: 900px;
  `}
  ${mq.desktop_up`
    width: 1000px;
  `}
  ${mq.desktopLarge_up`
    width: 1200px;
  `};
`;

const Heading = styled.h1`
  font-family: sans-serif;
  font-size: 60px;
  line-height: 30px;
  margin: 0;
  font-weight: 800;
  position: relative;
  z-index: 2;
  color: #fefbf5;
  -webkit-text-fill-color: white; /* Will override color (regardless of order) */
  -webkit-text-stroke-width: 2px;
  -webkit-text-stroke-color: black;

  ${mq.tabletPortrait_up`
      -webkit-text-stroke-width: 4px;
  `}

  ${mq.tabletLandscape_up`
    font-size: 160px;
    line-height: 80px;
  `}
`;

const SectionSubContainer = styled.div`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  border-radius: 15px 15px 0 0;
  height: 120%;

  ${// eslint-disable-next-line no-confusing-arrow
  (props) =>
    // eslint-disable-next-line implicit-arrow-linebreak
    props.backgroundColor
      ? `background-color: ${props.backgroundColor}`
      : 'background-color: white'};
`;

class Section extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      sectionIsOpen: false,
    };
  }

  render() {
    const { heading, backgroundColor, children, index } = this.props;
    const { sectionIsOpen } = this.state;

    return (
      <SectionContainer>
        <Heading>{heading}</Heading>
        <SectionSubContainer backgroundColor={backgroundColor}>
          {children}
        </SectionSubContainer>
      </SectionContainer>
    );
  }
}

export default Section;
