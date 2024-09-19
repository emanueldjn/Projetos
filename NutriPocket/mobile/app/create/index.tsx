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
import { Select } from '../../components/input/select'

// VAlidação
const schema = z.object ({
    gender: z.string().min(1, { message: "Sexo é obrigatorio" }),
    objective: z.string().min(1, { message: "O Objetivo é obrigatorio" }),
    level: z.string().min(1, { message: "Selecione seu nivel" }),
})

// Infereça de tipo
type FormData = z.infer<typeof schema>

export default function Create() {

    // Manipulando o formulario
    const { control, handleSubmit, formState: {errors, isValid} } = useForm<FormData>({
        resolver: zodResolver(schema),
            
    })

    const genderOptions = [
        {label: "Masculino", value: "masculino"},
        {label: "Feminino", value: "feminino"},

    ]

 return (
   <View style={styles.container}>
    <Header 
        step='Passo 2'
        title='Finalizando dieta'
    />

    <ScrollView style={styles.content}>
        <Text style={styles.label}>Sexo:</Text>
        <Select
            control={control}
            name='gender'
            placeholder='Selecione o seu sexo'
            error={errors.gender?.message}
            options={genderOptions}
        />
    </ScrollView>
   </View>
  );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors.backgroud
    },

    label: {
        fontSize: 16,
        color: colors.white,
        fontWeight: 'bold',
        marginBottom: 8,
    },

    content: {
        paddingLeft: 16,
        paddingRight: 16,
    }
})

