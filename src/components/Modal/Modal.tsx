
import {FC, ReactNode, useEffect, useRef} from 'react';
import {createPortal} from 'react-dom';

type modalProps = {
	children: ReactNode;
    onClose: () => void;
    open: boolean;
}

const Modal: FC<modalProps> = ({open, onClose, children}) => {
	const dialogRef = useRef<HTMLDialogElement | null>(null);

    useEffect(() => {
        if(open){
	        document.body.classList.add("overflow-hidden");
            dialogRef.current?.showModal();
        }
		else {
	        document.body.classList.remove("overflow-hidden");
	       dialogRef.current?.close();
        }

		return () => {
			document.body.classList.remove("overflow-hidden");
		}
    }, [open])


    const rootModal = document.getElementById('rootModal') as HTMLElement;
	return createPortal(
		<dialog className='modal' ref={dialogRef} onClose={onClose}>{children}</dialog>,
		rootModal
	);

};

export default Modal;
