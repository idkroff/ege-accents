import {
    createPath,
    Link as RRDLink,
    useLocation,
    useResolvedPath,
} from 'react-router-dom';
import React from 'react';
import { useLinkClickHandler } from 'react-router-dom';
import { LoaderContext } from '../service/LoaderContext';
import { useContext } from 'react';

const Link = React.forwardRef(
({ replace, state, target, to, children, style, className, ...rest }, ref) => {
    const [, startTransition] = React.useTransition();
    let location = useLocation();
    let internalOnClick = useLinkClickHandler(to, { replace, state, target });
    let path = useResolvedPath(to); 

    const context = useContext(LoaderContext);

    function handleClick(e) {
        e.preventDefault();
        if (createPath(location) !== createPath(path)) {
            context.showLoader();
        }
        startTransition(() => internalOnClick(e));
    }

    return (
        <RRDLink
            onClick={handleClick}
            ref={ref}
            to={to}
            replace={replace}
            state={state}
            target={target}
            {...rest}
            className={className || ''}
            style={style}
        >
            {children}
        </RRDLink>
    );
}
);

export default Link;