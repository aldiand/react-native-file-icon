import * as React from 'react';

import { ScrollView, StyleSheet, View } from 'react-native';
import { FileIcon, defaultStyles } from 'react-native-file-icon';

export default function App() {
  const styledIcons = Object.keys(defaultStyles);

  return (
    <View style={styles.container}>
      <ScrollView style={styles.scroll}>
        <View style={styles.content}>
          {styledIcons.map((icon) => (
            <View style={styles.box} key={icon}>
              <FileIcon extension={icon} {...defaultStyles[icon]} />
            </View>
          ))}
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  scroll: {
    flex: 1,
  },
  content: {
    flex: 1,
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  box: {
    width: 60,
    height: 60,
    margin: 4,
  },
});
