import { 
    View, 
    Text, 
    Image, 
    StyleSheet, 
    Pressable, 
    ScrollView // Caso um alinha passe o tamanho da tela, ter um scrool
} from 'react-native'
import { colors } from '../../constants/colors' // acessando a pasta constants onde definiu o estilo 
import { Header } from '../../components/header'
import { Input } from "../../components/input";
import { z } from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form';
import { router } from 'expo-router'
import { useDataStore } from '../../store/data'

// VAlidação

const schema = z.object ({
    name: z.string().min(1, { message: "Nome obrigatorio" }),
    weight: z.string().min(1, { message: "O Peso é obrigatorio" }),
    age: z.string().min(1, { message: "Idade é obrigatório" }),
    height: z.string().min(1, { message: "A Altura é obrigatoria" }),
})

// Infereça de tipo
type FormData = z.infer<typeof schema>

export default function Step() {

    // Manipulando o formulario
    const { control, handleSubmit, formState: {errors, isValid} } = useForm<FormData>({
        resolver: zodResolver(schema),
        
    })

    const setPageOne = useDataStore(state => state.setPageOne)

    function handleCreate(data: FormData) {
        console.log('Passando DADOS DA PAG 1')
        
        setPageOne({
            name: data.name,
            weight: data.weight,
            age: data.age,
            height: data.height,
            
        })
        
        router.push("/create")
    }   

    return (
        <View style={styles.container}>
            <Header step='passo 1' title='Vamos começar' /*COMPONTENTES REUTILIZAVEIS*//> 

            <ScrollView style={styles.content}>
                <Text style={styles.label}>Nome:</Text>
                <Input 
                    name='name'
                    control={control}
                    placeholder='Digite seu nome'
                    error={errors.name?.message}
                    keyboardType='default'
                />

                <Text style={styles.label}>Peso:</Text>
                <Input 
                    name='weight'
                    control={control}
                    placeholder='Ex: 75kg'
                    error={errors.weight?.message}
                    keyboardType='numeric'
                />

                <Text style={styles.label}>Altura:</Text>
                <Input 
                    name='height'
                    control={control}
                    placeholder='1.85'
                    error={errors.height?.message}
                    keyboardType='numeric'
                />

                
                <Text style={styles.label}>Idade:</Text>
                <Input 
                    name='age'
                    control={control}
                    placeholder='Sua Idade'
                    error={errors.age?.message}
                    keyboardType='numeric'
                />

                <Pressable style={styles.button} onPress={handleSubmit(handleCreate)}> 
                    <Text style={styles.buttonText}>Avançar</Text>
                </Pressable>

            </ScrollView>
        </View>

        // Criando Formulario
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors.backgroud,
    },

    content: {
        paddingLeft: 16,
        paddingRight: 16,
    },

    label: {
        fontSize: 16,
        color: colors.white,
        fontWeight: 'bold',
        marginBottom: 8,
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