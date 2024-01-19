import React, { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { Button, StyleSheet, Text, View, Modal, Pressable } from 'react-native';

export default function App() {
  const [showModal, setShowModal] = useState(false);

  return (
    <View style={styles.container}>
      <Text>Open up App.js to start working on your app!</Text>
      <StatusBar style="auto" />

      <MyModal visible={showModal} onClose={() => setShowModal(false)} />

      <Pressable onPress={() => setShowModal(true)}>
        <Text>Press me, please</Text>
      </Pressable>
    </View>
  );
}

function MyModal({ visible, onClose }) {
  return (
    <Modal
      transparent={true}
      visible={visible}
      onRequestClose={onClose}
    >
      <View style={styles.modalContainer}>
        <View style={styles.modalContent}>
          <Text>This is the modal...</Text>
          <Button title="Close" onPress={onClose} />
        </View>
      </View>
    </Modal>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  modalContent: {
    backgroundColor: '#ffff',
    padding: 20,
    borderRadius: 5,
    alignItems: 'center',
  },
});

