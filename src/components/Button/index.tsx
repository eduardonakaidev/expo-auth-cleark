import { ActivityIndicator, StyleSheet, Text, TouchableOpacity, TouchableOpacityProps } from "react-native";
import { Ionicons } from "@expo/vector-icons"

interface ButtonProps extends TouchableOpacityProps {
    title: string
    isLoading?: boolean
    icon: keyof typeof Ionicons.glyphMap
}
export function Button({ title, isLoading = false, icon, ...rest }: ButtonProps) {
    return (
        <TouchableOpacity disabled= {isLoading} activeOpacity={0.8} {...rest} style={styles.container}>
            {isLoading ? 
        (<ActivityIndicator color="white" />) :
         (<><Ionicons name={icon} style={styles.icon}/>
            <Text style={styles.text}>
                {title}
            </Text>
        </>
        )}


        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    container:{
        width: "100%",
        flexDirection:"row",
        alignItems:"center",
        justifyContent:"center",
        gap:7,
        backgroundColor:"#000",
        padding:22,
        borderRadius:16
    },
    icon:{
        color:"#fff",
        fontSize:20
    },
    text:{
        color:"#fff",
        fontSize:16,
    },
})