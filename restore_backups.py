#!/usr/bin/env python3
"""Restore all route files from the pristine backups in ./seo_backups/."""
from pathlib import Path

BACKUP_DIR = Path("seo_backups")
for bak in BACKUP_DIR.glob("*.bak"):
    rel = bak.name[:-4].replace("__", "/")
    target = Path(rel)
    target.write_text(bak.read_text(encoding="utf-8"), encoding="utf-8")
    print(f"restored {target}")
