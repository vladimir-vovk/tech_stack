import React, { Component } from 'react';
import { View, Text, TouchableWithoutFeedback, LayoutAnimation } from 'react-native';
import { connect } from 'react-redux';
import { CardSection } from './common';
import * as actions from '../actions';

class ListItem extends Component {
  componentWillUpdate() {
    LayoutAnimation.easeInEaseOut();
  }

  onListItemPress() {
    this.props.selectLibrary(this.props.library.id);
  }

  renderDescription() {
    const {expanded, library } = this.props;

    if (expanded) {
      return (
        <CardSection>
          <Text style={styles.textDesc}>
            {library.description}
          </Text>
        </CardSection>
      );
    }
  }

  render() {
    return (
      <TouchableWithoutFeedback
        onPress={this.onListItemPress.bind(this)}
      >
        <View>
          <CardSection>
              <Text style={styles.title}>
                {this.props.library.title}
              </Text>
          </CardSection>

          {this.renderDescription()}
        </View>
      </TouchableWithoutFeedback>
    );
  };
}

const styles = {
  title: {
    fontSize: 18,
    paddingLeft: 15
  },
  textDesc: {
    flex: 1,
    paddingLeft: 15,
    paddingRight: 15
  }
}

const mapStateToProps = (state, ownProps) => {
  const expanded = ownProps.library.id === state.selectedLibraryId;

  return { expanded };
};

export default connect(mapStateToProps, actions)(ListItem);
