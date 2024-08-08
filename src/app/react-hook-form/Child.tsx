import { useFormContext } from "react-hook-form";

export const Child = () => {

    const { getValues } = useFormContext();

    const displayName = getValues('displayName');

    return(
        <div>
            <p>{displayName}</p>
        </div>
    )
}
