import React from 'react'
import { Button, Modal } from "flowbite-react";
import { HiOutlineExclamationCircle } from "react-icons/hi";

const ModalDelete = ({handleClick, setOpenModal, openModal}) => {
  return (
      <Modal show={openModal} size="md" onClose={() => setOpenModal(false)} popup>
        <Modal.Header />
        <Modal.Body>
          <div className="text-center">
            <HiOutlineExclamationCircle className="mx-auto mb-4 h-14 w-14 text-gray-400" />
            <h3 className="mb-5 text-lg font-normal text-gray-500">
              Apakah kamu yakin akan menghapus katalog ini?
            </h3>
            <div className="flex justify-center gap-4">
              <Button color="failure" onClick={handleClick}>
                Ya, Saya yakin 
              </Button>
              <Button color="gray" onClick={() => setOpenModal("")}>
                Tidak, Kembali
              </Button>
            </div>
          </div>
        </Modal.Body>
      </Modal>
  )
}

export default ModalDelete