import React from "react"
import PropTypes from "prop-types"
import styled from "styled-components"

import Icon from "../../images/Icon.svg"
import colors from "../../styles/colors"

const Container = styled.div`
  max-width: 250px;
  width: 100%;
  max-height: 300px;
  height: 100%;
  margin: 1.5em 0;
`

const Content = styled.div`
  padding: 1em;

  > span {
    font-size: 26px;
    font-weight: 600;
    color: ${colors.gray};
  }

  > ul {
    list-style: none;
    margin: 1em auto;
    color: ${colors.lightGray};
  }
`

function ServiceCard({ name, topics, icon }) {
  return (
    <Container>
      <Content>
        <div>
          <img src={Icon} alt="service icon" />
        </div>

        <span>{name}</span>

        <ul>{topics && topics.map(topic => <li>{topic}</li>)}</ul>
      </Content>
    </Container>
  )
}

ServiceCard.propTypes = {
  name: PropTypes.string.isRequired,
  topics: PropTypes.arrayOf(PropTypes.string),
}

export default ServiceCard
