import React, { Component } from "react";
import { View, Text, TouchableOpacity, StyleSheet, Dimensions } from "react-native"

const {width, height} = Dimensions.get("window");


export default class ToDo extends Component {
   state = {
       isEditing: false,
       isCompleted: false
   }; 
    render() {
        const {isCompleted} = this.state;
        return (
            <View style= {styles.container}>
                <TouchableOpacity onPress={this._togglecomplete}>
                    {/* 써클내 스타일 변경 조건식 */}
                    <View style={[
                    styles.circle, 
                    isCompleted ? styles.completedCircle : styles.uncompletedCircle]} />
                </TouchableOpacity>
                <Text style={styles.text}>Hello I'm To Do</Text>
            </View>
        );
    }
    _togglecomplete = () => {
        this.setState(prevState => {
            return ({
                isCompleted : !prevState.isCompleted
            });
        });
    }
}

const styles = StyleSheet.create({
    container : {
        width: width - 50,
        borderBottomColor: "#bbb",
        borderBottomWidth: StyleSheet.hairlineWidth,
        flexDirection: "row",
        alignItems : "center",
 
    },
    circle:{
        borderColor: "red",
        width: 30,
        height : 30,
        borderRadius: 15,
        //backgroundColor :"red",
        borderWidth: 3,
        marginRight : 20
    },
    completedCircle:{
        borderColor: "#bbb"
    },
    uncompletedCircle: {
        borderColor: "#F23657"
    },
    text:{
        fontWeight: "600",
        fontSize:20,
        marginVertical : 20
    }



})
 