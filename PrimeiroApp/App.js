import React from "react";
import { View, TextInput, TouchableOpacity, SytleSheet, Image} from "react-native";
import { SafeAreaView } from "react-native-web";
import estiloso from CSS;

const TelaEntrar = () => {
  return (
    <SafeAreaView style={estiloso.background}>
      <View style={estiloso.contair}>

      <Image
      source="../Imagens/icone_login.png"
      style={estiloso.icone_login}
      />
      
      <View style={estiloso.inputView}>
        <TextInput
          style={estiloso.texto_input}
          placeholder= "Login"
          placeholderTextColor="#003f5c"
          />
      </View>
      <View style={estiloso.inputView}>
        <TextInput
          style={estiloso.texto_input}
          placeholder= "Senha"
          placeholderTextColor="#003f5c"
          secureTextEntry={true}
        />
      </View>
      <TouchableOpacity style={estiloso.botao_entrar}>
        <Text style={estiloso.texto_botao}>Entrar</Text>
      </TouchableOpacity>
    </View>
    </SafeAreaView>
  )
}

export default TelaEntrar;
