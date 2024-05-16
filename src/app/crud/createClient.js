import { createClient } from "@supabase/supabase-js";

export const supabase = createClient(
  "https://mqnljplttwvowhluywqg.supabase.co",
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im1xbmxqcGx0dHd2b3dobHV5d3FnIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTU3MDk3ODEsImV4cCI6MjAzMTI4NTc4MX0.J0unsCM8vZbuqwRrx19qYi9d1mtIfq3qpn_lb-Psr-4"
);
