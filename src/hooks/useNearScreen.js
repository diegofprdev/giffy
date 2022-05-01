import { useState, useRef, useEffect } from 'react';

export const useNearScreen = ({ distance = '100px', externalRef, once = true } = {}) => {

    const [show, setShow] = useState(false);
    const elementRef = useRef();

    useEffect(() => {

        let observer;
        const elementToObserve = externalRef ? externalRef.current : elementRef.current;

        const onChange = (entries, observer) => {

            const elementTrends = entries[0];

            if (elementTrends.isIntersecting) {
                setShow(true);
                once && observer.disconnect()
            }
            else {
                !once && setShow(false);
            }

        }

        Promise.resolve(
            typeof IntersectionObserver !== 'undefined'
            ? 
            IntersectionObserver
            :
            import ('intersection-observer')
        )
        .then(() => {

            observer = new IntersectionObserver(onChange, {
                rootMargin: distance
            });
    
            elementToObserve && observer.observe(elementToObserve);

        })

        return () => observer && observer.disconnect();

    });

    return { show, elementRef }

}
