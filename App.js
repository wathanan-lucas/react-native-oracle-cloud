import PessoaAdd from "./telas/PessoaAddTela";
import PessoaListTela from "./telas/PessoaListTela"
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

const Stack = createNativeStackNavigator()

export default () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen 
          name="PessoaAdd"
          component={PessoaAdd}
        />
        <Stack.Screen 
          name="PessoaListTela"
          component={PessoaListTela}
        />
      </Stack.Navigator>
    </NavigationContainer>
  )
}