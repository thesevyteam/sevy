import Modal from 'react-modal';

Modal.setAppElement('body');

const AppModal = ({ children, isOpen, closeModal, closing }) => {
  const customStyles = {
    overlay: {
      backgroundColor: 'rgba(0, 0, 0, 0.6)',
      zIndex: 45,
    },
    content: {
      top: '50%',
      left: '50%',
      right: 'auto',
      bottom: 'auto',
      marginRight: '-50%',
      transform: 'translate(-50%, -50%)',
      border: 'none',
      boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)',
      borderRadius: '0.375rem',
      animation: closing ? 'slideUp 0.3s' : 'slideDown 0.3s',
    },
  };

  return (
    <Modal isOpen={isOpen} onRequestClose={closeModal} style={customStyles}>
      {children}
    </Modal>
  );
};

export default AppModal;
