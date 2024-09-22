import { View, Text, Image, StyleSheet, Pressable } from 'react-native'
import { colors } from '../constants/colors' // acessando a pasta constants onde definiu o estilo 
import { Link } from 'expo-router'

export default function Index() {
  return (
    <View style={styles.container}>
      <Image source={require('../assets/images/logonutrition.png')} />

      <Text style={styles.title}>
        Nutrition<Text style={{color: colors.white}}>.AI</Text>
      </Text>

      <Text style={styles.text}>Sua dieta personalizada com interligencia artificial</Text>

      <Link href={"/step"} asChild>
        <Pressable style={styles.button}>{/*botão*/}
          <Text style={styles.buttonText}>Gerar Dieta</Text>
        </Pressable>
      </Link>
    </View>
  )
}

// GRUPO DE ESTILOS (StyleSheet)

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.backgroud,
    flex:1, // para pegar o background da tela inteira (ja tem display flex ativado)
    justifyContent: 'center',
    alignItems: 'center',
    paddingLeft: 16,
    paddingRight: 16

  },

  title: {
    fontSize: 36,
    fontWeight: 'bold',
    color: colors.green,
    marginBottom: 16
  },

  text: {
    fontSize: 16,
    color: colors.white,
    width: 240,
    textAlign: 'center',
    marginTop: 8,
    marginBottom: 8,
  },

  button: {
    backgroundColor: colors.blue,
    borderRadius: 4,
    height: 40,
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 34,
    
  },

  buttonText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: colors.white,
  }
})