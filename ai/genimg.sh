#!/usr/bin/env bash
# FLUX image generation via HuggingFace router (per BUILD-SOP 2026-07-17)
set -u
OUT=/workspace/Websites/chandlerpergola.com/public/images
mkdir -p "$OUT"
LOG=/workspace/Websites/chandlerpergola.com/ai/genimg.log
: > "$LOG"

gen () {
  local name="$1"; local w="$2"; local h="$3"; local prompt="$4"
  local target="$OUT/$name"
  if [ -f "$target" ] && [ "$(stat -c%s "$target")" -gt 10000 ]; then
    echo "SKIP $name (exists $(stat -c%s "$target")b)" | tee -a "$LOG"; return 0
  fi
  local tries=0
  while [ "$tries" -lt 4 ]; do
    tries=$((tries+1))
    curl -s --max-time 120 -X POST "https://router.huggingface.co/together/v1/images/generations" \
      -H "Authorization: Bearer $HF_TOKEN" -H "Content-Type: application/json" \
      -d "$(python3 -c 'import json,sys; print(json.dumps({"model":"black-forest-labs/FLUX.1-schnell","prompt":sys.argv[1],"response_format":"b64_json","width":int(sys.argv[2]),"height":int(sys.argv[3])}))' "$prompt" "$w" "$h")" \
      | python3 -c "import json,sys,base64
try:
    d=json.load(sys.stdin)
    b=d['data'][0]['b64_json']
    open('$target','wb').write(base64.b64decode(b))
    print('OK')
except Exception as e:
    print('ERR',e); sys.exit(1)" >>"$LOG" 2>&1
    if [ -f "$target" ] && [ "$(stat -c%s "$target")" -gt 10000 ]; then
      echo "DONE $name ($(stat -c%s "$target")b) try=$tries" | tee -a "$LOG"; sleep 3; return 0
    fi
    echo "RETRY $name try=$tries" | tee -a "$LOG"; sleep 20
  done
  echo "FAIL $name after $tries" | tee -a "$LOG"; return 1
}

gen hero.png 1280 800 "Professional real estate photograph, a modern black aluminum louvered pergola with rotating roof slats casting linear shadows over a luxury Chandler Arizona backyard patio at golden hour, travertine pavers, sleek outdoor lounge furniture, desert landscaping with agave and palo verde, warm terracotta sunset light, stucco house behind, ultra realistic, architectural photography, wide angle"
gen custom-pergola.png 1024 768 "Professional photograph of a custom western red cedar pergola over a paver patio in an upscale Arizona backyard, warm wood grain beams, dappled sunlight, potted desert plants, string lights, golden hour, realistic architectural photography"
gen patio-cover.png 1024 768 "Professional photograph of an attached solid-roof patio cover on a tan stucco single-story Arizona home, deep cool shade over a patio with outdoor sofa and ceiling fan, desert backyard, bright blue sky, realistic real estate photography"
gen alumawood-cover.png 1024 768 "Professional photograph of a white wood-grain alumawood aluminum lattice patio cover attached to a stucco Arizona house, clean modern lines casting shadow patterns on a paver patio, desert landscaping, sunny day, realistic architectural photography"
gen louvered-pergola.png 1024 768 "Professional photograph of a modern white motorized louvered pergola with open adjustable aluminum roof slats over a pool deck patio in Arizona, sleek contemporary design, blue sky through the louvers, lounge chairs, realistic architectural photography golden hour"
gen ramada.png 1024 768 "Professional photograph of a freestanding solid-roof ramada with wood posts and stucco columns over an outdoor seating area beside a pool in a desert-landscaped Arizona backyard, Southwest architecture, warm evening light, realistic real estate photography"
gen shade-sail.png 1024 768 "Professional photograph of a triangular tan architectural shade sail canopy stretched over a swimming pool deck in a modern Arizona backyard, taut fabric geometry against blue sky, lounge chairs, realistic architectural photography, bright daylight"
gen outdoor-kitchen.png 1024 768 "Professional photograph of a built-in outdoor kitchen with stainless BBQ and stone bar under a wood pergola in a luxury Arizona backyard at dusk, warm ambient lighting, bar stools, desert landscaping, realistic architectural photography"
gen commercial-shade.png 1024 768 "Professional photograph of a large modern steel and fabric commercial shade structure over a restaurant patio with diners, clean architectural canopy, Arizona setting, warm daytime light, realistic commercial architectural photography"
gen ramada-blog.png 1024 768 "Professional photograph of a beautiful backyard ramada with outdoor lounge under solid roof, desert plants, Arizona, warm light, realistic"
gen about-team.png 1024 768 "Professional photograph of a construction crew installing a wood pergola beam in an Arizona backyard, workers in safety gear lifting a large cedar beam, bright daylight, authentic candid documentary style, realistic"
gen before.png 900 1100 "Professional photograph of a bare empty sun-baked concrete backyard patio slab against a tan stucco Arizona house with no shade, harsh midday sun, before renovation, realistic real estate photography"
gen after.png 900 1100 "Professional photograph of the same Arizona backyard patio transformed with a modern pergola patio cover, outdoor furniture, string lights and desert landscaping, cool shade, golden hour, after renovation, realistic real estate photography"
gen og-image.png 1200 630 "Cinematic wide banner photograph of a modern louvered pergola over an upscale Chandler Arizona backyard patio at golden hour, travertine pavers, desert landscaping, warm terracotta light, architectural photography"
gen service-areas.png 1024 768 "Aerial drone photograph of a Chandler Arizona suburban neighborhood of homes with tile roofs, backyard pools and patios, desert landscaping, palm trees, warm afternoon light, realistic"
gen blog-cost-guide.png 1024 640 "Professional photograph of a modern pergola over an Arizona backyard patio with a blueprint and calculator concept, warm golden hour light, clean architectural real estate photography"
gen blog-materials.png 1024 640 "Professional close-up photograph comparing three pergola material samples, cedar wood beam, powder-coated steel and wood-grain aluminum, laid on a workbench in warm light, realistic product photography"
gen blog-permit-hoa.png 1024 640 "Professional photograph of a newly built patio cover on a stucco Arizona home in an HOA neighborhood, tidy backyard, bright blue sky, realistic real estate photography"
gen blog-louvered.png 1024 640 "Professional photograph of a motorized louvered pergola with roof slats half open showing sun and shade transition over a modern patio, Arizona, realistic architectural photography"

echo "ALL DONE" | tee -a "$LOG"
ls -la "$OUT" | tee -a "$LOG"
