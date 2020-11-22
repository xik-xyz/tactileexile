var v1;
let dancingWords = []
class DanceSpan {
  constructor(element, x, y) {
    element.position(x, y);
    this.element = element;
    this.x = x;
    this.y = y;
  }

  brownian() {
    this.x += random(-10, 10);
    this.y += random(-6, 6);
    this.element.position(this.x, this.y);
  }
}

function preload() {
  v1 = createVideo("001.mp4");
  
}

function setup() {
createCanvas(windowWidth, windowHeight);
  
v1.loop();
v1.volume(0.2);

  v2 = createVideo("002.mp4");
  v2.size(width/2, height/2); 
  v60 = createVideo("060.mp4");
  v60.size(width, height);
  v60.loop();
  v60.volume(0);
  v70 = createVideo("070.mp4");
  v70.size(width/2, height/2);
  v80 = createVideo("080.mp4");
  v91 = createVideo("091.mp4");
  v91.size(width/2, height/2);
  
  v92 = createVideo("092.mp4");
  v92.size(width/3, height/3);
  v97 = createVideo("097.mp4");
  v97.size(width/6, height/3);
  v63 = createVideo("063.mp4");
  v63.size(width/2, height/2);  
  v20 = createVideo("020.mp4");
  v20.size(width/3, height/3);
  v29 = createVideo("029.mp4");
  v29.size(width/4, height/6);
  v13 = createVideo("013.mp4");
  v25 = createVideo("025.mp4");
  v25.size(width/3, height/3);
  v26 = createVideo("026.mp4");
  v26.size(width/2, height/2);
  v27 = createVideo("027.mp4");
  v27.size(width/3, height/3);
  v68 = createVideo("068.mp4");
  v68.size(width/3, height/3);
  v66 = createVideo("066.mp4");
  v66.size(width/2, height/3);
  v67 = createVideo("067.mp4");
  v67.size(width/3, height/3);
  v77 = createVideo("077.mp4");
  v77.size(width/4, height/4);
  v101 = createVideo("101.mp4");
  v101.size(width/3, height/13);
  v105 = createVideo("105.mp4");
  v105.size(width/13, height/3);
  v106 = createVideo("106.mp4");
  v106.size(width/3, height/7);
  v107 = createVideo("107.mp4");
  v107.size(width/7, height/3);
  
  noStroke();
  
  createP(
    'prostheses for cruelty of the mundane, omniscient kind. You_self-delude that you fail to recognise it. in exile from ecstasy, can we reach at_least for hospice. palliative or_penance, does there mandate a choice? a skeletally attenuated visual language penance for fear of feeling, for deceit, artificer. False_equivalence Cruelty is, more profoundly, the unrelenting agitation of a life that has become unnecessary or removed from_a_compelling_force. the ideas of perpetual conflict, a_spasm in which life is continually_lacerated, in which everything in creation rises up and asserts itself against our appointed rank. just as often a violent, physical_determination_to_shatter_a_false reality.employed metaphorically to describe the_essence_of_human existence.Reflection of a reality ravaged by_“disorder, famine, blood, war, and epidemics,” and to a complacent, product-oriented kind_of_consumable art that was unable to offer a true portrait of humanity.cruelty inflicted_on_viewers to_stir_them out_of_their everyday_torpor. Our anatomy is indivorceably an interface of receptors and nerves that hunger to be activated.Touch and the need for touch can really polarize my sense of self. It_is_both a lack and fuel. startlingly capricious; but perhaps organic fluctuation is a more compassionate_framing.Foodgrade polycarbonate, motor, beet sugar, silicone, porcelain tea ceremony accoutrements,hydroponic pump, garnet amaranth, tremella, zebrafish, wakame, lead zinc pins, sodium alginate, calcium lactate,(beads, jujube, goji), plumbing torch, bean curd sheet, air stones,').addClass('text').hide();
  const texts = selectAll('.text');

 
  for (let i = 0; i < texts.length; i++) {

    const paragraph = texts[i].html();
    const words = paragraph.split(' ');
    for (let j = 0; j < words.length; j++) {
      const spannedWord = createSpan(words[j]);
      const dw = new DanceSpan(spannedWord, random(windowWidth), random(4700));
      dancingWords.push(dw);
  
    }
  }
  
}

function draw() {
  background(0);
  
  v60.loadPixels();
  for (var y = 0; y < height; y += 18) {
    for (var x = 0; x < width; x += 18) {
      var offset = ((y*width)+x)*4;
      fill(v60.pixels[offset],
        v60.pixels[offset+1],
        v60.pixels[offset+2]);
      rect(x, y, 18, 18); 
    }
  }
  for (let i = 0; i < dancingWords.length; i++) {
    dancingWords[i].brownian();
  }


  if (frameCount % 400 == 0) {
    v1.hide();
    v1.volume(0);
    v2.loop();
    v2.size(width, height);
    v2.volume(0.15);
}
  if (frameCount % 600 == 0) {
    v80.loop();
    v80.volume(0.3);
    v60.hide();
    
}
 
  if (frameCount % 900 == 0) {
    v2.hide();
    v91.loop();
    v92.loop();
    v80.size(width, height);
    v2.volume(0);
    v80.volume(0);
}
  if (frameCount % 1200 == 0) {
    v70.size(width, height);
    v70.loop();
    v80.hide();
    v60.volume(0.3);
    v91.size(width, height);
    v92.size(width/0.5, height/0.5);
    
  }
if (frameCount % 1500 == 0) {
  v91.hide();
  v92.hide();
  v70.hide();
  v63.hide();
  v13.loop();
  v70.volume(0.15);
  v91.volume(0);
  v92.volume(0);
  
}
  if (frameCount % 1700 == 0) {
    
    v97.loop();
    v97.size(width/0.5, height/0.5);
    v60.loop();
    v20.loop();
    v20.size(width, height);
}
  if (frameCount % 2100 == 0) {
    v97.hide();
    v29.size(width, height);
    v29.loop();
    v25.loop();
    v25.size(width, height);
    v97.volume(0);
    v69 = createVideo("069.mp4");
    v60.size(width/3, height/3);
    v95 = createVideo("095.mp4");
    v95.size(width/3, height/3);
    
}
  if (frameCount % 2400 == 0) {
    v20.hide();
    v29.hide();
    v26.loop();
    v26.size(width/0.5, height/0.5);
    v27.loop();
    v27.size(width/0.5, height/0.5);
    v13.hide();
    v20.volume(0.15);
    v29.volume(0);
    v78 = createVideo("078.mp4");
}
  if (frameCount % 2800 == 0) {
    
    v68.loop();
    v25.hide();
    v13.volume(0);
    v76 = createVideo("076.mp4");
    v76.size(width/2, height/2);
    v94 = createVideo("094.mp4");
    v94.size(width/3, height/3);
    v96 = createVideo("096.mp4");
    v96.size(width/3, height/3);
}
  if (frameCount % 3300 == 0) {
    v26.hide();
    v27.hide();
    v69.loop();
    v69.size(width, height);
    v67.loop();
    v67.size(width, height);
    v66.loop();
    v66.size(width, height);
    v68.loop();
    v68.size(width/0.5, height/0.5);
    v94.loop();
    v94.size(width, height);
    v74 = createVideo("074.mp4");
}
  if (frameCount % 3600 == 0) {
    v67.hide();
    v68.hide();
    v74.loop();
    v78.loop();
    v66.volume(0);
    v75 = createVideo("075.mp4");
    v75.size(width/4, height/4);    
    v87 = createVideo("087.mp4");
    v87.size(width/4, height/4);
    v79 = createVideo("079.mp4");
    v79.size(width/4, height/4);
    v69.volume(0.1);
}
  if (frameCount % 3900 == 0) {
    v69.hide();
    v66.hide();
    v75.loop();
    v75.size(width/2, height/2);
    v68.volume(0);
    v67.volume(0);
    v76 = createVideo("076.mp4");
    v78.volume(0);
    v101.loop();
    v101.size(width/0.5, height/0.5);
    v107.loop();
    v107.size(width, height);
    
}
  
  if (frameCount % 4200 == 0) {

    v74.volume(0);
    v75.volume(0);
    v78.hide();
    v74.hide();
    v75.hide();
    v76.loop();
    v76.size(width/2, height/2);
    v101.hide();
    v87.loop();
    v87.size(width/2, height/2);
    v79.loop();
    v79.size(width, height);
    v105.loop();
    v105.size(width/0.5, height/0.5);
    v94 = createVideo("094.mp4");
    v77.loop();
    v77.size(width, height);
    
}
  if (frameCount % 4700 == 0) {
    v79.hide();
    v76.hide();
    v76.volume(0);
    v77.hide();
    v77.volume(0);
    v101.hide();
    v101.volume(0);
    v87.hide();
    v87.volume(0);
    v106.loop();
    v106.size(width, height);
    v105.hide();  
}
  if (frameCount % 5000 == 0) {
   v106.hide();
    v94.loop();
    v94.size(width, height);
    v95.loop();
    v95.size(width, height); 
    v105.volume(0);
    v106.volume(0);
  }
  if (frameCount % 5500 == 0) {
    v95.hide();
    v94.hide();
    v94.volume(0);
    v95.volume(0);

  }
}  
