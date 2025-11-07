const { EmbedBuilder } = require('discord.js');
const config = require('../config/config.json');

module.exports = {
    customId: 'umbrella_dota2',
    async execute(interaction) {
        const embed = new EmbedBuilder()
            .setTitle('☂️ Umbrella : Dota 2 - Internal KAIO & Inventory Changer Cheat')
            .setDescription(`
### 🧾**Pricing**
**7 DAY**   — IDR 59.000 / $3.50
**14 DAY**  — IDR 93.750 / $5.50
**30 DAY**  — IDR 148.500 / $8.50
**90 DAY**  — IDR 394.500 / $23.50
**180 DAY** — IDR 788.250 / $47.00

A premium product for the game Dota 2 from Umbrella group.

### 💻**System Compatibility:**
• **Processors:** Intel & AMD
• **OS:** Any Windows Version x64
• **Graphics:** Nvidia & AMD
• **Disk Format:** GPT & MBR
• **BIOS Mode:** UEFI & Legacy

### 🎮**Additional Information:**
• **Game Resolutions:** Fullscreen, Borderless & Windowed
• **Game Mode:** Any
• **StreamProof:** Yes
• **Game Client:** Steam
• **Built-in Spoofer:** Yes
• **Software Type:** Internal

### 🛠️**Utility Features:**
• **Auto Accept** - Automatically accepts matches
• **Unlock Dota Plus** - Unlocks Dota Plus features
• **Auto Disabler** - Prevents enemy initiation
• **Rune Snatcher** - Auto-selects runes
• **Zoom Hack** - Enhanced map visibility
• **Unit Blocker** - Automatic creep stopping
• **Weather** - Change weather without store items
• **Auto Buy Tome** - Purchases timing books automatically
• **Tree Changer** - Replaces familiar trees
• **Auto Stack** - Auto-stacks controlled units
• **Back Cast** - Directional casting without turning
• **Courier Helper** - Simplifies courier management
• **Custom Range Radius** - Visual range indicators
• **Dodger/Auto-Saver** - Auto-dodges abilities
• **Global Utilities** - Advanced utility functions
• **Illusion Controller** - Easy illusion management
• **Kill Stealer** - Finishes enemies with abilities/items
• **MP/HP Abuse** - Quick item usage for mana/HP
• **Pseudo Random Distribution** - Predicts drop chances
• **PT Switcher** - Attribute switching for casting
• **Silver Edge Abuse** - Attack speed manipulation
• **Snatcher** - Auto-picks up items and runes

### 👁️**Awareness Features:**
• **Ability Alert** - Notifications about ability usage
• **Jungle Map Hack** - Enemy jungle locations through fog
• **Visible by Enemy** - Alert when enemies see you
• **Manabars** - Enemy mana display
• **Show Hidden Spells** - Reveals hidden abilities
• **Show Illusions** - Display enemy illusions
• **Cooldown Display** - Visual cooldown indicators
• **Notification System** - Visual and sound notifications

### 💬**Chat Features:**
• **Fake Leaver** - Fake leave messages
• **Fake Chat** - Send messages as other players
• **Color Chat/Anti-mute** - Send colored messages even with low decency

### 🎮**Match Abuse Features:**
• **Dodge Toxics** - Avoid toxic players
• **Snipe Players** - Target specific players
• **Abuse Score RMM** - Adjust team point differences
• **Side Picker** - Choose the right side
• **Role Picker** - Select role regardless of Dota selection

### 📊**Overwolf Features:**
• **Player Statistics** - View match statistics
• **Ban Suggestions** - Hero ban recommendations

### 🦸**Hero Specific and KAIO:**
• **KAIO Scripts** - Multifunctional hero automation
• **Tinker Example** - Auto-flying, farming, lane pushing
• **Full Hero Support** - Scripts for all heroes

### 🎒**Inventory Changer:**
• **ALL Dota 2 Items** - Complete item unlock system

### ⚙️**Settings Features:**
• **Scripts Management** - Enable/disable built-in scripts
• **Menu Customization** - Interface personalization
• **Menu Key** - Custom menu binding
• **Reload Key** - Script reloading
• **Security Settings** - Additional protection
• **Safe Mode** - Camera hack limitation
• **Inventory Toggle** - Enable/disable inventory changer
• **Scripts Language** - Multiple language support

### 💎**Umbrella Advantages:**
✅ **Built-in Spoofer** - Complete protection suite
✅ **KAIO System** - Advanced hero automation
✅ **Inventory Changer** - All items unlocked
✅ **Dota Plus Unlock** - Premium features access
✅ **Map Hack** - Enemy visibility through fog
✅ **Auto Features** - Comprehensive automation
✅ **Chat Abuse** - Advanced chat manipulation
✅ **Hero Automation** - All hero scripts included

### 🎮**Perfect For:**
• Competitive Dota 2 players
• Users wanting maximum features
• Streamers requiring safety
• Players seeking hero automation
• Those wanting all cosmetics
• Users needing comprehensive awareness
• Players who want match control
• Those who prefer internal performance

### 🔮**Dota 2 Features:**
• **MOBA Gameplay** - 5v5 team battles
• **Hero Diversity** - 120+ unique heroes
• **Complex Mechanics** - Abilities, items, runes
• **Competitive Ranking** - MMR system
• **Professional Scene** - Esports integration

### 🎯**Key Features:**
• **KAIO Automation** - Advanced hero farming and gameplay scripts
• **Inventory Changer** - Complete cosmetic unlock system
• **Built-in Spoofer** - Complete protection integration
• **Map Hack** - Enemy visibility through fog of war
• **Auto Features** - Comprehensive automation system
• **Chat Abuse** - Advanced chat and manipulation

---
**Internal cheat with KAIO hero automation and inventory changer for ultimate Dota 2 domination!**`)
            .addFields(
                {
                    name: '`🦸` KAIO AUTOMATION',
                    value: 'Advanced hero farming scripts that automatically play heroes like Tinker while you watch.'
                },
                {
                    name: '`🎒` INVENTORY CHANGER',
                    value: 'Complete unlock system providing ALL Dota 2 items and cosmetics.'
                },
                {
                    name: '`🛡️` BUILT-IN SPOOFER',
                    value: 'Complete protection suite integrated for maximum security.'
                },
                {
                    name: '`📞` PURCHASE',
                    value: 'Contact our staff to get your Umbrella Dota 2 premium cheat.'
                }
            )
            .setColor('#4169E1')
            .setImage("https://media.discordapp.net/attachments/1412314599637651477/1434088815982547074/standard.gif?ex=69070ec9&is=6905bd49&hm=72938a9ccd33e000e36c93734e848d14d61c4208845c812a3496d250e63a7c68&=&width=936&height=120")
            .setThumbnail("https://media.discordapp.net/attachments/1412314599637651477/1434088772135424041/file.png.jpeg?ex=69070ebf&is=6905bd3f&hm=87262a13b8a787b6785849841506946668fc482be83748ec3e54c04133d32849&=&format=webp&width=700&height=700")
            .setFooter({
                text: 'Umbrella Dota 2 • Internal • Built-in Spoofer • KAIO & Inventory Changer',
                iconURL: interaction.guild.iconURL()
            });

        await interaction.reply({
            embeds: [embed],
            components: [],
            ephemeral: true
        });
    },
};