import React from "react";
import { StyleSheet, Text, View, Button, TouchableOpacity } from "react-native";
import Icon from "react-native-vector-icons/AntDesign";
import axios from "axios";

import Carousel from "react-native-snap-carousel";

export default class ListScreen extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      list: []
    }
  }

  componentDidMount(){
    axios.get(`http://127.0.0.1:8000/list`)
      .then(res => {
        const list = res.data;
        this.setState({ list });

      })
  }

  _renderItem = ({item, index}) => {
    return (
        <View style={styles.slide}>
            <View style={styles.silderContainer}>
            <Text style={styles.carouselIdentifiant}>{ item.identifiant }</Text>
            <Text style={styles.carouselPrenom}>{ item.prenom }</Text>
            <Text style={styles.carouselDate}>{ item.createAt }</Text>
            </View>
        </View>
    );
}

  render() {
    const { navigate } = this.props.navigation;
    return (
      <View>
        <View style={styles.listing}>
          <Icon
            style={styles.arrowLeft}
            name="left"
            size={23}
            onPress={() => this.props.navigation.goBack()}
          />

          <Text style={styles.title}>Teach'rs favoris</Text>
        </View>

        <View>
          <Carousel
            ref={(c) => {
              this._carousel = c;
            }}
            data={this.state.list}
            renderItem={this._renderItem}
            sliderWidth={400}
            itemWidth={250}
          />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  listing: {
    height: "50%",
    backgroundColor: "#0271CB",
  },
  arrowLeft: {
    marginTop: "15%",
    color: "white",
    marginLeft: "6%",
  },
  title: {
    color: "white",
    marginTop: "5%",
    fontWeight: "bold",
    marginLeft: "7%",
  },
  slide:{
    width: "70%"
  },
  carouselIdentifiant:{
    marginLeft: "5%",
    marginTop: "5%",
    fontSize: 20,
    fontWeight: "bold"
  },
  carouselPrenom:{
    marginLeft: "5%",
    marginTop: "3%",
    fontSize: 15,
    marginBottom: "3%"
  },
  carouselDate:{
    marginLeft: "5%",
    marginTop: "5%",
    fontSize: 15,
  },
  silderContainer:{
    marginTop: "30%",
    borderWidth: 1,
    borderTopLeftRadius: 1,
    borderTopRightRadius: 1,
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
    shadowColor: "#000",
    borderColor: "white"
  }

});
