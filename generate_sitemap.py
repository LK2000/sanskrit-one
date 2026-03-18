#!/usr/bin/env python3

import os
from datetime import date
from urllib.parse import urljoin

# ================= CONFIG =================
SITE_URL = "https://sanskrit.one/"  # Your site root
ROOT_DIR = "."                       # Folder to start scanning
OUTPUT_FILE = "sitemap.xml"

# Default rules
CHANGEFREQ_ROOT = "daily"
CHANGEFREQ_SUB = "weekly"
CHANGEFREQ_DEEP = "monthly"

PRIORITY_ROOT = "1.0"
PRIORITY_SUB = "0.8"
PRIORITY_DEEP = "0.5"
# ==========================================

def get_priority_and_freq(filepath):
    """Determine priority and changefreq based on folder depth."""
    parts = filepath.replace(os.sep, "/").split("/")
    depth = len(parts) - 1  # number of subfolders

    if parts[-1] == "index.html":
        return PRIORITY_ROOT, CHANGEFREQ_ROOT
    elif depth == 0:
        return PRIORITY_ROOT, CHANGEFREQ_ROOT
    elif depth == 1:
        return PRIORITY_SUB, CHANGEFREQ_SUB
    else:
        return PRIORITY_DEEP, CHANGEFREQ_DEEP

def generate_sitemap(root_dir, site_url):
    urls = []

    # Walk recursively
    for dirpath, dirnames, filenames in os.walk(root_dir):
        for filename in filenames:
            if filename.endswith(".html"):
                filepath = os.path.relpath(os.path.join(dirpath, filename), root_dir)
                url_path = filepath.replace(os.sep, "/")
                full_url = urljoin(site_url, url_path)
                priority, changefreq = get_priority_and_freq(filepath)
                urls.append({
                    "loc": full_url,
                    "changefreq": changefreq,
                    "priority": priority
                })
    return urls

def write_sitemap(urls, output_file):
    today = date.today().isoformat()
    with open(output_file, "w", encoding="utf-8") as f:
        f.write('<?xml version="1.0" encoding="UTF-8"?>\n')
        f.write('<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n\n')
        for url in urls:
            f.write("  <url>\n")
            f.write(f"    <loc>{url['loc']}</loc>\n")
            f.write(f"    <lastmod>{today}</lastmod>\n")
            f.write(f"    <changefreq>{url['changefreq']}</changefreq>\n")
            f.write(f"    <priority>{url['priority']}</priority>\n")
            f.write("  </url>\n\n")
        f.write("</urlset>\n")
    print(f"Sitemap written to {output_file} with {len(urls)} URLs.")

if __name__ == "__main__":
    urls = generate_sitemap(ROOT_DIR, SITE_URL)
    if urls:
        write_sitemap(urls, OUTPUT_FILE)
    else:
        print("No .html files found in the directory.")

