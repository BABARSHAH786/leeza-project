import { createClient } from '@supabase/supabase-js'

const supabaseUrl = 'https://wudgadvdkthizwnkslye.supabase.co'
const supabaseAnonKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Ind1ZGdhZHZka3RoaXp3bmtzbHllIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NjIwMDYyMjgsImV4cCI6MjA3NzU4MjIyOH0.s3ZxglQnqJ3ijHnfRSCFInex8-_JbUEhhAUM0A8Go_w'

export const supabase = createClient(supabaseUrl, supabaseAnonKey)