import { Stack } from "expo-router";
import { QueryClientProvider, QueryClient } from '@tanstack/react-query'

export default function RootLayout() {
  const queryClient = new QueryClient(); // para ter cash


  return (
    <QueryClientProvider client={queryClient}>
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
        <Stack.Screen
            name="nutrition/index" // pasta/arquivo
            options={{
            headerShown: false // tirando o header na pag home
        }}
        />
      
      </Stack>
    </QueryClientProvider>
  );
}
