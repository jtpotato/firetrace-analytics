import { createClient } from "@supabase/supabase-js";

export default {
  async fetch(request, env, ctx) {
    const { searchParams } = new URL(request.url);
    let user_agent = "" + searchParams.get("user_agent");
    let timezone_name = "" + searchParams.get("timezone_name");
    let date = Date.now();

    const supabase = createClient("https://durrmnzwlgghutriskhy.supabase.co", "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImR1cnJtbnp3bGdnaHV0cmlza2h5Iiwicm9sZSI6ImFub24iLCJpYXQiOjE2ODQ1NzM0NjgsImV4cCI6MjAwMDE0OTQ2OH0.euOd2CE13gs9iDK5xPuSbdqDJhvzbK6K39ZDA9LhR-Q");

    const { error } = await supabase
      .from("firetrace_views")
      .insert([
        {
          user_agent: user_agent,
          time_zone_name: timezone_name,
          time_created: date,
        },
      ]);
    console.log(error);

    return new Response("This should work?");
  },
};
