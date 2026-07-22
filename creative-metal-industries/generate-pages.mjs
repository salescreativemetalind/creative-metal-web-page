#!/usr/bin/env node
/**
 * Page Generator for Creative Metal Industries
 * Generates 510 new SEO-optimized TSX route files
 * Run: node generate-pages.mjs
 */
import { writeFileSync, mkdirSync, existsSync } from "fs";
import { join } from "path";

const ROUTES_DIR = join(import.meta.dirname, "src/routes");
const BLOG_DIR = join(ROUTES_DIR, "blog");

// Ensure blog directory exists
if (!existsSync(BLOG_DIR)) mkdirSync(BLOG_DIR, { recursive: true });

const SITE_URL = "https://www.creativemetalind.com";
const PHONE = "+91 99982 80619";
const PHONE_LINK = "+919998280619";
const ADDRESS = "F-3, Loha Bhavan, Lakkadpitha Rd, Vadodara 390001";

let pagesCreated = 0;

