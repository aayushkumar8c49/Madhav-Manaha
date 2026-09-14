/* ==========================================
   SUPABASE CONNECTION
   ========================================== */

const SUPABASE_URL =
    "https://vdzvjjbwfznkxctcmowm.supabase.co";

const SUPABASE_PUBLISHABLE_KEY =
    "sb_publishable_2HMEM4s8-pMm7wyB5nSK-A___8b-g6U";


const supabaseClient =
    window.supabase.createClient(
        SUPABASE_URL,
        SUPABASE_PUBLISHABLE_KEY
    );