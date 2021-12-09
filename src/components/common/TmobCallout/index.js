import React from 'react';
import PropTypes from 'prop-types';
import { StyleSheet, View } from 'react-native';

const propTypes = { children: PropTypes.node.isRequired, style: PropTypes.object, };


class TmobCallout extends React.Component {
    render() {
        return (
            <View style={[styles.container, this.props.style]}>
                <View style={styles.bubble}>
                    <View style={styles.amount}>{this.props.children}

                    </View>
                </View>
                
            </View>
        );

    }
}

TmobCallout.propTypes = propTypes;
const styles = StyleSheet.create({
    container: { flexDirection: 'column', alignSelf: 'flex-start',padding:0 },
    bubble: {
        width: 140, flexDirection: 'row', alignSelf: 'flex-start',
        backgroundColor: "#fff",
        paddingHorizontal: 20, paddingVertical: 12,
        borderRadius: 6, borderColor: '#007a87', borderWidth: 0.5,
    }, amount: { flex: 1, }, arrow: {
        backgroundColor: 'transparent',
        borderWidth: 16, borderColor: 'transparent', borderTopColor: "#fff",
        alignSelf: 'center', marginTop: -32,
    }, arrowBorder: {
        backgroundColor: 'transparent', borderWidth: 16,
        borderColor: 'transparent', borderTopColor:"#fff", alignSelf: 'center', marginTop: -0.5,
    },
});

export default TmobCallout;