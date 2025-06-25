import {FC, useState} from 'react';
import { Outlet } from "react-router-dom";
import { Header } from "../components";
import Footer from "../components/Footer/Footer";
import ButtonFloatingAction from "../components/ButtonFloatingAction/ButtonFloatingAction ";
import Modal from '../components/Modal/Modal.tsx';
import FeedBackModal from '../components/Modal/ContentModal/FeedBackModal.tsx';

const Layout: FC = () => {
    const [modalIsOpen, setModalIsOpen] = useState<boolean>(false);
    
    const handleOpenModal = () => {
        setModalIsOpen(true)
    }
    const handleCloseModal = () => {
        setModalIsOpen(false)
    }
    console.log('layout', modalIsOpen);
  return (
    <>
      <Header />
      <div className="mx-auto max-w-[1440px] px-2 sm:px-4 lg:px-8 py-4">
        <Outlet />
      </div>
      <ButtonFloatingAction handleOpenModal={handleOpenModal} />
      <Footer />
        <Modal onClose={handleCloseModal} open={modalIsOpen}>
            <FeedBackModal/>
        </Modal>
      </>
  );
};

export default Layout;
