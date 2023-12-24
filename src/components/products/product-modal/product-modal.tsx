import Modal from "react-bootstrap/Modal"
import { Button } from "../../../shared/button/button"
import { Image } from "react-bootstrap"

type ProductModalProps = {
  show: boolean
  handleClose: VoidFunction
  image: string
  heading: string
}

export const ProductModal: React.FC<ProductModalProps> = ({
  handleClose,
  show,
  image,
  heading,
}) => {
  return (
    <div onClick={(e) => e.stopPropagation()}>
      <Modal show={show} onHide={handleClose} className="product-modal" centered>
        <Modal.Header closeButton className="product-modal__header">
          <Modal.Title>{heading}</Modal.Title>
        </Modal.Header>
        <Modal.Body className="product-modal__body">
          <Image src={image} className="product-modal__image" />
        </Modal.Body>
        <Modal.Footer className="product-modal__footer">
          <Button onClick={handleClose}>Close</Button>
        </Modal.Footer>
      </Modal>
    </div>
  )
}
