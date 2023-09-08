import React from "react";
import { Image, StyleSheet, Text, View } from "react-native";

function App() {
  return (
    <View style={styles.app}>
      <View style={styles.dashboard}>
        <Text style={styles.heading}>Dashboard</Text>
        <Image
          source={require("./Assets/L.png")}
          style={styles.profilePicture}
        />
      </View>

      <View style={styles.mainDiv}>
        <Text style={styles.date}>January</Text>
        <Text style={styles.amount}>R 500</Text>
        <View style={styles.line}></View>
        <Text style={styles.date}>Daily spend target: R16.67</Text>
      </View>

      <View style={styles.dailySpendsDiv}>
        <Text style={styles.blackTextDaily}>DAILY SPENDS</Text>
      </View>

      <View style={styles.spendDiv}>
        <View style={styles.netBankingDiv}>
          <Image
            source={require("./Assets/Icons-01.png")}
            style={styles.bankingIcon}
          />
          <View>
            <text style={styles.blackText}>Net Banking</text>
            <text style={styles.blackText}>R 365.89</text>
          </View>
          <View>
            <Text style={styles.blackText}>Today</Text>
          </View>
        </View>

        <View style={styles.netBankingDiv}>
          <Image
            source={require("./Assets/Icons-02.png")}
            style={styles.bankingIcon}
          />
          <View>
            <text style={styles.blackText}>Food & Drinks</text>
            <text style={styles.blackText}>R 365.89</text>
          </View>
          <View>
            <Text style={styles.blackText}>Today</Text>
          </View>
        </View>

        <View style={styles.netBankingDiv}>
          <Image
            source={require("./Assets/Icons-03.png")}
            style={styles.bankingIcon}
          />
          <View>
            <text style={styles.blackText}>Net Banking</text>
            <text style={styles.blackText}>R 365.89</text>
          </View>
          <View>
            <Text style={styles.blackText}>Today</Text>
          </View>
        </View>
      </View>

      <View style={styles.dailySpendsDiv}>
        <Text style={styles.blackTextDaily}>WISHLIST</Text>
      </View>

      <View style={styles.wishListIconBanner}>
        <Image
          source={require("./Assets/Icons--01.png")}
          style={styles.wishListIcons}
        />
        <Image
          source={require("./Assets/Icons--02.png")}
          style={styles.wishListIcons}
        />
        <Image
          source={require("./Assets/Icons--03.png")}
          style={styles.wishListIcons}
        />
        <Image
          source={require("./Assets/Icons--04.png")}
          style={styles.wishListIcons}
        />
        <Image
          source={require("./Assets/Icons--05.png")}
          style={styles.wishListIcons}
        />
        <Image
          source={require("./Assets/Icons--06.png")}
          style={styles.wishListIcons}
        />
      </View>

      <View style={styles.navBar}>
        <View>
          <Image
            source={require("./Assets/home.png")}
            style={styles.navBarIcon}
          />
        </View>

        <View>
          <Image
            source={require("./Assets/heart.png")}
            style={styles.navBarIcon}
          />
        </View>

        <View>
          <Image
            source={require("./Assets/maps-and-flags.png")}
            style={styles.navBarIcon}
          />
        </View>

        <View>
          <Image
            source={require("./Assets/user.png")}
            style={styles.navBarIcon}
          />
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  app: {
    alignItems: "center",
    width: "100%",
    height: "100%",
    paddingLeft: 20, // Use numeric values for spacing
    paddingRight: 20, // Use numeric values for spacing
    backgroundColor: "#f9f9f9"
  },
  dashboard: {
    display: "flex",
    flexDirection: "row", // Use flexDirection to align items horizontally
    justifyContent: "space-between",
    alignItems: "center",
    paddingLeft: 10, // Use numeric values for spacing
    paddingBottom: 10, // Use numeric values for spacing
    paddingRight: 10, // Use numeric values for spacing
    paddingTop: 20, // Use numeric values for spacing
    width: "100%"
  },
  heading: {
    fontSize: 30, // Use numeric values for font size
    fontWeight: "600",
    fontFamily: "poppins"
  },
  profilePicture: {
    width: 50, // Use numeric values for image dimensions
    height: 50 // Use numeric values for image dimensions
  },
  mainDiv: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-around",
    paddingLeft: 20, // Use numeric values for spacing
    paddingRight: 20, // Use numeric values for spacing
    paddingTop: 10, // Use numeric values for spacing
    paddingBottom: 20, // Use numeric values for spacing
    marginTop: 10, // Use numeric values for spacing
    backgroundColor: "#2c62ff",
    width: "100%",
    height: 180, // Use numeric values for height
    borderRadius: 20,
    elevation: 5,
    shadowColor: "black",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.4,
    shadowRadius: 4
  },
  spendDiv: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    alignItems: "",
    paddingLeft: 0, // Use numeric values for spacing
    paddingRight: 0, // Use numeric values for spacing
    paddingTop: 20, // Use numeric values for spacing
    paddingBottom: 20, // Use numeric values for spacing
    marginTop: 10, // Use numeric values for spacing
    backgroundColor: "white",
    width: "100%",
    height: 180, // Use numeric values for height
    borderRadius: 20,
    elevation: 5,
    shadowColor: "black",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.4,
    shadowRadius: 4
  },
  date: {
    color: "white",
    fontSize: 15, // Use numeric values for font size
    fontFamily: "poppins"
  },
  amount: {
    fontSize: 30, // Use numeric values for font size
    fontWeight: "700",
    color: "white",
    fontFamily: "poppins"
  },
  line: {
    width: "80%", // Use percentage values for width
    height: 5, // Use numeric values for height
    backgroundColor: "white",
    borderRadius: 10 // Use numeric values for borderRadius
  },

  bankingIcon: {
    width: 30,
    height: 30
  },
  navBarIcon: {
    width: 18,
    height: 18
  },
  wishListIcons: {
    paddingLeft: "5px",
    paddingRight: "5px",
    width: 50,
    height: 50
  },
  blackText: {
    color: "black",
    fontFamily: "poppins",
    fontSize: 12
  },
  netBankingDiv: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-evenly",
    alignItems: "center"
  },
  dailySpendsDiv: {
    paddingLeft: "20px",
    marginTop: "20px",
    marginBottom: "10px",
    width: "100%"
  },
  blackTextDaily: {
    fontWeight: "600",
    fontSize: "12px"
  },
  wishListIconBanner: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-evenly",
    width: "100%"
  },
  navBar: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
    backgroundColor: "white",
    width: "120%",
    height: "70px"
  }
});

export default App;
