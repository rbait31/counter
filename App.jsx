import { useState } from 'react';
import { StyleSheet, Text, View, Pressable } from 'react-native';

export default function App() {
  const [count, setCount] = useState(0);

  return (
    <View style={styles.container}>
      <Text style={styles.counter}>{count}</Text>
      <View style={styles.buttons}>
        <Pressable
          style={({ pressed }) => [styles.button, styles.plus, pressed && styles.pressed]}
          onPress={() => setCount((c) => c + 1)}
        >
          <Text style={styles.buttonText}>+</Text>
        </Pressable>
        <Pressable
          style={({ pressed }) => [styles.button, styles.reset, pressed && styles.pressed]}
          onPress={() => setCount(0)}
        >
          <Text style={styles.buttonText}>Сброс</Text>
        </Pressable>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  counter: {
    fontSize: 72,
    fontWeight: '300',
    marginBottom: 48,
  },
  buttons: {
    flexDirection: 'row',
  },
  button: {
    paddingHorizontal: 24,
    paddingVertical: 12,
    borderRadius: 8,
  },
  plus: {
    backgroundColor: '#007AFF',
  },
  reset: {
    backgroundColor: '#8E8E93',
    marginLeft: 16,
  },
  pressed: {
    opacity: 0.7,
  },
  buttonText: {
    color: '#fff',
    fontSize: 18,
  },
});
