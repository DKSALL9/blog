import { neon } from "@neondatabase/serverless";

export interface Post {
  id: number;
  title: string;
  content: string;
  author: string;
  created_at: string;
  image_url: string;
}

const sql = neon(import.meta.env.VITE_DATABASE_URL);

export async function getPosts(): Promise<Post[]> {
  const result = await sql`
    SELECT * FROM posts 
    ORDER BY created_at DESC
  `;
  return result as Post[];
}

export async function getPost(id: number): Promise<Post | null> {
  const result = await sql`
    SELECT * FROM posts 
    WHERE id = ${id}
    LIMIT 1
  `;
  return (result[0] as Post) || null;
}