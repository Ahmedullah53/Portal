import React from 'react';
import {
  Text,
  View,
  Image,
  Button,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Alert,
  Dimensions,
  Platform
} from 'react-native';
import ButtonFull from '../components/ButtonFull';
import ButtonHalf from '../components/ButtonHalf';

export default class Home extends React.Component {
  static navigationOptions = {
    title: 'Home',
    headerStyle: {
      color: (170, 170, 170)
    },
    headerTintColor: '#00000',
    headerTitleStyle: {
      flex: 1,
      justifyContent: 'center',
      textAlign: 'center',
      fontWeight: 'bold'
    },
    headerLeft: () => (
      <Button
        title="|||"
        onPress={() => Alert.alert('Alert', 'This is an alert')}
      />
    ),
    headerRight: () => <Text> </Text>
  };

  render() {
    return (
      <SafeAreaView style={styles.container}>
        <ScrollView>
          <View>
            <Image
              style={styles.image}
              source={require('../assets/gosl.png')}
            />
          </View>
          <View>
            <Text style={styles.heading}>Complaints</Text>
            <View style={[styles.gapVertical]}>
              <ButtonFull
                bgcolor="#0080ff"
                fgcolor="white"
                count={count.totalComplaints}
                text="TOTAL COMPLAINTS"
                onPress={() => this.props.navigation.push('TotalComplaints')}
              />
            </View>
            <View style={styles.span}>
              <View style={styles.gapHorizontal}>
                <ButtonHalf
                  bgcolor="#ff2519"
                  fgcolor="white"
                  count={count.openComplaints}
                  text="OPEN COMPLAINTS"
                  onPress={() => this.props.navigation.push('OpenComplaints')}
                />
              </View>
              <View>
                <ButtonHalf
                  bgcolor="#00b230"
                  fgcolor="white"
                  count={count.closedComplaints}
                  text="CLOSED COMPLAINTS"
                  onPress={() => this.props.navigation.push('ClosedComplaints')}
                />
              </View>
            </View>
          </View>
          <View>
            <Text style={styles.heading}>Feedbacks</Text>
            <View style={[styles.span, styles.gapVertical]}>
              <View style={styles.gapHorizontal}>
                <ButtonHalf
                  fgcolor="#00b230"
                  count={count.positiveFeedbacks}
                  text="POSITIVE FEEDBACKS"
                  onPress={() =>
                    this.props.navigation.push('PositiveFeedbacks')
                  }
                />
              </View>
              <View>
                <ButtonHalf
                  fgcolor="#ff2519"
                  count={count.pendingFeedbacks}
                  text="PENDING FEEDBACKS"
                  onPress={() => this.props.navigation.push('PendingFeedbacks')}
                />
              </View>
            </View>
            <View style={[styles.span, styles.gapVertical]}>
              <View style={styles.gapHorizontal}>
                <ButtonHalf
                  fgcolor="#c1ba1c"
                  count={count.negativeFeedbacks}
                  text="NEGATIVE FEEDBACKS"
                  onPress={() =>
                    this.props.navigation.push('NegativeFeedbacks')
                  }
                />
              </View>
              <View>
                <ButtonHalf
                  fgcolor="#ff2519"
                  count={count.droppedComplaints}
                  text="DROPPED COMPLAINTS"
                  onPress={() =>
                    this.props.navigation.push('DroppedComplaints')
                  }
                />
              </View>
            </View>
          </View>
        </ScrollView>
      </SafeAreaView>
    );
  }
}

const count = {
  totalComplaints: 0,
  openComplaints: 0,
  closedComplaints: 0,
  droppedComplaints: 0,
  positiveFeedbacks: 0,
  negativeFeedbacks: 0,
  pendingFeedbacks: 0
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  image: {
    marginTop: 10,
    alignSelf: 'center'
  },
  span: {
    flex: 1,
    flexDirection: 'row'
  },
  gapVertical: {
    marginBottom: 6
  },
  gapHorizontal: {
    marginRight: 7
  },
  heading: {
    flex: 1,
    alignSelf: 'center',
    color: (170, 170, 170),
    fontSize: 22,
    // fontWeight:'bold',
    padding: 30
  }
});
