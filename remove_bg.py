#!/usr/bin/env python3
"""
remove_bg.py  —  Remove backgrounds from all images in one or more directories
                 and save them back using their original filename.

Usage:
    python3 remove_bg.py [DIR1] [DIR2] ...

    If no arguments are given it defaults to the two site image directories:
        public/img/
        public/img-hq/

Dependencies (installed automatically via the venv setup script):
    rembg, pillow, onnxruntime

Notes:
    • Output format is always PNG (supports transparency); the file extension
      is changed to .png when the original was .jpg/.jpeg/.webp etc.
    • If the original file already ends in .png the existing file is replaced.
    • A backup of the original is written to <file>.bak before processing so
      you can always revert with:
          for f in public/img/*.bak; do mv "$f" "${f%.bak}"; done
    • The u2net model (~170 MB) is downloaded automatically on first run and
      cached in ~/.u2net/.
    • Progress is printed per file.
"""

import os
import sys
import shutil
from pathlib import Path

# ── ensure rembg is importable ────────────────────────────────────────────────
try:
    from rembg import remove
    from PIL import Image
except ImportError:
    print("ERROR: rembg / pillow not installed.")
    print("Run the setup first:")
    print("  uv venv .venv-rembg && source .venv-rembg/bin/activate")
    print("  uv pip install rembg[gpu] pillow   # or rembg pillow if no CUDA")
    sys.exit(1)

# ── image extensions we process ──────────────────────────────────────────────
SUPPORTED = {".jpg", ".jpeg", ".webp", ".png", ".bmp", ".tiff", ".avif"}

# ── default directories (relative to this script) ────────────────────────────
SCRIPT_DIR = Path(__file__).parent
DEFAULT_DIRS = [
    SCRIPT_DIR / "creative-metal-industries/public/img",
    SCRIPT_DIR / "creative-metal-industries/public/img-hq",
]


def process_dir(directory: Path, backup: bool = True):
    directory = directory.resolve()
    if not directory.is_dir():
        print(f"  SKIP (not a directory): {directory}")
        return

    files = sorted(
        f for f in directory.iterdir()
        if f.is_file() and f.suffix.lower() in SUPPORTED
    )
    print(f"\n{'='*60}")
    print(f"Directory : {directory}")
    print(f"Images    : {len(files)}")
    print(f"{'='*60}")

    for i, src in enumerate(files, 1):
        out_path = src.with_suffix(".png")
        bak_path = Path(str(src) + ".bak")

        print(f"[{i:>3}/{len(files)}] {src.name}", end="  ", flush=True)

        # Backup original (skip if backup already exists from a previous run)
        if backup and not bak_path.exists():
            shutil.copy2(src, bak_path)

        try:
            with open(src, "rb") as fh:
                input_data = fh.read()

            output_data = remove(input_data)   # rembg does the heavy lifting

            with open(out_path, "wb") as fh:
                fh.write(output_data)

            # If the original had a different extension, remove it so the
            # directory doesn't accumulate both .webp and .png for the same name.
            if src != out_path:
                src.unlink()

            # Verify output is a valid PNG
            with Image.open(out_path) as img:
                mode = img.mode   # should be RGBA
            print(f"-> {out_path.name}  ({mode})")

        except Exception as exc:
            print(f"ERROR: {exc}")
            # Restore backup if we already wrote it
            if bak_path.exists() and not out_path.exists():
                shutil.copy2(bak_path, src)


def main():
    dirs = [Path(d) for d in sys.argv[1:]] if len(sys.argv) > 1 else DEFAULT_DIRS

    print("remove_bg.py — AI background removal using rembg (u2net)")
    print(f"Processing {len(dirs)} director{'y' if len(dirs)==1 else 'ies'}")

    for d in dirs:
        process_dir(d)

    print("\nDone.")
    print("Originals saved as *.bak — to restore:")
    print("  for f in public/img/*.bak; do mv \"$f\" \"${f%.bak}\"; done")


if __name__ == "__main__":
    main()
