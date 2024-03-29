import React from 'react';
import Modal from '../../components/UI/Modal/Modal';

const withErrorHandler = (WrappedComponent, axios) => {
  return class extends React.Component {

    state = {
      error: null
    };

    componentDidMount() {
      axios.interceptors.request.use(req => {
        this.setState({error: null});
        return req;
      });
      axios.interceptors.response.use(res => res, error => {
        this.setState({error: error});
        return Promise.reject(error);
      })
    }

    handleErrorConfirmed = () => {
      this.setState({error: null});
    };

    render(props) {
      return (
        <React.Fragment>
          <Modal show={this.state.error !== null} onClose={this.handleErrorConfirmed}>
            <p>{this.state.error != null ? this.state.error.message : null}</p>
          </Modal>
          <WrappedComponent {...props}/>
        </React.Fragment>
      )
    }
  }
};

export default withErrorHandler;
