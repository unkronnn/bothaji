const { EmbedBuilder } = require('discord.js');
const config = require('../config/config.json');

module.exports = {
    customId: 'medusa_dayz',
    async execute(interaction) {
        const embed = new EmbedBuilder()
            .setTitle('🐍 Medusa : DayZ - Advanced External Cheat')
            .setDescription(`
### 🧾**Pricing**
**1 DAY**   — IDR 107.000 / $6.00
**7 DAY**   — IDR 445.250 / $25.00
**30 DAY**  — IDR 771.500 / $45.00

A premium product for the game DayZ from Medusa group.

### 💻**System Compatibility:**
• **Processors:** Intel & AMD (Xeon & FX Processors)
• **OS:** Windows 10 (all builds) & 11 (21H2, 22H2, 23H2)
• **Graphics:** Nvidia & AMD
• **Disk Format:** GPT & MBR
• **BIOS Mode:** UEFI & Legacy

### 🎮**Additional Information:**
• **Game Resolutions:** Borderless & Windowed
• **Game Mode:** Any
• **StreamProof:** Yes
• **Game Client:** Steam
• **Run from Flash Drive:** -
• **Software Type:** External
• **Built-in Spoofer:** -

### 🎯**Aimbot Features:**
• **Enable** - Toggle aimbot functionality
• **Radius** - Adjustable aimbot radius
• **Max Distance** - Maximum targeting distance
• **Random Body Part** - Unpredictable bone targeting
• **Body Part Selection** - Upper/Middle/Lower targeting
• **Target Selection** - Friends/Zombies/Animals targeting
• **Line to Target** - Solid/Gradient aim lines
• **Line Color** - Customizable line colors
• **Draw Circle** - Visual aim radius indicator

### 👁️**Visual ESP Features:**

**Players ESP:**
• **Enable** - Toggle player ESP
• **Friends** - Friend identification system
• **Box Style** - Multiple box styles
• **Solid Box** - Filled box display
• **Head Dot** - Head position indicator
• **Skeleton** - Bone structure display
• **Health Bar** - Visual health status
• **Information** - Name/Distance display
• **Information Color** - Customizable text colors
• **Inventory** - Player inventory preview
• **Item in Hands** - Current weapon display
• **Lines** - Snaplines to players
• **Max Distance** - Adjustable rendering distance

**Zombies ESP:**
• **Enable** - Toggle zombie ESP
• **Box Style** - Multiple zombie box styles
• **Solid Box** - Filled zombie boxes
• **Head Dot** - Zombie head indicators
• **Skeleton** - Zombie bone display
• **Health Bar** - Zombie health status
• **Information** - Zombie name/distance
• **Information Color** - Customizable zombie colors
• **Inventory** - Zombie loot preview
• **Lines** - Lines to zombies
• **Max Distance** - Zombie rendering range

**Animals ESP:**
• **Enable** - Toggle animal ESP
• **Icon** - Animal icon display
• **Health Bar** - Animal health status
• **Distance** - Animal distance display
• **Max Distance** - Animal rendering range

**Vehicles ESP:**
• **Enable** - Toggle vehicle ESP
• **Icon** - Vehicle icon display
• **Distance** - Vehicle distance information
• **Inventory** - Vehicle contents preview
• **Max Distance** - Vehicle rendering range

**Others ESP:**
• **Death Spots** - Player death locations
• **Heli Crash** - Helicopter crash sites
• **Bullet Lines** - Solid/Gradient bullet trajectories
• **Line Color** - Customizable bullet line colors
• **Crosshair** - Custom crosshair display

**Corpses ESP:**
• **Players Corpses** - Dead player locations with info
• **Zombie Corpses** - Dead zombie detection
• **Animal Corpses** - Dead animal locations
• **Hide in Battle Mode** - Toggle visibility in combat
• **Max Distance** - Corpse rendering range

### 💎**Loot System:**
• **Drawing Style** - Text only/Icon only/Icon + text
• **Information** - Quality, Category, Distance display
• **Categories** - 20+ loot categories with filtering
• **Quality Filtering** - Pristine to Destroyed items
• **Inventory Preview** - Loot contents display
• **Max Distance** - Loot rendering range
• **Battle Mode Toggle** - Hide loot during combat

### ⚙️**Miscellaneous Features:**
• **Free Camera** - Free camera movement
• **Night Vision** - Enhanced night visibility
• **Full Brightness** - Maximum brightness control
• **Time Change** - Custom time settings
• **Loot Through Walls** - See loot through obstacles
• **Local Position** - Current position display
• **Third-Person View** - External camera mode
• **Disable Grass** - Remove grass for visibility

### 🔧**Config Management:**
• **List** - View all configurations
• **Add** - Create new configs
• **Save** - Save current settings
• **Load** - Load saved configurations
• **Rename** - Rename configurations
• **Delete** - Remove configs
• **Default Autoload** - Auto-load favorite config
• **Export** - Export configurations
• **Export All** - Backup all configs
• **Import** - Import configurations
• **Reset Settings** - Restore defaults

### ⚙️**Settings Features:**
• **Menu Button** - Custom menu binding
• **Panic Button** - Emergency disable
• **Battle Mode Button** - Combat mode toggle
• **Main Color** - Theme color selection
• **Style** - Solid/Gradient themes
• **Theme** - Dark/Light interface
• **DPI Scale** - 100-150% interface scaling
• **Language** - English/Russian/Chinese
• **Save/Load** - Quick settings management

### 🗺️**Dead Places:**
• **Icon** - Death location markers
• **Time** - Death timestamp
• **Hide in Battle Mode** - Toggle visibility
• **Color** - Customizable colors
• **List** - Death location database
• **Clear List** - Reset death locations

### 👥**Player List:**
• **List** - Player roster display
• **Search** - Find specific players
• **Clear Friend List** - Reset friends
• **Nickname Setting** - Your survivor name

### 💎**Medusa Advantages:**
✅ **Advanced External Technology** - Maximum security
✅ **Comprehensive ESP System** - Unmatched situational awareness
✅ **Advanced Loot Filtering** - 20+ categories with quality control
✅ **Professional Config Management** - Complete profile system
✅ **Multi-Target Aimbot** - Friends/Zombies/Animals targeting
✅ **Visual Customization** - Extensive styling options
✅ **Battle Mode** - Combat-optimized settings
✅ **Multi-Language Support** - International accessibility

### 🎮**Perfect For:**
• Professional DayZ players
• Users wanting maximum features
• Streamers requiring customization
• Players who need loot optimization
• Users requiring profile management
• Those seeking advanced ESP control
• Players wanting professional tools

### 🧟**DayZ Features:**
• **Hardcore Survival** - Unforgiving gameplay mechanics
• **Complex Loot System** - Detailed item management
• **Player Economy** - Trading and social interactions
• **Base Building** - Construction and defense
• **Dynamic Events** - Random encounters and scenarios

### 🎯**Key Features:**
• **Professional ESP Suite** - Complete visual information system
• **Advanced Loot Management** - 20+ categories with quality filtering
• **Professional Config System** - Complete profile management
• **Multi-Target Aimbot** - Versatile targeting system
• **Extensive Customization** - Professional-level control
• **Battle Optimization** - Combat-ready features

---
**Professional external cheat for DayZ with advanced features and complete control!**`)
            .addFields(
                {
                    name: '`🎯` ADVANCED AIMBOT',
                    value: 'Multi-target system with friends/zombies/animals targeting and customization.'
                },
                {
                    name: '`💎` PROFESSIONAL ESP',
                    value: 'Complete visual system with 20+ loot categories and quality filtering.'
                },
                {
                    name: '`⚙️` CONFIG MASTERY',
                    value: 'Professional profile management with export/import and multi-language support.'
                },
                {
                    name: '`📞` PURCHASE',
                    value: 'Contact our staff to get your Medusa DayZ premium cheat.'
                }
            )
            .setColor('#9370DB')
            .setImage("https://media.discordapp.net/attachments/1412314599637651477/1434088815982547074/standard.gif?ex=69070ec9&is=6905bd49&hm=72938a9ccd33e000e36c93734e848d14d61c4208845c812a3496d250e63a7c68&=&width=936&height=120")
            .setThumbnail("https://media.discordapp.net/attachments/1412314599637651477/1434088772135424041/file.png.jpeg?ex=69070ebf&is=6905bd3f&hm=87262a13b8a787b6785849841506946668fc482be83748ec3e54c04133d32849&=&format=webp&width=700&height=700")
            .setFooter({
                text: 'Medusa DayZ • External • Advanced ESP • Professional Config',
                iconURL: interaction.guild.iconURL()
            });

        await interaction.reply({
            embeds: [embed],
            components: [],
            flags: [64]
        });
    },
};