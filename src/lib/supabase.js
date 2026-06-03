import { createClient } from "@supabase/supabase-js";

export const supabase = createClient(
  "https://YOUR_PROJECT_URL.supabase.co",
  "YOUR_ANON_KEY"
);
