import React, { Component } from "react";
import PropTypes from "prop-types";

import { connect } from "react-redux";

//This was the previous card approach i included in the project

class PhotoItem extends Component {
  constructor() {
    super();
    this.state = {
      show: false,
    };
    this.onShowClick = this.onShowClick.bind(this);
  }
  onShowClick(idx) {
    this.props.onImageClick(idx);
  }

  // onBackClick = (e) => {
  //   this.setState({ show: false });
  // };
  render() {
    const { photo } = this.props;

    const url = `https://live.staticflickr.com/${photo.server}/${photo.id}_${photo.secret}_b.jpg`;

    return (
      <div className="card col-md-4 imagecard my-2 " style={{ width: "95%" }}>
        <img
          src={url}
          alt="Image"
          className="image card-img-top"
          style={{ width: "100%" }}
          onClick={() => this.onShowClick(photo)}
        />
        <div className="card-body">
          <p className="card-text">{photo.title}</p>
        </div>
      </div>
    );
  }
}

PhotoItem.propTypes = {
  photo: PropTypes.object.isRequired,
};

export default connect(null, {})(PhotoItem);
