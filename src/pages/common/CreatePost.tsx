import {FC} from "react";
import Input from "../../components/Input/Input.tsx";
import TextArea from "../../components/TextArea/TextArea.tsx";


const CreatePost: FC = () => {
    return (
        <form>
            <Input label="Заголовок" id="title" name="title" type="text" required/>
            <TextArea label="Опис" id="description" name="description" rows={5} required/>
            <button type="submit">Створити пост</button>
        </form>
    );
};

export default CreatePost;