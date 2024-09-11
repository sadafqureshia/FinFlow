import { neon } from "@neondatabase/serverless";
import { drizzle } from "drizzle-orm/neon-http";
import * as schema from "./schema";
const sql = neon(
    "postgresql://Expense-Tracker_owner:Bh65oZHALGPf@ep-long-cell-a5airxut.us-east-2.aws.neon.tech/expence-tracker-01?sslmode=require"
);
export const db = drizzle(sql, { schema });