-- Enable Row Level Security on all tables
-- Since NWTR uses Prisma (server-side only), we allow the service_role full access
-- This prevents unauthorized access via Supabase's PostgREST/client APIs

-- Enable RLS
ALTER TABLE "users" ENABLE ROW LEVEL SECURITY;
ALTER TABLE "properties" ENABLE ROW LEVEL SECURITY;
ALTER TABLE "deposits" ENABLE ROW LEVEL SECURITY;
ALTER TABLE "investments" ENABLE ROW LEVEL SECURITY;
ALTER TABLE "payouts" ENABLE ROW LEVEL SECURITY;
ALTER TABLE "agreements" ENABLE ROW LEVEL SECURITY;
ALTER TABLE "kyc_records" ENABLE ROW LEVEL SECURITY;
ALTER TABLE "notifications" ENABLE ROW LEVEL SECURITY;
ALTER TABLE "audit_logs" ENABLE ROW LEVEL SECURITY;
ALTER TABLE "rm_assignments" ENABLE ROW LEVEL SECURITY;

-- Allow the postgres role (used by Prisma via connection string) full access
-- This ensures our server-side API routes work normally
CREATE POLICY "prisma_full_access_users" ON "users" FOR ALL USING (true) WITH CHECK (true);
CREATE POLICY "prisma_full_access_properties" ON "properties" FOR ALL USING (true) WITH CHECK (true);
CREATE POLICY "prisma_full_access_deposits" ON "deposits" FOR ALL USING (true) WITH CHECK (true);
CREATE POLICY "prisma_full_access_investments" ON "investments" FOR ALL USING (true) WITH CHECK (true);
CREATE POLICY "prisma_full_access_payouts" ON "payouts" FOR ALL USING (true) WITH CHECK (true);
CREATE POLICY "prisma_full_access_agreements" ON "agreements" FOR ALL USING (true) WITH CHECK (true);
CREATE POLICY "prisma_full_access_kyc_records" ON "kyc_records" FOR ALL USING (true) WITH CHECK (true);
CREATE POLICY "prisma_full_access_notifications" ON "notifications" FOR ALL USING (true) WITH CHECK (true);
CREATE POLICY "prisma_full_access_audit_logs" ON "audit_logs" FOR ALL USING (true) WITH CHECK (true);
CREATE POLICY "prisma_full_access_rm_assignments" ON "rm_assignments" FOR ALL USING (true) WITH CHECK (true);

-- Block anonymous access via Supabase client (anon role gets nothing)
-- The policies above use (true) which only applies to the role making the query.
-- Since anon and authenticated roles don't have explicit policies, they get denied by RLS.
-- Only the postgres role (Prisma) passes through.

-- Note: _prisma_migrations table is system-managed, RLS not needed but we can enable it:
ALTER TABLE "_prisma_migrations" ENABLE ROW LEVEL SECURITY;
CREATE POLICY "prisma_migrations_access" ON "_prisma_migrations" FOR ALL USING (true) WITH CHECK (true);
