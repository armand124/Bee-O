import React from 'react';
import {Animated, TextInput, View, Easing} from 'react-native';

export default class Animation extends React.Component {

    state = {verticalVal: new Animated.Value(1)}

    componentDidMount() {
        Animated.timing(this.state.verticalVal, {toValue: 25, duration: 1000, easing: Easing.inOut(Easing.quad)}).start();
        this.state.verticalVal.addListener(({value}) => {
            if (value == 25) {
                Animated.timing(this.state.verticalVal, {toValue: 0, duration: 1000, easing: Easing.inOut(Easing.quad)}).start();
            }
            else if (value == 0) {
                Animated.timing(this.state.verticalVal, {toValue: 25, duration: 1000, easing: Easing.inOut(Easing.quad)}).start();
            };
        })
    };

    render() {
        return(
            <Animated.View style = {{  backgroundColor: "green", height: 100, width: 100, transform: [{translateY: this.state.verticalVal}]}}></Animated.View>
        );
    };
};