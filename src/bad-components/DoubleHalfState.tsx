import { useState } from "react";

export const useDoubleHalfState = () => {
    const [dhValue, setDhValue] = useState<number>(0);
    return {dhValue, setDhValue};
}
