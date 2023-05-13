import { StyleSheet, View, FlatList } from 'react-native'
import React, { useState } from 'react'

import { LinearProgress, ListItem } from '@rneui/base'

import * as pessoaService from '../service/pessoaService'

const PessoaListComponent = () => {
    const [pessoas , setPessoas] = useState([])
    const [refreshing, setRefreshing] = useState(false)

    const updateList = async () => {
        try{
            const listaPessoas = await pessoaService.obterLista()
           
            const compareFn = (a, b) => {
                return a.nome > b.nome ? 1 : a.nome < b.nome ? -1 : 0
            }
            setPessoas(listaPessoas.data.items.sort(compareFn))
           
        }catch(e) {
            console.log('erro', e)
            ToastAndroid.show("Falha. Tente novamente mais tarde", ToastAndroid.LONG)
            
        }
    }

    const onRefresh = () => {
        setRefreshing(true)
        
        updateList()

        setRefreshing(false)
    }
  
    return (
    <View>
      {
        pessoas.length > 0 ?
            <>
                <FlatList 
                    onRefresh={onRefresh}
                    refreshing={refreshing}
                    data={pessoas}
                    renderItem={(pessoa) => (
                        <ListItem bottomDivider>
                            <ListItem.Content>
                                <ListItem.Title>
                                    {pessoas.item.nome}
                                </ListItem.Title>
                                <ListItem.Subtitle>
                                    {pessoa.item.hobby}
                                </ListItem.Subtitle>
                            </ListItem.Content>
                        </ListItem>
                    )}
                />
            </>
        :

            <LinearProgress />
      }
    </View>
  )
}

export default PessoaListComponent

const styles = StyleSheet.create({})