import {forwardRef} from "react";
import {IoCloseOutline} from "react-icons/io5";
import ContactForm from "../../ContactForm/ContactForm.tsx";
import ContactInfo from "../../ContactInfo/ContactInfo.tsx";

interface FeedBackModalProps {
    handleCloseModal: () => void;
}

const FeedBackModal = forwardRef<HTMLFormElement, FeedBackModalProps>(
    ({handleCloseModal}, ref) => {
        return (
            <section className="text-gray-900 relative">
                <button
                    onClick={handleCloseModal}
                    type="button"
                    className="absolute top-4 right-4 rounded-md p-2 text-primary hover:text-primary/30 outline-none ring-2 ring-inset ring-primary hover:ring-primary/30 m-4"
                >
                    <IoCloseOutline aria-hidden="true" className="h-6 w-6"/>
                </button>
                <div className="container px-5 py-24 mx-auto flex sm:flex-nowrap flex-wrap">
                    <ContactInfo/>
                    <div className="lg:w-1/3 md:w-1/2 w-full md:py-8 mt-8 md:mt-0">
                        <ContactForm ref={ref} showLoading={false}/>
                    </div>
                </div>
            </section>
        );
    }
);

export default FeedBackModal;
