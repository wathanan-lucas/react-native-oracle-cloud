import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import PessoaAddComponent from '../components/PessoaAddComponent'

const PessoaAddTela = ({navigation}) => {
  return (
    <PessoaAddComponent 
        navigation = {navigation}
    />
  )
}

export default PessoaAddTela

const styles = StyleSheet.create({})