import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { setIsElementsShowed } from '../store/actions/fullSizeActions';

export default function ShowElementsOnFullSize({ elemID }) {
    const dispatch = useDispatch();
    useEffect(() => {
        const elem = document.getElementById(elemID);
        if (elem) {
            elem.addEventListener(
                'mouseenter',
                () => dispatch(setIsElementsShowed(true)),
                false
            );
            elem.addEventListener(
                'mouseleave',
                () => dispatch(setIsElementsShowed(false)),
                false
            );
        }

        return () => {
            elem.removeEventListener(
                'mouseenter',
                () => dispatch(setIsElementsShowed(true)),
                false
            );
            elem.removeEventListener(
                'mouseleave',
                () => dispatch(setIsElementsShowed(false)),
                false
            );
        };
    });
    return null;
}
