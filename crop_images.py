#!/usr/bin/env python3
"""
Crops rehab-section images to a uniform 4:3 aspect ratio (centre crop),
saves as WebP into Assets/rehab/.
Skips Gemini-generated files.
"""

from PIL import Image
import os, pathlib

OUTPUT_DIR = pathlib.Path(r"Assets/rehab")
OUTPUT_DIR.mkdir(exist_ok=True)

TARGET_W, TARGET_H = 4, 3          # aspect ratio
GEMINI_PREFIX = "Gemini_Generated"  # skip these

def centre_crop(img: Image.Image, ratio_w=4, ratio_h=3) -> Image.Image:
    w, h = img.size
    target_aspect = ratio_w / ratio_h
    current_aspect = w / h
    if current_aspect > target_aspect:
        # wider than target → crop left/right
        new_w = int(h * target_aspect)
        left = (w - new_w) // 2
        return img.crop((left, 0, left + new_w, h))
    else:
        # taller than target → crop top/bottom (favour upper portion slightly)
        new_h = int(w / target_aspect)
        top = int((h - new_h) * 0.35)   # 35% from top keeps faces/action visible
        return img.crop((0, top, w, top + new_h))

def save(img: Image.Image, out_path: pathlib.Path):
    img = img.convert("RGB")
    img.save(out_path, "WEBP", quality=85)
    print(f"  OK {out_path}")

jobs = [
    # Programs
    ("Assets/Programs/Stroke.jpg",                          "prog_stroke.webp"),
    ("Assets/Programs/Spinal Cord Injury.png",             "prog_spinal_cord.webp"),
    ("Assets/Programs/Traumatic Brain Injury.png",         "prog_tbi.webp"),
    ("Assets/Programs/Hemiplegia.jpg",                     "prog_hemiplegia.webp"),
    ("Assets/Programs/Paraplegia.png",                     "prog_paraplegia.webp"),
    ("Assets/Programs/Cerebral Palsy.png",                 "prog_cerebral_palsy.webp"),
    ("Assets/Programs/Motor Neuro Disease.png",            "prog_motor_neuron.webp"),
    ("Assets/Programs/Post Surgical Complication.png",     "prog_post_surgical.webp"),
    ("Assets/Programs/Sciatica.png",                       "prog_sciatica.webp"),
    ("Assets/Programs/Parkinson's.png",                    "prog_parkinsons.webp"),

    # Therapies
    ("Assets/Therapies/Ayurveda/29.jpg",                               "th_ayurveda.webp"),
    ("Assets/Therapies/Physiotherapy/IMG_3264.JPG",                    "th_physiotherapy.webp"),
    ("Assets/Therapies/Robotic Rehabilitation/IMG_9860.JPG",           "th_robotic.webp"),
    ("Assets/Therapies/OT/IMG_9460.JPG",                               "th_ot.webp"),
    ("Assets/Therapies/Speech Therapy/IMG_8162.JPG",                   "th_speech.webp"),
    ("Assets/Therapies/VR/VR 01.jpeg",                                 "th_vr.webp"),
    ("Assets/Therapies/Underwater Treadmill/06.jpg",                   "th_aquatic.webp"),
    ("Assets/Therapies/Cycle T/Cycle T.JPG",                           "th_cycle.webp"),
]

for src, dst in jobs:
    src_path = pathlib.Path(src)
    if not src_path.exists():
        print(f"  MISSING: {src}")
        continue
    if GEMINI_PREFIX in src_path.name:
        print(f"  SKIP (Gemini): {src}")
        continue
    try:
        img = Image.open(src_path)
        cropped = centre_crop(img)
        save(cropped, OUTPUT_DIR / dst)
    except Exception as e:
        print(f"  ERROR {src}: {e}")

print("\nDone.")
