import React from 'react';
import classNames from 'classnames';

const DividerShadow = (props) => {
    const {className} = props;
    return (
        <div className={classNames(className, "divider-shadow")}>
            <img 
                className="sm:hidden"
                src={`${process.env.PUBLIC_URL + "/images/DividerShadowSm.png"}`} alt="divider shadow" 
            />
            <img 
                className="hidden sm:block"
                src={`${process.env.PUBLIC_URL + "/images/DividerShadowDark.png"}`} alt="divider shadow" 
            />
        </div>
    );
};

export default DividerShadow;