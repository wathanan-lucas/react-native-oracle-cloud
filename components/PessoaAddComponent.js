import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { Button, Card } from '@rneui/base'
import { Input } from '@rneui/themed'
import { useState } from 'react'


const PessoaAddComponent = ({navigation}) => {
  const [name, setName] = useState('')
  const [idade, setIdade] = useState('')
  const [hobby, setHobby] = useState('')  
  const addPessoa = () => {
    console.log(name, idade, hobby)
  }

  return (
    <>
        <Card
            containerStyle={styles.card}
        >
            <Card.Title>Cadastro de pessoa</Card.Title>
            <Card.Divider></Card.Divider>
            <Input
                placeholder='Digite seu nome'
                leftIcon={{type: 'font-awesome', name: 'user'}}
                styles={styles.textInput}
                onChangeText={(nomeDigitado) => setName(nomeDigitado)}
            />
            <Input
                placeholder='Digite a idade'
                leftIcon={{type: 'font-awesome', name: 'info'}}
                styles={styles.textInput}
                onChangeText={(idadeDigitada ) => setIdade(idadeDigitada)}
            />
            <Input
                placeholder='Digite o hobby'
                leftIcon={{type: 'font-awesome', name: 'heart'}}
                styles={styles.textInput}
                onChangeText={hobbyDigitado => setHobby(hobbyDigitado)}
            />           

            <Button 
                title='OK'
                onPress={addPessoa}
            />
        </Card>
    </>
  )
}

export default PessoaAddComponent

const styles = StyleSheet.create({
    card: {
        padding: 8,
        borderRadius: 8
    },
    textInput: {
        textAlign: 'center',
        margin: 0,
        padding: 0,
    }
    
})