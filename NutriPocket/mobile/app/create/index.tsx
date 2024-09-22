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
import { useDataStore } from '../../store/data'
import { router } from 'expo-router'

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
        resolver: zodResolver(schema)
    })

    const setPageTwo = useDataStore(state => state.setPageTwo)

    const genderOptions = [
        {label: "Masculino", value: "masculino"},
        {label: "Feminino", value: "feminino"},

    ];

    const levelOptions = [
        { label: 'Sedentário (pouco ou nenhuma atividade física)', value: 'Sedentário' },
        { label: 'Levemente ativo (exercícios 1 a 3 vezes na semana)', value: 'Levemente ativo (exercícios 1 a 3 vezes na semana)' },
        { label: 'Moderadamente ativo (exercícios 3 a 5 vezes na semana)', value: 'Moderado ativo (exercícios 3 a 5 vezes na semana)' },
        { label: 'Intensivo (exercícios 6 a 7 vezes na semana)', value: 'Intensivo (exercícios 6 a 7 vezes na semana)' }
    ];


    const objectiveOptions = [
        { label: 'Emagrecer', value: 'emagrecer' },
        { label: 'Hipertrofia', value: 'Hipertrofia'},
        { label: 'Hipetrofia + definição', value: 'Hipertrofia e definição' },
        { label: 'Definição', value: 'Definição'}
    ];

    function handleCreate(data: FormData){
        setPageTwo({
            gender: data.gender,
            objective: data.objective,
            level: data.level,
        })

        router.push("/nutrition")
    }

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

    <Text style={styles.label}>Nivel de atividade Fisica:</Text>
        <Select
            control={control}
            name='level'
            placeholder='Nivel de atividade Fisica'
            error={errors.level?.message}
            options={levelOptions}
        />

    <Text style={styles.label}>Selecione seu objetivo:</Text>
        <Select
            control={control}
            name='objective'
            placeholder='Selecione seu objetivo'
            error={errors.objective?.message}
            options={objectiveOptions}
        />

        <Pressable style={styles.button} onPress={handleSubmit(handleCreate)}> 
            <Text style={styles.buttonText}>Avançar</Text>
        </Pressable>
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
    },

    button: {
        backgroundColor: colors.blue,
        height: 44,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 4,
    },

    buttonText: {
        color: colors.white,
        fontSize: 16,
        fontWeight: 'bold'
    }
})

