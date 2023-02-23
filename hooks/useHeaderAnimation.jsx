import { useState, useEffect } from 'react'

export const useHeaderAnimation = (element) => {
    const [isVisible, setState] = useState(false);

    useEffect(() => {
        console.log(element)
    }, []);

    return isVisible;
};