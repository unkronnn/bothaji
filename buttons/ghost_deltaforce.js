const { EmbedBuilder } = require('discord.js');
const config = require('../config/config.json');

module.exports = {
    customId: 'ghost_deltaforce',
    async execute(interaction) {
        const embed = new EmbedBuilder()
            .setTitle('👻 Ghost : Delta Force - External Loot ESP Cheat')
            .setDescription(`
### 🧾**Pricing**
**1 DAY**   — IDR 78.500 / $4.50
**7 DAY**   — IDR 372.750 / $22.00
**30 DAY**  — IDR 729.000 / $43.00

A premium product for the game Delta Force from Ghost group.

### 💻**System Compatibility:**
• **Processors:** Intel & AMD
• **OS:** Windows 10 (all builds) & 11 (21H2, 22H2, 23H2, 24H2)
• **Graphics:** Nvidia & AMD
• **Disk Format:** GPT & MBR
• **BIOS Mode:** UEFI & Legacy

### 🎮**Additional Information:**
• **Game Resolutions:** Borderless & Windowed
• **Game Mode:** Any
• **StreamProof:** Yes
• **Game Client:** Official Launcher
• **Run from Flash Drive:** -
• **Software Type:** External
• **Built-in Spoofer:** Yes

### 👁️**Visuals (Players) Features:**
• **Enable Visual** - Toggle player ESP system
• **Box ESP** - Bounding box display
• **Box Type** - Multiple box style options
• **Name Display** - Player identification
• **Health Display** - Health status bars
• **Skeleton ESP** - Bone structure visualization
• **Snapline** - Visual lines to players
• **Distance Display** - Range information
• **Weapon Display** - Current weapon identification
• **Visible Check** - Line of sight verification
• **Max Distance** - Adjustable rendering range

### 👁️**Visuals (Loot) Features:**
• **Enable Loot** - Toggle loot detection system
• **Items Display** - General item detection
• **Quality Display** - Show item quality information
• **Price Display** - Item value information
• **Containers** - Container location detection
• **Corpse Display** - Death box locations
• **Max Distance** - Adjustable loot range

### 🎯**Aimbot Features:**
• **Enable Aimbot** - Toggle aimbot functionality
• **Show FOV** - Visual field of view indicator
• **Select Bone** - Target bone selection
• **Crosshair** - Custom crosshair display
• **Visible Check** - Line of sight targeting
• **Smooth** - Natural movement simulation
• **Max Distance** - Range limitation control

### ⚙️**Miscellaneous Features:**
• **DPI Scale** - Interface scaling adjustment
• **Save Config** - Save current settings
• **Load Config** - Load saved configurations

### 💎**Ghost Advantages:**
✅ **Built-in Spoofer** - Complete protection suite
✅ **Loot ESP System** - Complete item and container detection
✅ **Quality Display** - Item quality and price information
✅ **External Security** - Maximum stability and safety
✅ **StreamProof** - Safe for content creation
✅ **Simple Interface** - User-friendly controls
✅ **Config Management** - Save/load system
✅ **Comprehensive Visuals** - Player and loot detection

### 🎮**Perfect For:**
• Players focused on loot optimization
• Users wanting maximum protection
• Streamers requiring safety
• Those who need item information
• Players seeking external stability
• Users who want quality information
• Players who need comprehensive ESP

### 🪖**Delta Force Features:**
• **Loot System** - Equipment and item management
• **Quality System** - Item condition and value
• **Container System** - Storage and loot boxes
• **Tactical Combat** - Strategic gameplay
• **Resource Management** - Equipment optimization

### 🎯**Key Features:**
• **Loot ESP System** - Complete item and container detection with quality
• **Built-in Spoofer** - Complete protection integration
• **Quality Display** - Item quality and price information
• **External Security** - Maximum stability and safety
• **Comprehensive Visuals** - Player and loot detection
• **Config Management** - Save and load settings

---
**External cheat with comprehensive loot ESP and built-in spoofer for tactical Delta Force advantage!**`)
            .addFields(
                {
                    name: '`💎` LOOT ESP SYSTEM',
                    value: 'Complete item and container detection with quality and price information.'
                },
                {
                    name: '`🛡️` BUILT-IN SPOOFER',
                    value: 'Complete protection suite integrated for maximum security and safety.'
                },
                {
                    name: '`🔒` EXTERNAL SECURITY',
                    value: 'Maximum stability and safety with external technology.'
                },
                {
                    name: '`📞` PURCHASE',
                    value: 'Contact our staff to get your Ghost Delta Force premium cheat.'
                }
            )
            .setColor('#9370DB')
            .setImage("https://media.discordapp.net/attachments/1412314599637651477/1434088815982547074/standard.gif?ex=69070ec9&is=6905bd49&hm=72938a9ccd33e000e36c93734e848d14d61c4208845c812a3496d250e63a7c68&=&width=936&height=120")
            .setThumbnail("https://media.discordapp.net/attachments/1412314599637651477/1434088772135424041/file.png.jpeg?ex=69070ebf&is=6905bd3f&hm=87262a13b8a787b6785849841506946668fc482be83748ec3e54c04133d32849&=&format=webp&width=700&height=700")
            .setFooter({
                text: 'Ghost Delta Force • External • Built-in Spoofer • Loot ESP',
                iconURL: interaction.guild.iconURL()
            });

        await interaction.reply({
            embeds: [embed],
            components: [],
            flags: [64]
        });
    },
};