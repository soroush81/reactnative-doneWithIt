import React from "react";
import {
  StyleSheet,
  View,
  Image,
  TouchableWithoutFeedback,
} from "react-native";

import colors from "../config/colors";
import AppText from "../components/AppText";

const Card = ({ title, subTitle, image, onPress }) => {
  return (
    <TouchableWithoutFeedback onPress={onPress}>
      <View style={styles.card}>
        <Image style={styles.image} source={image} />
        <View style={styles.detailsContainer}>
          <AppText style={styles.title} numberOfLines={1}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium
            deserunt voluptas debitis exercitationem accusantium sed velit
            itaque accusamus perspiciatis iste eveniet excepturi quaerat numquam
            architecto ab iusto, voluptates doloribus dignissimos? Omnis harum
            repudiandae ipsam nam, id nulla eveniet cum voluptate similique est,
            dolores explicabo quo soluta unde veniam! In eius distinctio
            excepturi earum quasi maxime voluptatum culpa repudiandae. Quia,
            minus?{title}
          </AppText>
          <AppText style={styles.subTitle} numberOfLines={1}>
            {subTitle}
          </AppText>
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
};

const styles = StyleSheet.create({
  card: {
    borderRadius: 15,
    backgroundColor: colors.white,
    marginBottom: 20,
    overflow: "hidden",
  },
  detailsContainer: {
    padding: 20,
  },
  image: {
    width: "100%",
    height: 200,
  },
  subTitle: {
    color: colors.secondary,
    fontWeight: "bold",
  },
  title: {
    marginBottom: 7,
  },
});

export default Card;
