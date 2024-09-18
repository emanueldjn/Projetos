import { 
    View, 
    Text,  
    StyleSheet, 
    Pressable, 
    ScrollView // Caso um alinha passe o tamanho da tela, ter um scrool
} from 'react-native'

import { colors } from '../../constants/colors' // acessando a pasta constants onde definiu o estilo 
import { z } from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form';
import { Header } from '@/components/header';

export default function Create() {
 return (
   <View style={styles.container}>
    <Header 
        step='Passo 2'
        title='Finalizando dieta'
    />

   </View>
  );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors.backgroud
    }
})