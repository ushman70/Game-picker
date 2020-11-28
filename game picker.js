// Full arrays
const FullAction = document.getElementById('Action/Adventure');
const FullFPS = document.getElementById('FPS');
const FullRPG = document.getElementById('RPG');
const FullHorror = document.getElementById('Horror');
const FullSports = document.getElementById('Sports');

// Horror
const Horror95med = document.getElementById('Horror-95-medium');
const Horror95hard = document.getElementById('Horror-95-hard');
const Horror01med = document.getElementById('Horror-01-medium');
const Horror01hard = document.getElementById('Horror-01-hard');
const Horror11med = document.getElementById('Horror-11-medium');
const Horror11hard = document.getElementById('Horror-11-hard');

// FPS
const FPS95med = document.getElementById('FPS-95-medium');
const FPS95hard = document.getElementById('FPS-95-hard');
const FPS01med = document.getElementById('FPS-01-medium');
const FPS01hard = document.getElementById('FPS-01-hard');
const FPS11med = document.getElementById('FPS-11-medium');
const FPS11hard = document.getElementById('FPS-11-hard');

// Action/Adventure

const Action95med = document.getElementById('Action/Adventure-95-medium');
const Action95hard = document.getElementById('Action/Adventure-95-hard');
const Action01med = document.getElementById('Action/Adventure-01-medium');
const Action01hard = document.getElementById('Action/Adventure-01-hard');
const Action11med = document.getElementById('Action/Adventure-11-medium');
const Action11hard = document.getElementById('Action/Adventure-11-hard');

// Sports

const Sports95med = document.getElementById('Sports-95-medium');
const Sports95hard = document.getElementById('Sports-95-hard');
const Sports01med = document.getElementById('Sports-01-medium');
const Sports01hard = document.getElementById('Sports-01-hard');
const Sports11med = document.getElementById('Sports-11-medium');
const Sports11hard = document.getElementById('Sports-11-hard');

// RPGs
const RPG95med = document.getElementById('RPG-95-medium');
const RPG95hard = document.getElementById('RPG-95-hard');
const RPG01med = document.getElementById('RPG-01-medium');
const RPG01hard = document.getElementById('RPG-01-hard');
const RPG11med = document.getElementById('RPG-11-medium');
const RPG11hard = document.getElementById('RPG-11-hard');



FullAction.addEventListener('click', function(e) {
    Arr = ['Metal Gear Solid', 'Metal Gear Solid 2 Sons of liberty', 'Metal Gear Solid 3 Snake eater', 
    'Metal Gear Solid 4 Guns of the Patriots', 'Jak: Precursors legacy', 'Jak 2', 'Jak 3', 'Gears of War',
  'Super Mario World', 'Metroid Prime', 'Metroid Prime 2', 'Super Smash Bros.', 'Ape Escape', 'Oddworld: Abes Oddysee',
 'Battletoads', 'Sonic Adventure', 'Sonic Adventure 2 battle', 'Megaman 8', 'Ninja Gaiden', 'Yaiba: Ninja Gaiden Z', 
  'Ninja Gaiden 3', 'Skyrim', 'Last of us', 'Spelunky', 'Yakuza 0', 'Dynasty warriors gundam', 'Ori and the will of the wisps',
  'Dragonballz Kakarot', 'Granblue Fantasy Versus', 'Darksiders: Genesis', 'Devil May Cry 5', 
  'Devil May Cry', 'Megaman Zero', 'Megaman ZX', 'Pathologic 2', 'Samurai Showdown', 'Blaster Master Zero'];
  let newline = "\r\n";
  for(i = 0; i < Arr.length; i++) {
    Arr[i] += newline;
  }
  alert(Arr.join(' '));
});

FullFPS.addEventListener('click', function(e) {
  Arr = ['Back Track', 'Blake Stone: Aliens of gold', 'Blood', 'Carnivores',
  'Corridor 7', 'Counter Strike', 'Daikatana', 'Delta Force', 'Depth dwellers', 'Deus', 
  '007: Quantum of Solace', 'Americas Army', 'AquaNox', 'Shadow Ops: Red Mercury',
  'The ship', 'SiN Episodes: Emergence', 'Serious Sam: The First Encounter', 'Sniper Ghost Warrior', 
  'Armorines: Project S.W.A.R.M', 'Chasm: The rift', 'Congo the Movie: The Lost City of Zinj',
  'Cyberdillo', 'CyClones', 'CyberMage: Darklight Awakening', 'Descent II', 'DefCon 5', 
  'Alpha Prime', 'Shattered Horizon', 'The stalin subway', 'Starship troopers', 
  'Swat 4', 'Terrawars: New York invasion', 'Tribes aerial assault', 
  'Deep Rock Galactic', 'Blood Fresh Supply', 'Arma Cold War Assault', 
  'Doom 3 BFG edition', 'eldritch', 'Heavy Fire Afghanistan', 'Counterstrike Global offensive',
  'Homefront the Revolution', 'Hunt Showdown', 'Mothergunship'];
  let newline = "\r\n";
  for(i = 0; i < Arr.length; i++) {
    Arr[i] += newline;
  }
  alert(Arr.join(' '));
});

FullRPG.addEventListener('click', function(e) {
 Arr = ['Chrono Cross', 'Alundra 2', 'Ancient Roman Power of Darkside', 'Blaze and Blade eternal quest', 
 'Dark Stone Evil Reigns', 'Digimon World', 'Dragon Drive', 'Suikoden', 'Kings Field 2', 'Legend of Legaia', 
 'Angelique tenkuu no requiem', 'Beyond the beyond', 'Brave Prove', 
 'Crime Crackers', 'End Sector', 'First Queen 4 Varcia Senki', 'Go-Jin Senki', 'MereManoid', 'Moon World', 
 'The Mystic Dragoons', '.hack//G.U. vol. 1//Rebirt', 'Baldurs Gate Dark Alliance', 'The bard tale', 'Bomberman land 3', 
 'Champions of Norrath', 'Dark Angel Vampire apocalypse', 'Dawn of Mana', 'Dark Cloud', 'Dokapon Kingdom', 
 'Dual Hearts', 'Demon Bane', 'Endonesia', 'Forever Kingdom', 'Magna Carta Tears of Blood', 'Monster Hunter', 
 'The nightmare of druaga', 'Odin Sphere', 'Pride of the dragon peace', 'Rogue Hearts dungeon', 'Star Ocean 3 Till the end of time', 
 '9th dawn 3 Shadow of Erthil', 'Ara Fell enhanced edition', 'Arc of Alchemist', 'Asdivine Hearts', 
'Bastion', 'Battle Chaser Nightwar', 'Book of Demons', 'The caligula effect: Overdose', 'Child of Light', 'Chronus Arc', 
'Absolver', 'APB Reloaded', 'Bound by flame', 'Code Vein', 'Cross Code', 'Crypt of the necrodancer', 
'Darkest Dungeon', 'Deaths Gambit', 'The incredible adventures of Van helsing 3', 'Let it die', 
'Lord of the Fallen - Ancient labyrinth'];
let newline = "\r\n";
for(i = 0; i < Arr.length; i++) {
  Arr[i] += newline;
}
alert(Arr.join(' '));
});

FullHorror.addEventListener('click', function(e) {
   Arr=['Resident evil 2', 'Phantasmogoria', 'Silent Hill', 'Parasite Eve', 'Resident evil 3 Nemesis',
   'Sanitarium', 'D', 'system shock ', 'clock tower', 'Resident Evil Remake', 'The 11th hour', 'AnchorHead', 
   'Alone in the Dark', 'The 7th guest', 'Harvester', 'Silverload', 
   'bioforge', 'System Shock 2', 'Enemy zero', 'Evil dead: Hail to the king', 
   'Ecstatica', 'Hell: A cyber punk thriller', 'Alan Wake', 'Akai Ito', 'Area 51', 'Barrow Hill Curse of the ancient circle', 'Buffy the vampire slayer',
   'Calling', 'Doom 3', 'Monster Madness', 'Necronomicon the dawning of darkness', 
    'Necrovision', 'Mystic Nights', 'Manhunt', 'Lifeline', 'Noseferatu The wrath of malachi', 
    'Pathologic', 'Resident evil Outbreak', 'Resident evil outbreak 2', 'scratches', 'Siren', 'Siren 2', 
    'Resident Evil 7', 'Outlast', 'Araya', 'Bendy and the ink mahcine', 'bloodrayne betrayl',
    'Corpse Party Book of shadows', 'Remothered Tormented Fathers', 'Rise of nightmares',
     'Shadows of the damned', 'The sinking city', '2Dark', '7 days to die', 'Slender', 'Teleglitch', 'We happy few', 
     'ZombiU', 'Hunt Showdown', 'Lucius', 'Prey'];
     let newline = "\r\n";
     for(i = 0; i < Arr.length; i++) {
       Arr[i] += newline;
     }
     alert(Arr.join(' '));
});

FullSports.addEventListener('click', function(e) {
  Arr = ['Actua Golf 3', 'Viva Soccer', 'All star Tennis 99', 'Bass Fishermen', 
  'Bottom of the 9th', 'California Surfing', 'Classic Road 2', 'Dave mirra Freestyle BMX', 
  'Dead Ball Zone', 'Boxers Road', 'Contender', 'Fighting Illusion V k-1 grand prix 99', 
  'Nagano Winter Olympics 98', 'International Track and Field 2000', 'KickBoxing', 
  'NHL powerplay 96', 'AFL Live 2004', 'Alpine racer 3', 'Backyard football 10', 'Biathlon 2008', 'Cabelas dangerous hunt', 
  'Championship manager 2007', 'Club football', 'ESPN NFL 2k5', 'ESPN NBA Basketball', 
  'Hot shots tennis', 'Eyeshield 21: AmeFoot Yarouze! Ya! Ha!', 'Eyetoy Antigrav', 'G1 Jockey', 
  'Gallop Racer 01', 'Soccer America', 'Hotshots Golf Online', 'J.League Pro Soccer Club o Tsukurou! 5', 
  'Jonny Moseley Mad Trix', 'King of clubs', 'Love * Smash! 5', 'NHL Hitz Pro', 
  'Creed Rise to Glory', 'Dead or Alive Extreme 3', 'EA sports UFC 4', 
  'Hustle Kings', 'Winning Eleven', 'WWE 2020', 'Wild Turkey Hunter', 'Gran Turismo Sport', 
  'Super Mega Base ball 2', 'Premium Pool arena', 'NBA 2k Playgrounds 2', 
  'Toro', 'VIDEOBALL', 'Tennis World Tour', 'Surf World Series'];
  let newline = "\r\n";
  for(i = 0; i < Arr.length; i++) {
    Arr[i] += newline;
  }
  alert(Arr.join(' '));
});

Horror95med.addEventListener('click', function(e) {
  Arr = [ 'Resident evil 2', 'Phantasmogoria', 'Silent Hill', 'Parasite Eve', 'Resident evil 3 Nemesis',
 'Sanitarium', 'D', 'system shock ', 'clock tower', 'Resident Evil Remake', 'The 11th hour', 'AnchorHead'];
 let newline = "\r\n";
  for(i = 0; i < Arr.length; i++) {
    Arr[i] += newline;
  }
  alert(Arr.join(' '));
});

Horror95hard.addEventListener('click', function(e) {
  Arr = ['Alone in the Dark', 'The 7th guest', 'Harvester', 'Silverload', 
 'bioforge', 'System Shock 2', 'Enemy zero', 'Evil dead: Hail to the king', 
 'Ecstatica', 'Hell: A cyber punk thriller'];
 let newline = "\r\n";
  for(i = 0; i < Arr.length; i++) {
    Arr[i] += newline;
  }
  alert(Arr.join(' '));
});

Horror01med.addEventListener('click', function(e) {
  Arr = ['Alan Wake', 'Akai Ito', 'Area 51', 'Barrow Hill Curse of the ancient circle', 'Buffy the vampire slayer',
 'Calling', 'Doom 3', 'Monster Madness', 'Necronomicon the dawning of darkness', 
  'Necrovision'];
  let newline = "\r\n";
  for(i = 0; i < Arr.length; i++) {
    Arr[i] += newline;
  }
  alert(Arr.join(' '));
});

Horror01hard.addEventListener('click', function(e) {
 Arr = ['Mystic Nights', 'Manhunt', 'Lifeline', 'Noseferatu The wrath of malachi', 
 'Pathologic', 'Resident evil Outbreak', 'Resident evil outbreak 2', 'scratches', 'Siren', 'Siren 2'];
 let newline = "\r\n";
  for(i = 0; i < Arr.length; i++) {
    Arr[i] += newline;
  }
  alert(Arr.join(' '));
});

Horror11med.addEventListener('click', function(e) {
  Arr = ['Resident Evil 7', 'Outlast', 'Araya', 'Bendy and the ink mahcine', 'bloodrayne betrayl',
 'Corpse Party Book of shadows', 'Remothered Tormented Fathers', 'Rise of nightmares',
  'Shadows of the damned', 'The sinking city'];
  let newline = "\r\n";
  for(i = 0; i < Arr.length; i++) {
    Arr[i] += newline;
  }
  alert(Arr.join(' '));
});

Horror11hard.addEventListener('click', function(e) {
  Arr = ['2Dark', '7 days to die', 'Slender', 'Teleglitch', 'We happy few', 
  'ZombiU', 'Hunt Showdown', 'Lucius', 'Prey'];
  let newline = "\r\n";
  for(i = 0; i < Arr.length; i++) {
    Arr[i] += newline;
  }
  alert(Arr.join(' '));
});

FPS95med.addEventListener('click', function(e) {
  Arr = ['Back Track', 'Blake Stone: Aliens of gold', 'Blood', 'Carnivores',
 'Corridor 7', 'Counter Strike', 'Daikatana', 'Delta Force', 'Depth dwellers', 'Deus'];
 let newline = "\r\n";
  for(i = 0; i < Arr.length; i++) {
    Arr[i] += newline;
  }
  alert(Arr.join(' '));
});

FPS95hard.addEventListener('click', function(e) {
  Arr = ['Armorines: Project S.W.A.R.M', 'Chasm: The rift', 'Congo the Movie: The Lost City of Zinj',
 'Cyberdillo', 'CyClones', 'CyberMage: Darklight Awakening', 'Descent II', 'DefCon 5'];
 let newline = "\r\n";
  for(i = 0; i < Arr.length; i++) {
    Arr[i] += newline;
  }
  alert(Arr.join(' '));
});

FPS01med.addEventListener('click', function(e) {
  Arr = ['007: Quantum of Solace', 'Americas Army', 'AquaNox', 'Shadow Ops: Red Mercury',
 'The ship', 'SiN Episodes: Emergence', 'Serious Sam: The First Encounter', 'Sniper Ghost Warrior'];
 let newline = "\r\n";
  for(i = 0; i < Arr.length; i++) {
    Arr[i] += newline;
  }
  alert(Arr.join(' '));
});

FPS01hard.addEventListener('click', function(e) {
  Arr = ['Alpha Prime', 'Shattered Horizon', 'The stalin subway', 'Starship troopers', 
 'Swat 4', 'Terrawars: New York invasion', 'Tribes aerial assault'];
 let newline = "\r\n";
  for(i = 0; i < Arr.length; i++) {
    Arr[i] += newline;
  }
  alert(Arr.join(' '));
});

FPS11med.addEventListener('click', function(e) {
  Arr = ['Blacklight Retribution', 'Brink', 'Breach', 'Bulletstorm', 'Call of juarez the cartel',
 'conduit 2', 'consortium', 'The darkness 2', 'Dead island', 'Diehard Nakatomi Plaza'];
 let newline = "\r\n";
  for(i = 0; i < Arr.length; i++) {
    Arr[i] += newline;
  }
  alert(Arr.join(' '));
});

FPS11hard.addEventListener('click', function(e) {
  Arr = ['Deep Rock Galactic', 'Blood Fresh Supply', 'Arma Cold War Assault', 
 'Doom 3 BFG edition', 'eldritch', 'Heavy Fire Afghanistan', 'Counterstrike Global offensive',
 'Homefront the Revolution', 'Hunt Showdown', 'Mothergunship'];
 let newline = "\r\n";
  for(i = 0; i < Arr.length; i++) {
  Arr[i] += newline;
  }
  alert(Arr.join(' '));
});

Action95med.addEventListener('click', function(e) {
  Arr = ['The journeyman project 2', 'Dark Earth', 'The curse of monkey Island', 
'Zork Grand inquisitor', 'Metal slug', 'Crash Bandicoot 3 Warped', 'Gex', 'Jersey devil',
 'Tomba the wild adventures!', ''];
 let newline = "\r\n";
 for(i = 0; i < Arr.length; i++) {
  Arr[i] += newline;
  }
  alert(Arr.join(' '));
});

Action95hard.addEventListener('click', function(e) {
  Arr = ['Skeleton Warriors', 'CT Special Forces Back To Hell', 'Ironman/X-O Manowar In Heavy Metal', 
'Heart of Darkness', 'Metal Slug', 'Nightlong', 'Shivers 2 Harvest Of Souls', 'Atlantis The Lost Tales', 
'Nightmare Creatures', 'Shadow Man'];
let newline = "\r\n";
for(i = 0; i < Arr.length; i++) {
  Arr[i] += newline;
  }
  alert(Arr.join(' '));
});

Action01med.addEventListener('click', function(e) {
  Arr = ['Ape Escape 3', 'Evil Twin Cypriens Chronicles', 'Haven Call of the king', 
'Korobot adventure', 'Maximo vs Army of Zin', 'Psychonauts', 'Whiplash', 'Akudaikan 3', 'Blood Will Tell'];
let newline = "\r\n";
for(i = 0; i < Arr.length; i++) {
  Arr[i] += newline;
  }
  alert(Arr.join(' '));
});

Action01hard.addEventListener('click', function(e) {
  Arr = ['Contra Shattered Solidier', 'Crime life gang wars', 'Death By Degrees', 
'Dragon Lair 3D', 'Yaiba Ninja Gaiden Z', 'Wonder Boy In Monster World'];
let newline = "\r\n";
for(i = 0; i < Arr.length; i++) {
  Arr[i] += newline;
  }
  alert(Arr.join(' '));
});

Action11med.addEventListener('click', function(e) {
  Arr = ['Way of the Samurai 3', 'Retro City Rampage', 'Okami HD', 'Anodyne', 'Blasphemous', 
'Bloodstained Curse of The Moon', 'Control', 'Dragon Quest Builders', 'For Honor', 'Ghost of A Tale'];
let newline = "\r\n";
for(i = 0; i < Arr.length; i++) {
  Arr[i] += newline;
  }
  alert(Arr.join(' '));
});

Action11hard.addEventListener('click', function(e) {
  Arr = ['Generation Zero', 'Vaccine', 'Dark Devotion', 'Darkwood', 'Ashen', 
'Ancestors the humankind oddessy', 'Ark survival evolved', 'Badland Game of the Year Edition', 
'Darksiders 3', 'Dreams', 'Frost Punk Console Edition'];
let newline = "\r\n";
for(i = 0; i < Arr.length; i++) {
  Arr[i] += newline;
  }
  alert(Arr.join(' '));
});

Sports95med.addEventListener('click', function(e) {
  Arr = ['Actua Golf 3', 'Viva Soccer', 'All star Tennis 99', 'Bass Fishermen', 
'Bottom of the 9th', 'California Surfing', 'Classic Road 2', 'Dave mirra Freestyle BMX', 
'Dead Ball Zone'];
let newline = "\r\n";
for(i = 0; i < Arr.length; i++) {
  Arr[i] += newline;
  }
  alert(Arr.join(' '));

});

Sports95hard.addEventListener('click', function(e) {
  Arr = ['Boxers Road', 'Contender', 'Fighting Illusion V k-1 grand prix 99', 
'Nagano Winter Olympics 98', 'International Track and Field 2000', 'KickBoxing', 
'NHL powerplay 96'];
let newline = "\r\n";
for(i = 0; i < Arr.length; i++) {
  Arr[i] += newline;
  }
  alert(Arr.join(' '));
});

Sports01med.addEventListener('click', function(e) {
 Arr = ['AFL Live 2004', 'Alpine racer 3', 'Backyard football 10', 'Biathlon 2008', 'Cabelas dangerous hunt', 
'Championship manager 2007', 'Club football', 'ESPN NFL 2k5', 'ESPN NBA Basketball', 
'Hot shots tennis'];
let newline = "\r\n";
for(i = 0; i < Arr.length; i++) {
  Arr[i] += newline;
  }
  alert(Arr.join(' '));
});

Sports01hard.addEventListener('click', function(e) {
 Arr = ['Eyeshield 21: AmeFoot Yarouze! Ya! Ha!', 'Eyetoy Antigrav', 'G1 Jockey', 
'Gallop Racer 01', 'Soccer America', 'Hotshots Golf Online', 'J.League Pro Soccer Club o Tsukurou! 5', 
'Jonny Moseley Mad Trix', 'King of clubs', 'Love * Smash! 5', 'NHL Hitz Pro'];
let newline = "\r\n";
for(i = 0; i < Arr.length; i++) {
  Arr[i] += newline;
  }
  alert(Arr.join(' '));
});

Sports11med.addEventListener('click', function(e) {
  Arr = ['Creed Rise to Glory', 'Dead or Alive Extreme 3', 'EA sports UFC 4', 
'Hustle Kings', 'Winning Eleven', 'WWE 2020', 'Wild Turkey Hunter', 'Gran Turismo Sport'];
let newline = "\r\n";
for(i = 0; i < Arr.length; i++) {
  Arr[i] += newline;
  }
  alert(Arr.join(' '));
});

Sports11hard.addEventListener('click', function(e) {
  Arr = ['Super Mega Base ball 2', 'Premium Pool arena', 'NBA 2k Playgrounds 2', 
'Toro', 'VIDEOBALL', 'Tennis World Tour', 'Surf World Series'];
let newline = "\r\n";
for(i = 0; i < Arr.length; i++) {
  Arr[i] += newline;
  }
  alert(Arr.join(' '));
});

RPG95med.addEventListener('click', function(e) {
  Arr = ['Chrono Cross', 'Alundra 2', 'Ancient Roman Power of Darkside', 'Blaze and Blade eternal quest', 
'Dark Stone Evil Reigns', 'Digimon World', 'Dragon Drive', 'Suikoden', 'Kings Field 2', 'Legend of Legaia'];
let newline = "\r\n";
for(i = 0; i < Arr.length; i++) {
  Arr[i] += newline;
  }
  alert(Arr.join(' '));
});

RPG95hard.addEventListener('click', function(e) {
  Arr = ['Angelique tenkuu no requiem', 'Beyond the beyond', 'Brave Prove', 
'Crime Crackers', 'End Sector', 'First Queen 4 Varcia Senki', 'Go-Jin Senki', 'MereManoid', 'Moon World', 
'The Mystic Dragoons'];
let newline = "\r\n";
for(i = 0; i < Arr.length; i++) {
  Arr[i] += newline;
  }
  alert(Arr.join(' '));
});

RPG01med.addEventListener('click', function(e) {
  Arr =['.hack//G.U. vol. 1//Rebirt', 'Baldurs Gate Dark Alliance', 'The bard tale', 'Bomberman land 3', 
'Champions of Norrath', 'Dark Angel Vampire apocalypse', 'Dawn of Mana', 'Dark Cloud', 'Dokapon Kingdom', 
'Dual Hearts'];
let newline = "\r\n";
for(i = 0; i < Arr.length; i++) {
  Arr[i] += newline;
  }
  alert(Arr.join(' '));
});

RPG01hard.addEventListener('click', function(e) {
  Arr =['Demon Bane', 'Endonesia', 'Forever Kingdom', 'Magna Carta Tears of Blood', 'Monster Hunter', 
'The nightmare of druaga', 'Odin Sphere', 'Pride of the dragon peace', 'Rogue Hearts dungeon', 'Star Ocean 3 Till the end of time'];
let newline = "\r\n";
for(i = 0; i < Arr.length; i++) {
  Arr[i] += newline;
  }
  alert(Arr.join(' '));
});

RPG11med.addEventListener('click', function(e) {
  Arr = ['9th dawn 3 Shadow of Erthil', 'Ara Fell enhanced edition', 'Arc of Alchemist', 'Asdivine Hearts', 
'Bastion', 'Battle Chaser Nightwar', 'Book of Demons', 'The caligula effect: Overdose', 'Child of Light', 'Chronus Arc'];
let newline = "\r\n";
for(i = 0; i < Arr.length; i++) {
  Arr[i] += newline;
  }
  alert(Arr.join(' '));
});

RPG11hard.addEventListener('click', function(e) {
  Arr = ['Absolver', 'APB Reloaded', 'Bound by flame', 'Code Vein', 'Cross Code', 'Crypt of the necrodancer', 
'Darkest Dungeon', 'Deaths Gambit', 'The incredible adventures of Van helsing 3', 'Let it die', 
'Lord of the Fallen - Acnient labyrinth'];
let newline = "\r\n";
for(i = 0; i < Arr.length; i++) {
  Arr[i] += newline;
  }
  alert(Arr.join(' '));
});













 

