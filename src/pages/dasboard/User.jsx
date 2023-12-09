import Input from "../../components/Input";
import { INPUTS_USER } from "../../components/const/node.element.user";
import Button from "../../components/Button";

export function User({userData}) {
    return (
        <form onSubmit={() => {}} className="text-white align-item-center">
            <Input {...INPUTS_USER.name} />
            <Input {...INPUTS_USER.lastName} />
            <Input {...INPUTS_USER.email} />
            <Input {...INPUTS_USER.phone} />
            <Button
                type={"submit"}
                text={"Guardar"}
                style={"btn btn-neutral w-80 mb-5 "}
            />
        </form>
    );
}
