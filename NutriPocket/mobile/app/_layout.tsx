import { Stack } from "expo-router";

export default function RootLayout() {
  return (
    <Stack>
      <Stack.Screen 
        name="index"
        options={{
        headerShown: false // tirando o header na pag home
      }} 
      />
      
      <Stack.Screen 
        name="step/index"
        options={{
        headerShown: false // tirando o header na pag home
      }} 
      />

      <Stack.Screen 
          name="create/index" // pasta/arquivo
          options={{
          headerShown: false // tirando o header na pag home
      }} 
      />
      
    </Stack>
  );
}
