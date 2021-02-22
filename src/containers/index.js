import React from "react";
import { StyleSheet, Text, View, Button, TouchableOpacity } from "react-native";

export default class IndexScreen extends React.Component {
    render() {
     const {navigate } = this.props.navigation;
    return (
      <View style={styles.container}>
        <View style={styles.header}>
          <Text style={styles.logo}>TEACH'R</Text>
        </View>
        <View style={styles.buton}>
          <TouchableOpacity onPress={() =>  navigate("List")} style={styles.touchableOpacity}>
            <Text style={styles.favoris}>Teach'rs favoris</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    flex: 0.27,
    backgroundColor: "#0271CB",
  },
  logo: {
    marginTop: "20%",
    fontSize: 20,
    color: "white",
    fontWeight: "bold",
    alignSelf: "center",
  },
  touchableOpacity:{
    marginBottom: "3%",
    backgroundColor: "#0271CB",
    elevation: 8,
    borderRadius: 10,
    paddingVertical: 10,
    paddingHorizontal: 12,
  },
  favoris:{
      color: "white",
      alignSelf: "center",
    fontWeight: "bold"
  },
  
    buton:{
        marginTop: "20%",
        width: "80%",
        alignSelf: "center",
    }
});
