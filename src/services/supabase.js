import { createClient } from "@supabase/supabase-js";

export const supabaseUrl = "https://xcchwuklobaufsrcxvhk.supabase.co";
const supabaseKey =
  "";
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
