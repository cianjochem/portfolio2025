<script>
  import { onMount } from 'svelte';
  let container;

  onMount(async () => {
    const p5Module = await import('p5');

    const sketch = (p) => {
      let font;
      let amount = 40;
      let baseText = ['C', 'I', 'A', 'N', '', 'J', 'O', 'C', 'H', 'E', 'M'];
      let myText = [];
      let fontLoaded = false;

      // Funktion zur zufälligen Verteilung der Buchstaben im myText-Array
      const regenerateTextLayout = () => {
        myText = [...baseText]; // neu kopieren
        for (let i = 0; i < 29; i++) {
          const space = p.int(p.random(1, 11 + i));
          myText.splice(space, 0, '');
        }
      };

      p.setup = () => {
        const canvas = p.createCanvas(p.windowWidth, 160);
        canvas.parent(container);
        canvas.style('z-index', '-1');
        canvas.style('position', 'absolute');

        p.loadFont(
          "https://cdn.glitch.com/ba7ae563-6481-4d92-8b25-48f6cd661df0%2FEverettMono-Regular-web.ttf?v=1617819670199",
          (loadedFont) => {
            font = loadedFont;
            fontLoaded = true;

            regenerateTextLayout(); // Erste Initialisierung

            // Update alle 2 Sekunden
            setInterval(() => {
              regenerateTextLayout(); // neu verteilen
              p.redraw(); // neu zeichnen
            }, 5000);
          },
          () => {
            console.error("❌ Font konnte nicht geladen werden.");
          }
        );

        p.noLoop(); // Nur auf Anfrage zeichnen
      };

      p.draw = () => {
        if (!fontLoaded) return;

        p.background(247);
        p.textFont(font);
        p.fill(0);
        p.textSize(16);

        const tileW = (p.width - 80) / amount;
        for (let x = 0; x < amount; x++) {
          p.push();
          p.translate(40 + x * tileW, 60);
          p.text(myText[x] || '', 0, 0);
          p.pop();
        }
      };

      p.windowResized = () => {
        p.resizeCanvas(p.windowWidth, 160);
        p.redraw(); // bei Resize ebenfalls neu zeichnen
      };
    };

    new p5Module.default(sketch);
  });
</script>

<div bind:this={container} class="p5-wrapper"></div>

<style>
  .p5-wrapper {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 160px;
    z-index: 0;
    pointer-events: none;
  }
</style>
