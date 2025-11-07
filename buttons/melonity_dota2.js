const { EmbedBuilder } = require('discord.js');
const config = require('../config/config.json');

module.exports = {
    customId: 'melonity_dota2',
    async execute(interaction) {
        const embed = new EmbedBuilder()
            .setTitle('🍈 Melonity : Dota 2 - Advanced Auto & ESP Internal Cheat')
            .setDescription(`
### 🧾**Pricing**
**1 DAY**   — IDR 64.500 / $3.97
**7 DAY**   — IDR 214.750 / $13.21
**30 DAY**  — IDR 410.000 / $25.22
**90 DAY**  — IDR 1.024.500 / $63.01
**180 DAY** — IDR 1.844.000 / $113.41

A premium product for the game Dota 2 from Melonity group.

### 💻**System Compatibility:**
• **Processors:** Intel & AMD
• **OS:** Any Windows Version x64
• **Graphics:** Nvidia & AMD
• **Disk Format:** GPT & MBR
• **BIOS Mode:** UEFI & Legacy

### 🎮**Additional Information:**
• **Game Resolution:** Fullscreen, Borderless & Windowed
• **StreamProof:** Yes
• **Game Client:** Steam
• **Run from Flash Drive:** -
• **Built-in Spoofer:** Yes
• **Software Type:** Internal

### 🛠️**Player Features:**
• **AutoSnatch** - Automatically steal nearby items
• **Auto Control** - Prolong enemy control duration
• **ProCast Damage** - Kill indicator for ability damage
• **Global Failswitch** - Prevents incorrect ability presses
• **Auto Buy Tome** - Automatic Tome of Knowledge purchase
• **Items Helper** - Item usage assistance (Armlet toggling)
• **Blink Spam** - Auto Blink Dagger on cooldown
• **KillStealer** - Auto-target enemies for kills
• **HP-MP Abuse** - Maximize HP/MP restoration
• **Illusion Splitter** - Send illusions in different directions
• **Hit & Run** - Automated DPS with mobility
• **Pick Helper** - Auto-select hero, lane, chat messages
• **Shop Helper** - One-click item purchase with courier delivery
• **Tree Destroyer** - Automatically destroy enemy trees

### 🗺️**Map Features:**
• **MiniMap Ally Helper** - Ally information display
• **Rune Status** - Rune tracking and respawn timers
• **Ward Helper** - Optimal ward placement locations

### 👁️**Display (ESP) Features:**
• **Visible by Enemy** - Alert when enemies can see you
• **MapHack** - Enemy locations based on actions
• **Show Hidden Spells** - Reveal hidden abilities (SunStrike)
• **Ward Tracker** - Track enemy ward placements
• **Experience ESP** - Enemy presence detection
• **Show Cleared Camps** - Remove cleared camp icons
• **Illusion ESP** - Distinguish real heroes from illusions
• **Show Dropped Items** - Item drop locations
• **Jungle Helper** - Optimal jungle routes
• **Show Courier** - Enemy courier path prediction
• **Respawn MapHack** - Respawn positions and timers
• **Ability Alerts** - Important enemy action indicators

### 🛡️**Safeguard Features:**
• **Auto Dodge** - Avoid enemy abilities automatically
• **Auto Saver** - Protect allies from lethal abilities
• **Aggressive Disabler** - Auto-disable enemies in range
• **Auto Disabler** - Disable enemies upon initiation

### 📊**Information Features:**
• **Info Screen (Beta)** - Game information display
• **AlternativeOverlay** - Lightweight overlay for low-spec PCs
• **ItemPanel** - Enemy items in separate panel
• **MMR Tracking** - Track MMR changes after games
• **Notification** - Event notifications (Roshan respawn, etc.)
• **Range Display** - Cast ranges for items/abilities
• **Show Buff/Debuff** - Enemy buff/debuff with timers
• **Player Pick Analytics** - Player stats during selection

### 👹**Creep Features:**
• **Aggro/Deaggro** - Control creep aggro
• **Units Auto Push/Farm** - Send units to lanes/jungle
• **Jungle AFK Bot** - Automated jungle farming
• **Auto Neutrals** - Neutral creep assistance
• **Auto Stack** - Automatic jungle camp stacking
• **Creep Position** - Creep location display
• **Pull Helper** - Automatic jungle creep pulling
• **Creep Block** - Block allied/enemy creeps
• **Enemy Block** - Block enemies with controlled units
• **Auto Last Hit** - Last-hit assistance
• **Last Hit Indicator** - Last-hit popup notifications
• **Last Hit Markers** - Lane creep information
• **Stack Helper** - Jungle camp stacking assistance

### 😈**Griefing Features:**
• **Spam Roll** - Continuous chat rolling
• **Bad Guy** - Disruptive gameplay script

### ⚙️**General Features:**
• **Tree Changer** - Replace tree models
• **Dota Plus** - Unlock Dota Plus features
• **Inventory Changer** - All cosmetics unlocked
• **Force Sv Cheats** - Force console commands
• **Camera Hack** - Extended camera distance
• **Auto Accept** - Automatic match acceptance
• **Auto High Five** - Auto respond to high fives
• **T1 Glyph** - Auto-glyphs when T1 towers low
• **Auto Queue** - Automatic next game search
• **Fountain Bug Fix** - Fix invulnerability bug
• **River Changer** - Change river visuals
• **Rune Snatch** - Automatic rune stealing
• **Mini Games** - In-game mini-game collection
• **Unlock All Heroes** - All heroes unlocked
• **Weather Changer** - Weather effect control
• **Auto Buy/Leveling** - Automated leveling and purchases

### 🔧**Abuse Features:**
• **Roll Abuse** - Continuous rolling until desired result
• **Back Cast** - Directional casting without turning
• **Courier Automation** - Courier action combos
• **Enemy Role Display** - Show enemy player roles
• **Show Hidden Profiles** - View hidden player profiles
• **Unlock All Emotes** - All emotes unlocked
• **Take All Tutorial Rewards** - Auto-claim tutorial rewards

### 🦸**Hero Features:**
• **Strength Heroes** - Strength hero scripts
• **Agility Heroes** - Agility hero scripts
• **Intelligence Heroes** - Intelligence hero scripts
• **Targeting** - Advanced hero targeting
• **Combo Maker** - Custom hero combos

### ⚙️**Settings & Customization:**
• **Humanizer** - Human-like action delays
• **Render Settings** - Custom render options
• **Language Support** - English, Russian, Chinese
• **Script Management** - Toggle and manage scripts
• **Config Management** - Save/load configurations
• **Theme Options** - Multiple theme choices
• **OBS Bypass** - Stream-safe mode for OBS

### 💎**Melonity Advantages:**
✅ **Built-in Spoofer** - Complete protection suite
✅ **Advanced ESP** - Complete game awareness system
✅ **Creep Automation** - Comprehensive farming and blocking
✅ **Auto Features** - Extensive automation system
✅ **Inventory Changer** - All cosmetics unlocked
✅ **Hero Scripts** - Scripts for all hero types
✅ **MMR Tracking** - Progress monitoring
✅ **Low-Spec Support** - Alternative overlay option

### 🎮**Perfect For:**
• Players wanting comprehensive automation
• Users needing advanced ESP features
• Farmers seeking creep automation
• Streamers requiring safety
• Players with low-spec PCs
• Those who want all cosmetics
• Users needing progress tracking
• Players seeking hero optimization

### 🔮**Dota 2 Features:**
• **Complex Mechanics** - Abilities, items, runes
• **Creep Farming** - Resource management
• **Team Coordination** - 5v5 gameplay
• **Progression System** - MMR and ranking
• **Professional Scene** - Competitive integration

### 🎯**Key Features:**
• **Advanced ESP** - Complete game awareness with enemy detection
• **Creep Automation** - Comprehensive farming and blocking system
• **Auto Features** - Extensive automation for all game aspects
• **Built-in Spoofer** - Complete protection integration
• **Hero Scripts** - All hero types with advanced targeting
• **MMR Tracking** - Progress monitoring system

---
**Advanced internal cheat with auto features, ESP, and creep automation for comprehensive Dota 2 mastery!**`)
            .addFields(
                {
                    name: '`🎯` ADVANCED ESP',
                    value: 'Complete game awareness system with enemy detection through fog of war and action tracking.'
                },
                {
                    name: '`👹` CREEP AUTOMATION',
                    value: 'Comprehensive farming and blocking system with jungle routes and last-hit assistance.'
                },
                {
                    name: '`🛡️` BUILT-IN SPOOFER',
                    value: 'Complete protection suite with OBS bypass for content creation safety.'
                },
                {
                    name: '`📞` PURCHASE',
                    value: 'Contact our staff to get your Melonity Dota 2 premium cheat.'
                }
            )
            .setColor('#FF8C00')
            .setImage("https://media.discordapp.net/attachments/1412314599637651477/1434088815982547074/standard.gif?ex=69070ec9&is=6905bd49&hm=72938a9ccd33e000e36c93734e848d14d61c4208845c812a3496d250e63a7c68&=&width=936&height=120")
            .setThumbnail("https://media.discordapp.net/attachments/1412314599637651477/1434088772135424041/file.png.jpeg?ex=69070ebf&is=6905bd3f&hm=87262a13b8a787b6785849841506946668fc482be83748ec3e54c04133d32849&=&format=webp&width=700&height=700")
            .setFooter({
                text: 'Melonity Dota 2 • Internal • Advanced Features • Comprehensive ESP',
                iconURL: interaction.guild.iconURL()
            });

        await interaction.reply({
            embeds: [embed],
            components: [],
            ephemeral: true
        });
    },
};