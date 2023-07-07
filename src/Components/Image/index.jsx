import React, { Component } from 'react';

export default class Image extends Component {
  render() {
    const { ImageSrc } = this.props;
    return <img src={ImageSrc} alt='img' />;
  }
}
