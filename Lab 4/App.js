import React, { useState } from 'react';
import { StyleSheet, Text, SafeAreaView, ScrollView, View, TextInput, Image, Button, Alert } from 'react-native';

export default function App() {
  const [comment, setComment] = useState('');

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        <View style={styles.header}>
          <Text style={styles.headerText}>5 книжных новинок октября</Text>
        </View>
        <View style={styles.title}>
          <Text style={styles.titleText}>"Кадиш.com" Натан Ингландер. Издательство "Книжники"</Text>
        </View>
        <View style={styles.content}>
          <Image
            source={{ uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSR3sNmTYTeG3QBAj_Hymrc9UrJrfEfOy2tuw&usqp=CAU' }}
            style={styles.image}
          />
          <Text style={styles.contentText}>Ироничная новелла Натана Ингландера, две личные истории культовой Патти Смит, репортаж британской журналистки о будущем человечества, дебютный роман Оушена Вуонга и журналистское расследование о создании «Моссада». В нашей подборке рассказываем о пяти захватывающих книжных новинках, которые достойны того, чтобы появиться на ваших полках.</Text>
          <TextInput
            style={styles.commentInput}
            placeholder="Добавьте комментарий"
            value={comment}
            onChangeText={(text) => setComment(text)}
          />
          <Button title="Читать далее" onPress={() => Alert.alert('Книга добавлена')} />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    backgroundColor: '#fff',
  },
  headerText: {
    marginTop: 40,
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
    color: '#121212',
  },
  title: {
    paddingTop: 30,
    paddingHorizontal: 60,
    backgroundColor: '#a9a9a9',
  },
  titleText: {
    fontSize: 18,
    textAlign: 'center',
    fontWeight: 'normal',
    color: '#121212',
  },
  content: {
    backgroundColor: '#808080',
  },
  image: {
    width: '100%',
    height: 200,
  },
  contentText: {
    fontSize: 16,
    textAlign: 'center',
    paddingHorizontal: 14,
    paddingVertical: 30,
    color: '#121212',
  },
  commentInput: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    margin: 10,
    padding: 8,
  },
});