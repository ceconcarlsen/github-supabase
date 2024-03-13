import 'react-native-url-polyfill/auto'
import AsyncStorage from '@react-native-async-storage/async-storage'
import { createClient } from '@supabase/supabase-js'

const supabaseUrl = "https://nbroobrbgompcrfrunbn.supabase.co"
const supabaseAnonKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im5icm9vYnJiZ29tcGNyZnJ1bmJuIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTAzNTI0OTcsImV4cCI6MjAyNTkyODQ5N30.vQnRQL_e--Vhqh84-8kgDnsOZV7D3uFS6RS0kJBeFpU"

export const supabase = createClient(supabaseUrl, supabaseAnonKey, {
  auth: {
    storage: AsyncStorage,
    autoRefreshToken: true,
    persistSession: true,
    detectSessionInUrl: false,
  },
})