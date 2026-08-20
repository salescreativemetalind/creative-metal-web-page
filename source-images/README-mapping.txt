Source master photos for the site's product imagery.
Added 2026-08-20. These are the untouched originals as supplied.

This directory sits OUTSIDE creative-metal-industries/, so it is not part of the
app and is never deployed. It exists only so the masters live in version control.

Derivatives are generated into two directories, both under
creative-metal-industries/public/. Target filenames and extensions are fixed by
the code (the I() and IH() helpers in src/routes/index.tsx), so they must not change:

  public/img/<target>     max 1200px  - product cards, category banner, product modal
  public/img-hq/<target>  max 1600px  - hero slideshow

Encoding used: ImageMagick, Lanczos resize, -strip, -unsharp 0x0.6+0.5+0.02,
quality 82 (webp) / 84 (jpeg). Downscale only, never upscale (the ">" resize flag).
The two .avif sources have no ImageMagick delegate on this machine and were decoded
with ffmpeg to PNG first.

SOURCE FILE                       -> TARGET FILENAME
alloy-steel-pipes-500x500.webp    -> alloy_steel_pipe.jpeg
alloy.jpg                         -> Alloy.webp
alloy_steel_plate.jpg             -> alloy-steel-plate.webp
aluminium_alloy.webp              -> aluminium-alloys.webp
Buttweld-Fitting.webp             -> as_buttweld_fitting.webp
as-flanges.jpg                    -> as_flanges.webp
boiler tube.jpeg                  -> boiler_tubes.jpeg
CS Plate.webp                     -> carbon-steel-plate.webp
clad plate.webp                   -> clad_plates.webp
compression tube fitting.webp     -> compression-tube-fittings.webp
crs bars.jpg                      -> CRS_Bars.webp
c-s-buttweld-fitting.jpg          -> cs_buttweld_fitting.webp
Cs-Flange.jpg                     -> cs-flanges.webp
seamless-pipe.webp                -> cs_seamless_pipe.webp
duplex-steel-plate.webp           -> duplex-plates.webp
duplex-steel.jpg                  -> duplex-steel.webp
erw-Pipes.jpg                     -> erw_pipe.jpeg
forged-fitting.jpg                -> forged_fitting_as.webp
cs forged fitting.jpeg            -> forged_fitting_cs.webp
forged-fittings.jpg               -> forged_fittings.webp
hardox-plate.jpg                  -> hardox-sheet-plate.webp
hestelloy.jpeg                    -> hastelloy.webp
incoloy.jpeg                      -> incoloy.webp
inconel.jpeg                      -> Inconel.webp
line pipes.jpg                    -> line_pipes.webp
monel-pipe.jpg                    -> Monel.webp
ms angle.jpg                      -> ms-angle.webp
ms beam.jpg                       -> ms_beam.webp
ms channel.jpg                    -> ms-channel.webp
ms flat bar.webp                  -> ms-flat-bar.webp
ms-hex-bar.jpg                    -> ms-hex-bar.webp
MS-Plate.jpg                      -> ms_plate.webp
ms round bar.jpeg                 -> ms-round-bar.webp
ms-square-bar.jpg                 -> ms_square_bar.webp
olet branch fitting.jpeg          -> olets_branch_fitting.webp
ss-buttweld-fittings.png          -> ss_buttweld_fittings.jpg
s-s-flange.jpg                    -> ss_flanges.webp
ss seamless_pipe.jpg              -> ss_seamless_pipe.webp
s-s-sheet-.avif                   -> SS-Sheets.webp
S-S-Tubes.webp                    -> ss_tubes.jpeg
ss-welded-steel.avif              -> ss_welded_pipe.jpeg
super_duplex-plate.webp           -> super_duplex-plates.webp
super duplex sheet.jpg            -> super-duplex-steel.webp
titanium_sheet.webp               -> titanium.webp
tmtbars                           -> TMT-Bars.webp
wear-plates (1).webp              -> (not used - see below)

NOT USED
  wear-plates (1).webp
    This is a bronze self-lubricating bearing plate with graphite plugs. The site's
    "Hardox / Wear Plate" category is abrasion-resistant steel (Hardox 400/450/600,
    S690QL) for mining and cement, so using it there would misrepresent the stock.
    public/img/wear_plate.webp was left as the original steel photo. If this bronze
    photo should appear anywhere, the "Copper & Brass" category is the correct home.

STILL NEEDS A PHOTO
  brass-vs-copper.webp
    Not a product photo. It is a text infographic reading "BRASS VS COPPER - KEY
    DIFFERENCES IN THE BRASS INDUSTRY", currently used as a hero slide and as the
    "Copper & Brass" card image. No replacement was supplied.

  ss_seamless_pipes.jpeg
    Was the second image in the SS Seamless Pipe card at 274x184. Only one SS
    seamless photo was supplied, so the duplicate reference was removed from the
    imgs array rather than showing the same picture twice in that rotating slider.
    The file is still on disk but is no longer referenced by any code.

FILE QUIRKS worth knowing before re-encoding
  tmtbars            - no file extension; it is a JPEG (800x552)
  clad plate.webp    - .webp extension but the contents are actually JPEG (700x446)
  s-s-sheet-.avif    - AVIF, 800x450, needs ffmpeg to decode
  ss-welded-steel.avif - AVIF, 765x441, needs ffmpeg to decode
