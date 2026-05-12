/*
  # Create leads table for The Childcare Broker

  1. New Tables
    - `leads`
      - `id` (uuid, primary key)
      - `service_type` (text: 'nanny', 'nursery', 'childminder', 'babysitter')
      - `name` (text)
      - `email` (text)
      - `phone` (text)
      - `postcode` (text)
      - `message` (text)
      - `created_at` (timestamp)

  2. Security
    - Enable RLS on `leads` table
    - Add policy to allow inserts from public (for form submissions)
    - Add policy to restrict read access to authenticated users only
*/

CREATE TABLE IF NOT EXISTS leads (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  service_type text NOT NULL CHECK (service_type IN ('nanny', 'nursery', 'childminder', 'babysitter')),
  name text NOT NULL,
  email text NOT NULL,
  phone text NOT NULL,
  postcode text NOT NULL,
  message text,
  created_at timestamptz DEFAULT now()
);

ALTER TABLE leads ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Allow public to insert leads"
  ON leads
  FOR INSERT
  TO anon
  WITH CHECK (true);

CREATE POLICY "Only authenticated users can view leads"
  ON leads
  FOR SELECT
  TO authenticated
  USING (true);
