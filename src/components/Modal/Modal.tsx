import {FC, ReactNode, useEffect, useRef} from 'react';
import {createPortal} from 'react-dom';

interface modalProps {
	children: ReactNode;
    onClose: () => void;
    open: boolean;
}

console.log(open);
const Modal: FC<modalProps> = ({open, onClose, children}) => {
	const dialogRef = useRef<HTMLDialogElement | null>(null);
    
    useEffect(() => {
        if(open){
            return  dialogRef.current?.showModal();
        }
        return  dialogRef.current?.close();
    }, [open])
    
    
    const rootModal = document.getElementById('rootModal') as HTMLElement;
	return createPortal(
		<dialog ref={dialogRef} onClose={onClose} >{ open ? children : null}</dialog>,
		rootModal
	);
	
};

export default Modal;
