import { Button, StyleSheet } from 'react-native';
import { useState } from 'react';

import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';

export default function HomeScreen() {
  const [count, setCount] = useState(0);

  const increment = () => setCount(prev => prev + 1);
  const decrement = () => setCount(prev => prev - 1);
  const reset = () => setCount(0);

  return (
    <ThemedView style={styles.container}>
      <ThemedText type="title" style={styles.title}>Counter App</ThemedText>
      
      <ThemedText type="subtitle" style={styles.count} testID="counter-value">
        {count}
      </ThemedText>

      <ThemedView style={styles.buttonContainer}>
        <Button 
          onPress={decrement} 
          testID="decrement-button"
          title="-"
        />
        
        <Button 
          onPress={increment} 
          testID="increment-button"
          title="+"
        />
      </ThemedView>

      <Button 
        onPress={reset} 
        testID="reset-button"
        title="Reset"
        color="#841584"
      />
    </ThemedView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
  title: {
    marginBottom: 32,
  },
  count: {
    fontSize: 48,
    marginBottom: 24,
  },
  buttonContainer: {
    flexDirection: 'row',
    gap: 16,
    marginBottom: 16,
  }
});
