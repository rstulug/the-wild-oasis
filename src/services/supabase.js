import { createClient } from "@supabase/supabase-js";

export const supabaseUrl = "https://xcchwuklobaufsrcxvhk.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InhjY2h3dWtsb2JhdWZzcmN4dmhrIiwicm9sZSI6ImFub24iLCJpYXQiOjE2OTgyMjk3MjksImV4cCI6MjAxMzgwNTcyOX0.DoUeZyWh-mbc3GeHxG6JRSUkBh5n1fJW1ICkWmNvH-A";
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
