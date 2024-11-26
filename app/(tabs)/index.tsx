import { StyleSheet } from 'react-native';
import { ThemedView } from '@/components/ThemedView';
import Kata from '../../src/box';

export default function HomeScreen() {
  return (
    <ThemedView style={styles.stepContainer}>
      <Kata />
    </ThemedView>
  );
}

const styles = StyleSheet.create({
  stepContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
