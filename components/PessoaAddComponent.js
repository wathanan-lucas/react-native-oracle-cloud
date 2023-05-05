import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { Card } from '@rneui/base'
import { Input } from '@rneui/themed'
import { useState } from 'react'


const PessoaAddComponent = ({navigation}) => {
  const [name, setName] = useState()
  const [idade, setIdade] = useState()
  const [hobby, setHobby] = useState()  

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
                onChange={(nomeDigitado) => setNome(nomeDigitado)}
            />
            <Input
                placeholder='Digite a idade'
                leftIcon={{type: 'font-awesome', name: 'info'}}
                styles={styles.textInput}
                onChange={(idadeDigitada ) => setIdade(idadeDigitada)}
            />
            <Input
                placeholder='Digite o hobby'
                leftIcon={{type: 'font-awesome', name: 'heart'}}
                styles={styles.textInput}
                onChange={hobbyDigitado => setHobby(hobbyDigitado)}
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