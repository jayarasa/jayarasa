const { createClient } = require("@supabase/supabase-js");

const supa = createClient(
  process.env.SUPABASE_PROJECT_URL,
  process.env.SUPABASE_API_KEY
);

export default supa;
