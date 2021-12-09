import React from "react";
import {   TouchableOpacity } from "react-native";
import TmobText from '../TmobText'
import PropTypes from 'prop-types'

const TmobButton = ({
    title,
    onPress,
    style,
    disabled,
    onFocus,
    titleStyle,
    ...props
}) => {
    return (
        <TouchableOpacity
            onPress={onPress}
            style={style}
            disabled={disabled}
            onFocus={onFocus}
            {...props}
        >
            <TmobText style={titleStyle} fontSize={2}>
                {title}
            </TmobText>
        </TouchableOpacity>
    );
};

export default TmobButton;
 
TmobButton.propTypes = {
    /**
     *style of the TouchableOpacity "Button"
     */
     style: PropTypes.object, 

     /**
     * Title that took place inside the Button
     */
     title: PropTypes.string,

    /**
     * style of the Text inside the Button
     */
     titleStyle: PropTypes.object, 

    /**
     * Represent the func when onPress is called
     */
     onPress: PropTypes.func, 

    /**
     *Represent if the button should be disabled or no
     */
     disabled: PropTypes.bool, 

    /**
     * Represent the func when onFocus is called
    */
     onFocus: PropTypes.func, 
 

}
