//*-core
import React from 'react'
import styled from 'styled-components'

const mixin = {
  transition: `-webkit-transition: all 0.2s;transition: all 0.2s;`,
}
export const Card = (props) => {
  return (
    <div>11</div>
  )
}
/**
 * @title Image
 * @description 이미지
 * @attribute flex:가로100이미지, circle:원형이미지 , rounded:라운드형이미지
 */
const ImageStyled = styled.img`
  &.circle {border-radius: 50%;
    overflow: hidden;
  }

  &.rounded {
    border-radius: 20px;
  }
`
export const Image = (props) => {
  const src = props.src ? props.src : 'https://source.unsplash.com/200x200'
  const { circle } = props, { rounded } = props, { flex } = props
  let classNames = ''
  classNames += `${circle ? 'circle' : ''}`
  classNames += `${rounded ? 'rounded' : ''}`
  classNames += `${flex ? 'flex' : ''}`

  return (
    <ImageStyled className={classNames} src={src} alt={props.alt}>{props.children}</ImageStyled>
  )
}

/**
 * @title Background
 * @attribute size: contain,cover(default)
 */
export const Background = (props) => {
  const src = props.src ? props.src : 'https://source.unsplash.com/1600x1200'
  const size = props.contain ? 'contain' : 'cover'
  const minHeight = props.minHeight ? props.minHeight : '300px'
  const styled = {
    width: '100%', height: '100%', minHeight: minHeight,
    background: `#ffffff url(${src}) no-repeat center center / ${size}`,
  }
  return (
    <div style={styled}>{props.children}</div>
  )
}

/**
 * @title Button
 * @description 버튼실행
 */
const ButtonStyled = styled.button`
${mixin.transition}
display:inline-block;cursor: pointer;
margin: ${props => props.theme.margin || '0'};
border: ${props => props.theme.border || '0px'};
padding: ${props => props.theme.padding || '10px 20px'};
color: ${props => props.theme.color || '#FFF'};
background: ${props => props.theme.background || '#ff9333'};

&:hover {
    color: #fff;
    background: #cc6419;
  }
`

export const Button = (props) => {
  return (
    <ButtonStyled theme={props.theme}
                  onClick={props.onClick}>{(props.text) ? props.text : ''}{props.children}</ButtonStyled>
  )
}
