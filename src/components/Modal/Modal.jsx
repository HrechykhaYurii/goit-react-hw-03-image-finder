import { createPortal } from "react-dom";
import { Component } from "react";
import PropTypes from 'prop-types';
import { Overlay, ModalViewer, ModalImg } from './Modal.styled';

const modalRoot = document.querySelector('#modal-root');

export class Modal extends Component {
  componentDidMount() {
    window.addEventListener('keydown', this.closeByEsc);
  }

  componentWillUnmount() {
    window.removeEventListener('keydown', this.closeByEsc);
  }

  closeByEsc = e => {
    if (e.code !== 'Escape') {
      return;
    }
    this.props.closeModal();
  };

  render() {
    const { modalImg,tags, closeModal } = this.props;
   
    return createPortal(<Overlay onClick={closeModal}>
        <ModalViewer>
          <ModalImg src={modalImg} alt={tags} />
        </ModalViewer>
      </Overlay>,modalRoot)
  }
}

Modal.propTypes = {
  modalImg: PropTypes.string.isRequired,
  closeModal: PropTypes.func.isRequired,
  tags: PropTypes.string.isRequired,
};