import React from "react";

class Contact extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      online: props.online
    };
  }
  render() {
    return (
      <div className="Contact">
        <img className="avatar" src={this.props.avatar} alt="#" />
        <div>
          <div className="name">{this.props.name}</div>
          <div
            className="status"
            onClick={event => {
              this.state.online
                ? this.setState({ online: false })
                : this.setState({ online: true });
            }}
          >
            {this.state.online ? (
              <i className="status-online" />
            ) : (
              <i className="status-offline" />
            )}
            {this.state.online ? "Online" : "Offline"}
          </div>
        </div>
      </div>
    );
  }
}

export default Contact;
