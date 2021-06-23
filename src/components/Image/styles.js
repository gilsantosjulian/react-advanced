import styled from 'styled-components'

import { turn } from '../../styles/animation'

export const Img = styled.img`
  margin: 0 auto;
  /* height: 75px; */
  width: 150px;
  ${turn({ time: '3s' })}
`
