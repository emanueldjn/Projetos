import { View, StyleSheet, Pressable, Text, SafeAreaView, Platform, StatusBar } from 'react-native';
import { Feather } from '@expo/vector-icons';
import { colors } from '../../constants/colors';
import { router } from 'expo-router'

// SafeAreaView Garante que nao atrapalhe o Header do proprio celular



interface HeaderProps{ // quem usar o componente Header, precisa passas as props step, title
    step: string;
    title: string;
}

export function Header({step, title}: HeaderProps) {
    return(
        <SafeAreaView style={styles.container}> 
            <View style={styles.content}> 
                
                <View style={styles.row}>
                    <Pressable onPress={() => router.back()}>
                        <Feather name="arrow-left" size={24} color="#000"/>
                    </Pressable>
                    <Text style={styles.title}>{title}</Text>
                    <Text style={styles.text}>
                        {step} <Feather name='loader' size={16} color='#000'/>
                    </Text>
                    
                </View>

                


            </View>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: colors.white,
        borderBottomEndRadius: 10,
        borderBottomLeftRadius: 10,
        marginBottom: 14,
        paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight! + 34 : 34
    },

    content: {
        paddingLeft: 16,
        paddingRight: 16,
        paddingBottom: 24,
        borderBottomEndRadius: 10,
        borderBottomLeftRadius: 10,
    },

    row: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent:'space-between',
        marginBottom: 16 
    },

    text: {
        fontSize: 18
    },

    title: {
        fontSize: 30,
        fontWeight: 'bold',
        color: colors.backgroud,
    }
})