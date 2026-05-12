/*
  # Fix RLS policy for leads table

  1. Security Changes
    - Remove overly permissive `Allow public to insert leads` policy that allowed anon users
    - Add new policy to allow authenticated users to insert leads only
    - Keep existing authenticated read policy
*/

DROP POLICY IF EXISTS "Allow public to insert leads" ON leads;

CREATE POLICY "Authenticated users can insert leads"
  ON leads
  FOR INSERT
  TO authenticated
  WITH CHECK (true);
